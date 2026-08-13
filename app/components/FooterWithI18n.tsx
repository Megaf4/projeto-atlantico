'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function FooterWithI18n() {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="bg-[#0a1320] py-8 border-t border-primary px-6 relative z-10 flex flex-col items-center">
      <div className="max-w-5xl w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16">
        <a href="https://maps.google.com/?q=Rua+Bittencourt,+25+Vila+Nova+-+Santos/SP" target="_blank" className="flex items-center gap-3 hover:text-accent transition-colors group">
          <i className="fa-solid fa-location-dot text-2xl group-hover:-translate-y-1 transition-transform"></i>
          <div className="leading-tight text-left">
            <p className="font-bold text-base md:text-lg">{t.footer.address}</p>
            <p className="text-xs md:text-sm text-gray-400">{t.footer.addressLine2}</p>
          </div>
        </a>
        <a href="tel:+551332212222" className="flex items-center gap-3 hover:text-accent transition-colors group">
          <i className="fa-solid fa-phone text-2xl group-hover:rotate-12 transition-transform"></i>
          <span className="font-bold text-lg md:text-xl">55 13 3221.2222</span>
        </a>
        <a href="mailto:atlanticosts@atlanticosts.com.br" className="flex items-center gap-3 hover:text-accent transition-colors group">
          <i className="fa-solid fa-envelope text-2xl group-hover:-translate-y-1 transition-transform"></i>
          <span className="font-bold text-sm md:text-lg">atlanticosts@atlanticosts.com.br</span>
        </a>
      </div>
      <div className="text-center mt-8 text-xs text-gray-500">{t.footer.copyright}</div>
    </footer>
  );
}
