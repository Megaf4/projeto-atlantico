'use client';

import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function HeaderWithI18n() {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0E1A2B] shadow-lg flex items-center justify-between px-4 md:px-10 py-3 md:py-4 animate-slideDown">
      <div className="flex items-center gap-4 md:gap-12">
        <div className="relative animate-fadeIn">
          <button id="menu-btn" className="text-white hover:text-accent transition-colors flex flex-col gap-1 md:gap-1.5">
            <span className="w-7 md:w-8 h-[3px] md:h-1 bg-white block"></span>
            <span className="w-7 md:w-8 h-[3px] md:h-1 bg-white block"></span>
            <span className="w-7 md:w-8 h-[3px] md:h-1 bg-white block"></span>
          </button>
          <div id="dropdown" className="hidden absolute top-full left-0 mt-5 md:mt-6 w-56 bg-[#223A5E] shadow-2xl border border-dark rounded-b-md overflow-hidden flex-col z-50">
            <a href="/sobre-nos" className="mobile-link px-5 py-4 hover:bg-[#15253F] hover:text-accent transition-colors font-medium border-b border-dark/20 text-lg">{t.nav.aboutUs}</a>
            <a href="#servicos" className="mobile-link px-5 py-4 hover:bg-[#15253F] hover:text-accent transition-colors font-medium border-b border-dark/20 text-lg md:hidden">{t.nav.services.toUpperCase()}</a>
            <a href="/fale-conosco" className="mobile-link px-5 py-4 hover:bg-[#15253F] hover:text-accent transition-colors font-medium border-b border-dark/20 text-lg md:hidden">{t.nav.contactUs.toUpperCase()}</a>
            <a href="/sobre-nos#clientes" className="mobile-link px-5 py-4 hover:bg-[#15253F] hover:text-accent transition-colors font-medium border-b border-dark/20 text-lg">{t.nav.clients}</a>
            <a href="/sobre-nos#parceiros" className="mobile-link px-5 py-4 hover:bg-[#15253F] hover:text-accent transition-colors font-medium border-b border-dark/20 text-lg">{t.nav.partners}</a>
            <a href="/sobre-nos#galeria" className="mobile-link px-5 py-4 hover:bg-[#15253F] hover:text-accent transition-colors font-medium text-lg">{t.nav.gallery}</a>
          </div>
        </div>
        <nav className="flex gap-4 md:gap-8 font-bold tracking-wider text-sm md:text-xl uppercase items-center h-full mt-1 animate-fadeIn animate-delay-100">
          <div className="relative group">
            <a href="#servicos" className="hover:text-accent transition-colors text-white py-2 block">{t.nav.services}</a>
            <div id="desktop-dropdown-menu" className="absolute top-full left-0 hidden md:group-hover:block dropdown-bridge z-50">
              <div className="w-72 bg-[#15253F] shadow-2xl border border-dark rounded-md overflow-hidden flex flex-col">
                <button className="dropdown-service-link text-left px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service={t.services.categories.structural}>{t.services.categories.structural}</button>
                <button className="dropdown-service-link text-left px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service={t.services.categories.ships}>{t.services.categories.ships}</button>
                <button className="dropdown-service-link text-left px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service={t.services.categories.survey}>{t.services.categories.survey}</button>
                <button className="dropdown-service-link text-left px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service={t.services.categories.hydroelectric}>{t.services.categories.hydroelectric}</button>
                <button className="dropdown-service-link text-left px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service={t.services.categories.inspection}>{t.services.categories.inspection}</button>
                <button className="dropdown-service-link text-left px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service={t.services.categories.dredging}>{t.services.categories.dredging}</button>
                <button className="dropdown-service-link text-left px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service={t.services.categories.rescue}>{t.services.categories.rescue}</button>
                <button className="dropdown-service-link text-left px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service={t.services.categories.diving}>{t.services.categories.diving}</button>
                <button className="dropdown-service-link text-left px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service={t.services.categories.pipelines}>{t.services.categories.pipelines}</button>
                <button className="dropdown-service-link text-left px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium text-sm uppercase tracking-wide" data-service={t.services.categories.water}>{t.services.categories.water}</button>
              </div>
            </div>
          </div>
          <a href="/fale-conosco" className="hover:text-accent transition-colors text-white py-2 block">{t.nav.contactUs}</a>
        </nav>
      </div>
      
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        <div className="cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center animate-fadeIn animate-delay-200" onClick={() => window.scrollTo(0,0)}>
          <img src="/images/logo-atlatico-vector.png" alt={t.hero.logoAlt} className="h-12 md:h-16 object-contain" />
        </div>
      </div>
    </header>
  );
}
