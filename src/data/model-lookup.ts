// Shared logic for the model code lookup. The build (maker pages and the list
// the search page downloads) and the search script in the browser both use
// these functions, so a code is matched the same way everywhere.

/** One device from the LineageOS Wiki, as the lookup shows it. */
export interface Device {
  codename: string;
  name: string;
  vendor: string;
  type: string;
  /** Model codes the wiki lists for the device; can be empty. */
  models: string[];
  soc: string;
  ram: string;
  storage: string;
  screen: string[];
  battery: string[];
  /** "YYYY", "YYYY-MM" or "YYYY-MM-DD" */
  release: string;
}

export interface LookupList {
  updated: string;
  devices: Device[];
}

/** Compares codes without case, spaces, hyphens or other punctuation: "sm s911b" finds "SM-S911B". */
export const codeKey = (value: string) => value.toUpperCase().replace(/[^0-9A-Z]/g, '');

/** Like codeKey, but keeps "+", which tells apart names such as Galaxy S23 and Galaxy S23+. */
export const nameKey = (value: string) => value.toUpperCase().replace(/[^0-9A-Z+]/g, '');

/** Lower-case words for name search. */
export const words = (value: string) => value.toLowerCase().split(/[^0-9a-zÀ-￿]+/).filter(Boolean);

/** The device name with its maker, unless the name already starts with it: "Samsung Galaxy S23". */
export const fullName = ({ vendor, name }: Device) =>
  vendor && !name.toLowerCase().startsWith(vendor.toLowerCase()) ? `${vendor} ${name}` : name;

/** A short line for lists: "Qualcomm SM8550 Snapdragon 8 Gen2, 8 GB memory". */
export const specLine = (device: Device) => [device.soc, device.ram && `${device.ram} memory`].filter(Boolean).join(', ');

/** Maker pages. `vendors` are the maker names the wiki uses. */
export const directory = [
  { slug: 'samsung', title: 'Samsung', vendors: ['Samsung'] },
  { slug: 'google', title: 'Google Pixel and Nexus', vendors: ['Google'] },
  { slug: 'xiaomi', title: 'Xiaomi, Redmi and POCO', vendors: ['Xiaomi'] },
  { slug: 'motorola', title: 'Motorola', vendors: ['Motorola'] },
  { slug: 'oneplus', title: 'OnePlus', vendors: ['OnePlus'] },
  { slug: 'lg', title: 'LG', vendors: ['LG'] },
  { slug: 'sony', title: 'Sony', vendors: ['Sony'] },
  { slug: 'asus', title: 'ASUS', vendors: ['ASUS'] },
  { slug: 'lenovo', title: 'Lenovo', vendors: ['Lenovo', 'ZUK'] },
  { slug: 'nubia', title: 'nubia and ZTE', vendors: ['Nubia', 'ZTE'] },
  { slug: 'htc', title: 'HTC', vendors: ['HTC'] },
  { slug: 'huawei', title: 'Huawei', vendors: ['Huawei'] },
  { slug: 'realme', title: 'realme', vendors: ['Realme'] },
  { slug: 'oppo', title: 'OPPO', vendors: ['OPPO'] },
  { slug: 'fairphone', title: 'Fairphone', vendors: ['Fairphone'] },
  { slug: 'nokia', title: 'Nokia', vendors: ['Nokia'] },
] as const;
