import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import inlineScriptCsp from './scripts/inline-script-csp.mjs';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const guidesDir = fileURLToPath(new URL('./src/content/guides/', import.meta.url));
const guideLastmod = new Map(readdirSync(guidesDir).filter(file => file.endsWith('.md')).map(file => {
  const source = readFileSync(join(guidesDir, file), 'utf8');
  const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---/.exec(source)?.[1] ?? '';
  const updated = /^updated:\s*(\d{4}-\d{2}-\d{2})\s*$/m.exec(frontmatter)?.[1];
  const published = /^published:\s*(\d{4}-\d{2}-\d{2})\s*$/m.exec(frontmatter)?.[1];
  if (!published) throw new Error(`Missing published date in ${file}`);
  return [file.slice(0, -3), updated ?? published];
}));
// The model lookup pages change when their device data does.
const devicesUpdated = JSON.parse(readFileSync(new URL('./src/data/devices.json', import.meta.url), 'utf8')).sourceUpdated.slice(0, 10);

const lastmodFor = path => {
  const guide = /^\/guides\/([^/]+)\/$/.exec(path)?.[1];
  if (guide) return guideLastmod.get(guide);
  if (path.startsWith('/model-lookup/')) return devicesUpdated;
  return undefined;
};

export default defineConfig({
  site: 'https://fonecheck.app',
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "connect-src 'self' https://cloudflareinsights.com",
        "frame-src 'none'",
        "object-src 'none'",
      ],
      scriptDirective: { resources: ["'self'", 'https://static.cloudflareinsights.com'] },
      styleDirective: { resources: ["'self'", "'unsafe-inline'"] },
    },
  },
  trailingSlash: 'always',
  integrations: [sitemap({
    // /privacy/ only forwards to the shared Finnvek privacy policy.
    filter: page => new URL(page).pathname !== '/privacy/',
    serialize(item) {
      const date = lastmodFor(new URL(item.url).pathname);
      if (date) item.lastmod = date;
      return item;
    },
  }), inlineScriptCsp()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'DM Sans',
      cssVariable: '--font-dm-sans',
      weights: ['100 1000'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains-mono',
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['monospace'],
    },
  ],
});
