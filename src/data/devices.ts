// Build-time access to the LineageOS Wiki snapshot the model lookup is built
// from. It is refreshed with `npm run devices:update` (scripts/update-devices.mjs).

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

export const devices: Snapshot = JSON.parse(readFileSync(join(process.cwd(), 'src/data/devices.json'), 'utf8'));
