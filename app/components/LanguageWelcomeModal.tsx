'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Locale } from '../i18n/locales';

export default function LanguageWelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { setLocale } = useLanguage();

  useEffect(() => {
    // Verifica se o usuário já escolheu um idioma NESTA SESSÃO
    const hasChosenLanguageThisSession = sessionStorage.getItem('languageChosenThisSession');
    
    if (!hasChosenLanguageThisSession) {
      // Pequeno delay para melhor UX
      setTimeout(() => {
        setIsOpen(true);
      }, 500);
    }
  }, []);

  const handleLanguageChoice = (locale: Locale) => {
    setLocale(locale);
    // Marca como escolhido apenas para esta sessão (não persiste entre abas/fechamento)
    sessionStorage.setItem('languageChosenThisSession', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] animate-fadeIn" />
      
      {/* Modal */}
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 animate-fadeIn">
        <div className="bg-gradient-to-br from-[#0E1A2B] to-[#223A5E] rounded-3xl shadow-2xl border-4 border-accent/30 max-w-2xl w-full p-8 md:p-12 animate-scaleIn">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src="/images/logo-atlatico-vector.png" 
              alt="Atlântico Logo" 
              className="h-20 md:h-24 object-contain"
            />
          </div>

          {/* Título em múltiplos idiomas */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
              Bem-vindo! Welcome! ¡Bienvenido!
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Escolha seu idioma / Choose your language / Elija su idioma
            </p>
          </div>

          {/* Botões de Idioma */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Português */}
            <button
              onClick={() => handleLanguageChoice('pt')}
              className="group bg-white/10 hover:bg-accent hover:scale-105 active:scale-95 border-2 border-white/20 hover:border-accent rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-accent/50"
            >
              <div className="text-6xl mb-3">🇧🇷</div>
              <div className="text-xl font-bold text-white group-hover:text-white">
                Português
              </div>
              <div className="text-sm text-gray-400 group-hover:text-white/90 mt-1">
                Brasil
              </div>
            </button>

            {/* English */}
            <button
              onClick={() => handleLanguageChoice('en')}
              className="group bg-white/10 hover:bg-accent hover:scale-105 active:scale-95 border-2 border-white/20 hover:border-accent rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-accent/50"
            >
              <div className="text-6xl mb-3">🇺🇸</div>
              <div className="text-xl font-bold text-white group-hover:text-white">
                English
              </div>
              <div className="text-sm text-gray-400 group-hover:text-white/90 mt-1">
                United States
              </div>
            </button>

            {/* Español */}
            <button
              onClick={() => handleLanguageChoice('es')}
              className="group bg-white/10 hover:bg-accent hover:scale-105 active:scale-95 border-2 border-white/20 hover:border-accent rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-accent/50"
            >
              <div className="text-6xl mb-3">🇪🇸</div>
              <div className="text-xl font-bold text-white group-hover:text-white">
                Español
              </div>
              <div className="text-sm text-gray-400 group-hover:text-white/90 mt-1">
                España
              </div>
            </button>
          </div>

          {/* Nota */}
          <p className="text-center text-sm text-gray-400 mt-6">
            Você pode alterar o idioma a qualquer momento no menu superior<br/>
            You can change the language anytime in the top menu<br/>
            Puede cambiar el idioma en cualquier momento en el menú superior
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }
      `}</style>
    </>
  );
}
