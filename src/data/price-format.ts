import { basePrice } from './prices';

/**
 * Formats a price the way it is written in the given country, in English:
 * "₹299", "$8.99" in Canada, "79 kr" in Sweden. Whole amounts get no decimals.
 */
export function formatPrice(currency: string, amount: string, country?: string): string {
  const value = Number(amount);
  const digits = Number.isInteger(value) ? 0 : 2;
  const options = { style: 'currency', currency, minimumFractionDigits: digits, maximumFractionDigits: digits } as const;
  try {
    return new Intl.NumberFormat(country ? `en-${country}` : 'en', options).format(value);
  } catch {
    return new Intl.NumberFormat('en', options).format(value);
  }
}

/** The US dollar price written into the static HTML before the visitor's country is known. */
export const basePriceText = formatPrice(basePrice.currency, basePrice.amount);
