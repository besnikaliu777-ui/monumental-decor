import { Locale } from './translations';

/**
 * Prices are formatted by hand rather than through Intl.NumberFormat.
 *
 * toLocaleString depends on the ICU data of whatever runtime it runs in, and
 * Node and the browser disagree on the thousands separator for de-CH, it-CH
 * and en-CH. React then saw different text on the server and on the client and
 * discarded the server-rendered markup: the German, Italian and English pages
 * were failing to hydrate. Building the string ourselves keeps both sides
 * byte-identical, and gives every language the same Swiss convention:
 * CHF 2’999.00
 */

const THOUSANDS = '’';

export function formatPrice(value: number, _locale?: Locale) {
  void _locale;

  const rounded = Math.round(Math.abs(value) * 100) / 100;
  const [whole, decimals] = rounded.toFixed(2).split('.');

  let grouped = '';
  for (let i = 0; i < whole.length; i += 1) {
    if (i > 0 && (whole.length - i) % 3 === 0) grouped += THOUSANDS;
    grouped += whole[i];
  }

  const sign = value < 0 ? '-' : '';
  return `${sign}CHF ${grouped}.${decimals}`;
}
