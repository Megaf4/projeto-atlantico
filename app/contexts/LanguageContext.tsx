'use client';

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Locale, defaultLocale, isValidLocale } from '../i18n/locales';
import { getTranslation } from '../i18n/translations';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: ReturnType<typeof getTranslation>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [isHydrated, setIsHydrated] = useState(false);

  // Carregar locale do localStorage DEPOIS da hidratação
  useEffect(() => {
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale && isValidLocale(savedLocale)) {
      setLocaleState(savedLocale);
    }
    setIsHydrated(true);
  }, []);

  // Atualiza o HTML lang ao montar e quando locale mudar
  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : locale;
  }, [locale]);

  // Recalcula as traduções sempre que o locale mudar
  const t = useMemo(() => {
    const translation = getTranslation(locale);
    console.log('Tradução carregada para:', locale);
    return translation;
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    console.log('🌍 Mudando idioma de', locale, 'para', newLocale);
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
