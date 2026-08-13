'use client';

import { useLanguage } from '../contexts/LanguageContext';
import HeaderWithI18n from '../components/HeaderWithI18n';
import FooterWithI18n from '../components/FooterWithI18n';
import Script from 'next/script';

export default function ExemploI18nPage() {
  const { t, locale } = useLanguage();

  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
        }
        
        .animate-delay-100 { animation-delay: 0.1s; opacity: 0; }
        .animate-delay-200 { animation-delay: 0.2s; opacity: 0; }
      `}</style>

      <Script id="tailwind-config" strategy="beforeInteractive">
        {`
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  dark: '#0E1A2B',
                  panel: '#15253F',
                  primary: '#223A5E',
                  accent: '#E19747',
                  light: '#8FB3FF',
                  whiteish: '#F3F6FF'
                },
                fontFamily: {
                  sans: ['Oswald', 'sans-serif'],
                }
              }
            }
          }
        `}
      </Script>

      <div className="bg-dark text-whiteish font-sans overflow-x-hidden">
        {/* Header com i18n */}
        <HeaderWithI18n />

        {/* Conteúdo Principal */}
        <main className="pt-32 pb-20 min-h-screen">
          <div className="max-w-5xl mx-auto px-4 md:px-10">
            {/* Hero Section */}
            <section className="mb-16 animate-fadeInUp">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.hero.title}</h1>
              <p className="text-xl md:text-2xl text-gray-300">{t.hero.subtitle}</p>
            </section>

            {/* About Section */}
            <section className="mb-16 animate-fadeInUp animate-delay-100">
              <div className="bg-[#1a2b45] inline-block px-6 md:px-8 py-2 rounded-t-xl rounded-br-xl mb-6 shadow-lg border border-primary/50">
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest">{t.about.title}</h2>
              </div>
              <div className="bg-[#0f172a]/90 rounded-3xl p-6 md:p-10 border border-primary/50 shadow-2xl">
                <p className="text-lg md:text-xl mb-4">{t.about.paragraph1}</p>
                <p className="text-lg md:text-xl mb-4">{t.about.paragraph2}</p>
                <p className="text-lg md:text-xl">{t.about.paragraph3}</p>
              </div>
            </section>

            {/* Services Section */}
            <section className="mb-16 animate-fadeInUp animate-delay-200">
              <div className="bg-[#1a2b45] inline-block px-6 md:px-8 py-2 rounded-t-xl rounded-br-xl mb-6 shadow-lg border border-primary/50">
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest">{t.services.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#0f172a]/90 rounded-xl p-6 border border-primary/50 hover:border-accent transition-colors">
                  <h3 className="text-xl font-bold text-accent mb-2">{t.services.categories.structural}</h3>
                  <p className="text-gray-300">Reparos especializados em superfícies submersas</p>
                </div>
                <div className="bg-[#0f172a]/90 rounded-xl p-6 border border-primary/50 hover:border-accent transition-colors">
                  <h3 className="text-xl font-bold text-accent mb-2">{t.services.categories.ships}</h3>
                  <p className="text-gray-300">Manutenção e inspeção de embarcações</p>
                </div>
                <div className="bg-[#0f172a]/90 rounded-xl p-6 border border-primary/50 hover:border-accent transition-colors">
                  <h3 className="text-xl font-bold text-accent mb-2">{t.services.categories.survey}</h3>
                  <p className="text-gray-300">Mapeamento e documentação subaquática</p>
                </div>
                <div className="bg-[#0f172a]/90 rounded-xl p-6 border border-primary/50 hover:border-accent transition-colors">
                  <h3 className="text-xl font-bold text-accent mb-2">{t.services.categories.hydroelectric}</h3>
                  <p className="text-gray-300">Manutenção especializada para o setor elétrico</p>
                </div>
              </div>
            </section>

            {/* Info Section */}
            <section className="animate-fadeInUp animate-delay-200">
              <div className="bg-accent/10 border border-accent rounded-xl p-6">
                <h3 className="text-2xl font-bold text-accent mb-4">
                  📍 {locale === 'pt' ? 'Idioma Atual' : locale === 'en' ? 'Current Language' : 'Idioma Actual'}
                </h3>
                <p className="text-lg">
                  {locale === 'pt' && '🇧🇷 Português - Use o seletor de idiomas no topo para mudar'}
                  {locale === 'en' && '🇺🇸 English - Use the language switcher at the top to change'}
                  {locale === 'es' && '🇪🇸 Español - Use el selector de idioma en la parte superior para cambiar'}
                </p>
              </div>
            </section>
          </div>
        </main>

        {/* Footer com i18n */}
        <FooterWithI18n />
      </div>

      <Script id="menu-script" strategy="afterInteractive">
        {`
          setTimeout(function() {
            const menuBtn = document.getElementById('menu-btn');
            const dropdown = document.getElementById('dropdown');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            if (menuBtn && dropdown) {
              menuBtn.addEventListener('click', () => { 
                dropdown.classList.toggle('hidden');
                dropdown.classList.toggle('flex');
              });

              document.addEventListener('click', (e) => {
                if (!menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
                  dropdown.classList.add('hidden');
                  dropdown.classList.remove('flex');
                }
              });
            }

            if (mobileLinks) {
              mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                  if (dropdown) {
                    dropdown.classList.add('hidden');
                    dropdown.classList.remove('flex');
                  }
                });
              });
            }
          }, 100);
        `}
      </Script>
    </>
  );
}
