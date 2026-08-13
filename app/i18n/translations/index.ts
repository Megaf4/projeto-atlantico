import { pt } from './pt';
import { en } from './en';
import { es } from './es';
import { Locale } from '../locales';

export const translations = {
  pt,
  en,
  es,
} as const;

export function getTranslation(locale: Locale) {
  return translations[locale] || translations.pt;
}
