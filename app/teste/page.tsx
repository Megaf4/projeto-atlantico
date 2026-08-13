'use client';

import { useLanguage } from '../contexts/LanguageContext';
import HeaderWithI18n from '../components/HeaderWithI18n';
import FooterWithI18n from '../components/FooterWithI18n';

export default function TestePage() {
  const { t, locale } = useLanguage();

  return (
    <div className="min-h-screen bg-dark text-white">
      <HeaderWithI18n />
      
      <main className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
        <div className="bg-primary p-8 rounded-lg mb-8">
          <h1 className="text-4xl font-bold mb-4 text-accent">
            🧪 Teste de Tradução
          </h1>
          <p className="text-2xl mb-2">
            Idioma Atual: <span className="text-accent font-bold">{locale.toUpperCase()}</span>
          </p>
        </div>

        <div className="bg-panel p-8 rounded-lg mb-8">
          <h2 className="text-3xl font-bold mb-6 text-accent">{t.hero.title}</h2>
          <p className="text-xl mb-4">{t.hero.subtitle}</p>
        </div>

        <div className="bg-panel p-8 rounded-lg mb-8">
          <h2 className="text-3xl font-bold mb-6 text-accent">{t.services.title}</h2>
          <ul className="space-y-2">
            <li>✅ {t.services.categories.structural}</li>
            <li>✅ {t.services.categories.ships}</li>
            <li>✅ {t.services.categories.survey}</li>
            <li>✅ {t.services.categories.hydroelectric}</li>
            <li>✅ {t.services.categories.inspection}</li>
          </ul>
        </div>

        <div className="bg-panel p-8 rounded-lg mb-8">
          <h2 className="text-3xl font-bold mb-6 text-accent">{t.about.title}</h2>
          <p className="mb-4">{t.about.paragraph1}</p>
          <p className="mb-4">{t.about.paragraph2}</p>
          <p>{t.about.paragraph3}</p>
        </div>

        <div className="bg-accent/20 border-2 border-accent p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">📝 Como testar:</h3>
          <ol className="list-decimal list-inside space-y-2 text-lg">
            <li>Use o seletor de idiomas no header (🇧🇷 PT ▼)</li>
            <li>Escolha outro idioma (EN ou ES)</li>
            <li>Veja TODO o conteúdo mudar instantaneamente</li>
            <li>Recarregue a página - idioma é mantido</li>
          </ol>
        </div>

        <div className="mt-8 bg-red-900/30 border-2 border-red-500 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-red-300">⚠️ Se o modal não aparecer:</h3>
          <p className="mb-4">Abra o console (F12) e digite:</p>
          <code className="block bg-black p-4 rounded text-green-400">
            localStorage.clear();<br/>
            location.reload();
          </code>
        </div>
      </main>

      <FooterWithI18n />
    </div>
  );
}
