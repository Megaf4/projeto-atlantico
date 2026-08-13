'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { Locale } from '../i18n/locales';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const languages: { code: Locale; label: string; flag: string }[] = [
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 text-white hover:text-accent transition-colors px-3 py-2">
        <span className="text-xl">{languages.find(l => l.code === locale)?.flag}</span>
        <span className="hidden md:inline text-sm font-bold uppercase tracking-wide">
          {languages.find(l => l.code === locale)?.code}
        </span>
        <i className="fa-solid fa-chevron-down text-xs"></i>
      </button>
      
      <div className="absolute top-full right-0 mt-2 hidden group-hover:block z-50">
        <div className="w-40 bg-[#223A5E] shadow-2xl border border-dark rounded-md overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLocale(lang.code)}
              className={`w-full text-left px-4 py-3 hover:bg-[#15253F] hover:text-accent transition-colors font-medium border-b border-dark/20 last:border-b-0 flex items-center gap-3 ${
                locale === lang.code ? 'bg-[#15253F] text-accent' : ''
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="text-sm">{lang.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
