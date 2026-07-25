"use client";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-black/95 via-black/90 to-blue-900/90 backdrop-blur border-t border-cyan-400/20 p-3 text-white text-xs md:text-sm z-30">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-6">
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 text-center md:text-left text-gray-300 text-xs">
          <span className="flex items-center gap-2 justify-center md:justify-start">
            <span>📍</span>
            <span>Rua Bittencourt, 25 - Vila Nova - Santos/SP</span>
          </span>
          <a href="tel:+551332212222" className="hover:text-cyan-300 transition flex items-center gap-2 justify-center md:justify-start">
            <span>📞</span>
            <span>55 13 3221 2222</span>
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 text-center md:text-right text-gray-300 text-xs">
          <a href="mailto:atlanticosts@atlanticcosts.com.br" className="hover:text-cyan-300 transition flex items-center gap-2 justify-center md:justify-end">
            <span>✉️</span>
            <span>atlanticosts@atlanticcosts.com.br</span>
          </a>
          <span>© 2025 Atlântico. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
