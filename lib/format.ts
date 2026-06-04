import { Locale } from './translations';

const currencyLocales: Record<Locale, string> = {
  fr: 'fr-CH',
  de: 'de-CH',
  it: 'it-CH',
  en: 'en-CH',
};

export function formatPrice(value: number, locale: Locale) {
  return value.toLocaleString(currencyLocales[locale] ?? 'fr-CH', {
    style: 'currency',
    currency: 'CHF',
  });
}
