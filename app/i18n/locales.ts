export const locales = ['pt', 'en', 'es'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'pt';

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
