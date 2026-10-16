// Build-time access to the LineageOS Wiki snapshot the model lookup is built
// from. It is refreshed with `npm run devices:update` (scripts/update-devices.mjs).
// The wiki also documents tablets, TV boxes and game consoles; fonecheck is
// about phones, so only phones (including foldables and sliders) are used.

import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Device } from './model-lookup';

interface Snapshot {
  source: string;
  repository: string;
  commit: string;
  sourceUpdated: string;
  licence: string;
  count: number;
  devices: Device[];
}

const snapshot: Snapshot = JSON.parse(readFileSync(join(process.cwd(), 'src/data/devices.json'), 'utf8'));
const isPhone = (type: string) => /^(phone|foldable)/i.test(type);

export const devices: Snapshot = { ...snapshot, devices: snapshot.devices.filter(device => isPhone(device.type)) };
