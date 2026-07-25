"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <div 
      className="relative w-full h-full flex"
      style={{
        backgroundImage: 'url(/images/diver.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0a4a6e',
      }}
    >
      {/* Sem overlay - imagem pura */}

      {/* Content - Logo no canto inferior esquerdo */}
      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-10 text-white">
        <div className="animate-fade-in">
          {/* Logo Atlântico com círculo e texto */}
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/images/logo-top.png"
              alt="Atlântico"
              width={500}
              height={100}
              priority
              className="w-auto h-20 md:h-28"
            />
          </div>
          
          {/* Subtítulo */}
          <p 
            className="text-sm md:text-base font-light tracking-wide ml-1 text-white/90"
          >
            Serviços Técnicos Submarinos
          </p>
        </div>
      </div>

      {/* Indicador de navegação no canto inferior esquerdo */}
      <div className="absolute bottom-4 left-4 z-10">
        <div className="w-10 h-10 bg-black/40 backdrop-blur rounded flex items-center justify-center text-white text-xs font-bold">
          N
        </div>
      </div>
    </div>
  );
}
