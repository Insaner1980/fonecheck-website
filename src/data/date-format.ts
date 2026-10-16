/** Dates are shown as e.g. "15 October 2026", in UTC so they never shift by timezone. */
export const formatDate = (date: Date | string) =>
  new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

/** "2024-08-22", "2014-04" or "2021" as "22 August 2024", "April 2014" or "2021". */
export const formatPartialDate = (value: string) => {
  const [year, month, day] = value.split('-').map(Number);
  if (!month) return String(year);
  const date = new Date(Date.UTC(year, month - 1, day || 1));
  return day ? formatDate(date) : date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' });
};
