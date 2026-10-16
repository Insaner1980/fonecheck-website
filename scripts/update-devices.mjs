// Downloads the device data of the LineageOS Wiki and writes the snapshot the
// model lookup is built from (src/data/devices.json): names, model codes and
// specifications. The wiki content is licensed under CC BY-SA 3.0; the pages
// credit it.
//
// The new snapshot replaces the old one only when it passes the checks below,
// so a failed or partial download leaves the last working data in place.
//
// Usage: npm run devices:update

import { readFile, rename, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

const REPO = 'LineageOS/lineage_wiki';
const DIR = '_data/devices';
const OUT = fileURLToPath(new URL('../src/data/devices.json', import.meta.url));
const MIN_DEVICES = 500;
const MAX_DROP = 0.1;
const CONCURRENCY = 12;

const fail = message => {
  console.error(`devices:update: ${message} The previous snapshot was kept.`);
  process.exit(1);
};

const getJson = async url => {
  const response = await fetch(url, { headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'fonecheck-website' } })
    .catch(error => fail(`Request to ${url} failed (${error.message}).`));
  if (!response.ok) fail(`Request to ${url} failed with HTTP ${response.status}.`);
  return response.json();
};

// The wiki writes most values as plain fields, but some devices list a value
// per variant as [{label: value}, ...]. Those become "label: value" lines.
const perVariant = (value, format) => {
  if (value === undefined || value === null || value === '') return [];
  if (Array.isArray(value)) {
    const lines = value.flatMap(item => {
      if (item && typeof item === 'object' && !Array.isArray(item)) {
        return Object.entries(item).map(([label, inner]) => {
          const text = format(inner);
          return text ? `${label}: ${text}` : '';
        });
      }
      return [format(item)];
    });
    return [...new Set(lines.filter(Boolean))];
  }
  const text = format(value);
  return text ? [text] : [];
};

const text = value => (value === undefined || value === null ? '' : String(value).trim());

const screen = value => {
  if (!value || typeof value !== 'object') return text(value);
  const size = value.size ? `${value.size}″` : '';
  const resolution = value.resolution ? String(value.resolution).replace(/\s*x\s*/i, ' × ') : '';
  const refresh = value.refresh_rate ? `${value.refresh_rate} Hz` : '';
  return [[size, text(value.technology)].filter(Boolean).join(' '), resolution, refresh].filter(Boolean).join(', ');
};

const battery = value => {
  if (!value || typeof value !== 'object') return text(value);
  return value.capacity ? `${value.capacity} mAh` : '';
};

// Release is a year, "YYYY-MM", "YYYY-MM-DD", or one date per model. The
// earliest date is kept so the value always reads as "first released".
const release = value => {
  const dates = Array.isArray(value)
    ? value.flatMap(item => (item && typeof item === 'object' ? Object.values(item) : [item])).map(text)
    : [text(value)];
  return dates.filter(date => /^\d{4}(-\d{2}){0,2}$/.test(date)).sort()[0] ?? '';
};

const commit = await getJson(`https://api.github.com/repos/${REPO}/commits/main`);
const listing = await getJson(`https://api.github.com/repos/${REPO}/contents/${DIR}?ref=${commit.sha}`);
const files = listing.filter(entry => entry.type === 'file' && /\.ya?ml$/.test(entry.name));
if (files.length < MIN_DEVICES) fail(`Only ${files.length} device files, expected at least ${MIN_DEVICES}.`);

const devices = [];
let failed = 0;
let next = 0;
const worker = async () => {
  while (next < files.length) {
    const file = files[next++];
    try {
      const response = await fetch(file.download_url);
      if (!response.ok) throw new Error(String(response.status));
      const data = parse(await response.text());
      if (!data?.codename || !data?.name) throw new Error('missing codename or name');
      devices.push({
        codename: text(data.codename),
        name: text(data.name),
        vendor: text(data.vendor),
        type: text(data.type),
        models: Array.isArray(data.models) ? data.models.map(text).filter(Boolean) : [],
        soc: perVariant(data.soc, text).join(' or '),
        ram: text(data.ram),
        storage: text(data.storage),
        screen: perVariant(data.screen, screen),
        battery: perVariant(data.battery, battery),
        release: release(data.release),
      });
    } catch (error) {
      failed++;
      console.warn(`devices:update: skipped ${file.name} (${error.message}).`);
    }
  }
};
await Promise.all(Array.from({ length: CONCURRENCY }, worker));

if (failed > files.length * 0.02) fail(`${failed} of ${files.length} device files could not be read.`);
const previous = await readFile(OUT, 'utf8').then(JSON.parse).catch(() => null);
if (previous && devices.length < previous.count * (1 - MAX_DROP)) {
  fail(`Device count fell from ${previous.count} to ${devices.length}.`);
}

devices.sort((a, b) => a.codename.localeCompare(b.codename) || a.name.localeCompare(b.name));
const json = [
  '{',
  `  "source": "https://wiki.lineageos.org/devices/",`,
  `  "repository": "https://github.com/${REPO}",`,
  `  "commit": ${JSON.stringify(commit.sha)},`,
  `  "sourceUpdated": ${JSON.stringify(commit.commit.committer.date)},`,
  `  "licence": "CC BY-SA 3.0",`,
  `  "count": ${devices.length},`,
  '  "devices": [',
  devices.map(device => `    ${JSON.stringify(device)}`).join(',\n'),
  '  ]',
  '}',
  '',
].join('\n');

const temp = `${OUT}.tmp`;
await writeFile(temp, json, 'utf8');
await rename(temp, OUT);
console.log(`devices:update: wrote ${devices.length} devices from commit ${commit.sha.slice(0, 7)}${previous ? ` (previously ${previous.count})` : ''}.`);
