"use client";

import { useState } from "react";
import Image from "next/image";

interface HeaderProps {
  onMenuToggle?: (open: boolean) => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    onMenuToggle?.(!menuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1e3a5f] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12 w-full">
          {/* Menu Hamburger */}
          <button
            onClick={handleMenuClick}
            className="text-white hover:opacity-80 transition flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-12 text-white font-bold text-base tracking-wide">
            <a href="/servicos" className="hover:text-cyan-300 transition uppercase">
              Serviços
            </a>
            <a href="/fale-conosco" className="hover:text-cyan-300 transition uppercase">
              Fale Conosco
            </a>
          </nav>
        </div>
        
        {/* Logo Circular */}
        <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg shrink-0">
          <Image 
            src="/images/logo-atlatico-vector.png" 
            alt="Atlântico Logo" 
            width={56} 
            height={56}
            className="w-full h-full object-contain"
          />
        </div>
      </header>

      {/* Menu Lateral (Suspenso) */}
      {menuOpen && (
        <>
          {/* Overlay escuro */}
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>
          
          {/* Menu Lateral */}
          <div className="fixed top-0 left-0 h-full w-64 bg-[#2c4d6f] z-50 shadow-2xl">
            <nav className="flex flex-col p-6 gap-2">
              <a
                href="/"
                className="text-white font-bold text-base py-3 px-4 hover:bg-white/10 rounded transition uppercase"
                onClick={() => setMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#sobre"
                className="text-white font-bold text-base py-3 px-4 hover:bg-white/10 rounded transition uppercase"
                onClick={() => setMenuOpen(false)}
              >
                Sobre Nós
              </a>
              <a
                href="/servicos"
                className="text-white font-bold text-base py-3 px-4 hover:bg-white/10 rounded transition uppercase"
                onClick={() => setMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="/fale-conosco"
                className="text-white font-bold text-base py-3 px-4 hover:bg-white/10 rounded transition uppercase"
                onClick={() => setMenuOpen(false)}
              >
                Fale Conosco
              </a>
              <a
                href="#clientes"
                className="text-white font-bold text-base py-3 px-4 hover:bg-white/10 rounded transition uppercase"
                onClick={() => setMenuOpen(false)}
              >
                Clientes
              </a>
              <a
                href="#parceiros"
                className="text-white font-bold text-base py-3 px-4 hover:bg-white/10 rounded transition uppercase"
                onClick={() => setMenuOpen(false)}
              >
                Parceiros
              </a>
              <a
                href="#galeria"
                className="text-white font-bold text-base py-3 px-4 hover:bg-white/10 rounded transition uppercase"
                onClick={() => setMenuOpen(false)}
              >
                Galeria
              </a>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
