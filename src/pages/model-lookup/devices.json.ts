import type { APIRoute } from 'astro';
import { devices } from '../../data/devices';
import type { LookupList } from '../../data/model-lookup';

// The list the lookup page downloads.
export const GET = (() => {
  const list: LookupList = { updated: devices.sourceUpdated, devices: devices.devices };
  return new Response(JSON.stringify(list), { headers: { 'Content-Type': 'application/json' } });
}) satisfies APIRoute;
