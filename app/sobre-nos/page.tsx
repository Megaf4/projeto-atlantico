'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function SobreNosPage() {
  const { t } = useLanguage();
  useEffect(() => {
    // Force-remove any background-image set by compiled CSS (use important)
    try {
      const sobreEl = document.querySelector('.sobre-nos-bg') as HTMLElement | null;
      if (sobreEl) {
        sobreEl.style.setProperty('background-image', 'none', 'important');
        sobreEl.style.setProperty('background-color', '#2b4c7e', 'important');
      }
    } catch (e) {
      // ignore
    }

    const timer = setTimeout(async () => {
      // 1. Menu Hamburguer
      const menuBtn = document.getElementById('menu-btn');
      const dropdown = document.getElementById('dropdown');
      
      if (menuBtn && dropdown) {
        menuBtn.addEventListener('click', () => { 
          dropdown.classList.toggle('hidden');
          dropdown.classList.toggle('flex');
        });
        
        document.addEventListener('click', (e) => {
          if (!menuBtn.contains(e.target as Node) && !dropdown.contains(e.target as Node)) {
            dropdown.classList.add('hidden');
            dropdown.classList.remove('flex');
          }
        });
      }

      // 2. Slideshow "Sobre Nós"
      const slides = document.querySelectorAll('.slide-img');
      let currentSlide = 0;
      setInterval(() => {
        slides[currentSlide].classList.remove('opacity-100', 'z-10');
        slides[currentSlide].classList.add('opacity-0', 'z-0');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.remove('opacity-0', 'z-0');
        slides[currentSlide].classList.add('opacity-100', 'z-10');
      }, 4000);

      // 3. Carrossel de Parceiros
      const partnersTrack = document.getElementById('partners-track');
      let partnerScrollInterval: any;
      let isPartnerPaused = false;
      let partnerTimeout: any;

      // Lista de logos dos parceiros
      const parceirosLogos = [
        { nome: 'Enercan', arquivo: 'enercan.png' },
        { nome: 'Louis Dreyfus', arquivo: 'louis-dreyfus.png' },
        { nome: 'Water Port', arquivo: 'water-port.png' },
        { nome: 'COPEL', arquivo: 'copel.png' },
        { nome: 'TGG', arquivo: 'tgg.png' },
        { nome: 'Concreato', arquivo: 'concreato.png' },
        { nome: 'Andrade Gutierrez', arquivo: 'andrade-gutierrez.png' },
        { nome: 'Galvão', arquivo: 'galvao.png' },
        { nome: 'Porto Santos', arquivo: 'porto-santos.png' },
        { nome: 'Pref. Santos', arquivo: 'prefeitura-santos.png' },
        { nome: 'SABESP', arquivo: 'sabesp.png' },
        { nome: 'Libra Terminais', arquivo: 'libra-terminais.png' },
        { nome: 'TECON DI', arquivo: 'tecon-di.png' },
        { nome: 'Odebrecht', arquivo: 'odebrecht.png' },
        { nome: 'Petrobras', arquivo: 'petrobras-br.png' }
      ];

      let partnerHTML = '';
      // Duplicar 3 vezes para efeito infinito suave
      for(let repeat = 0; repeat < 3; repeat++) {
        parceirosLogos.forEach(parceiro => {
          partnerHTML += '<a href="#" target="_blank" class="shrink-0 w-32 h-32 md:w-40 md:h-40 bg-white rounded-xl shadow-md border-[4px] border-[#e2e8f0] flex items-center justify-center p-3 hover:scale-105 transition-transform">' +
            '<img src="/parceiros/' + parceiro.arquivo + '" alt="' + parceiro.nome + '" class="max-w-full max-h-full object-contain" onerror="this.onerror=null; this.parentElement.innerHTML=\'<div class=\\\'text-center\\\'><div class=\\\'text-gray-400 text-xs font-bold\\\'>' + parceiro.nome + '</div><div class=\\\'text-gray-300 text-[8px] mt-1\\\'>Logo não encontrado</div></div>\'">' +
            '</a>';
        });
      }
      if (partnersTrack) partnersTrack.innerHTML = partnerHTML;

      function startAutoScrollPartners() {
        if(partnerScrollInterval) clearInterval(partnerScrollInterval);
        partnerScrollInterval = setInterval(() => {
          if(!isPartnerPaused && partnersTrack) {
            partnersTrack.scrollLeft += 1.5;
            if(partnersTrack.scrollLeft >= partnersTrack.scrollWidth / 2) {
              partnersTrack.scrollLeft = 0;
            }
          }
        }, 30);
      }

      (window as any).scrollPartners = function(direction: number) {
        isPartnerPaused = true;
        clearTimeout(partnerTimeout);
        if (partnersTrack) partnersTrack.scrollBy({ left: direction * 250, behavior: 'smooth' });
        partnerTimeout = setTimeout(() => { isPartnerPaused = false; }, 5000);
      };
      
      startAutoScrollPartners();

      // 4. Galeria de Imagens - CARREGAR TODAS AS IMAGENS E VÍDEOS
      const galleryTrack = document.getElementById('gallery-track');
      let galleryData: any[] = [];
      
      // Carregar imagens e vídeos reais do JSON
      try {
        const response = await fetch('/data/gallery-data.json');
        const data = await response.json();
        
        console.log('✅ Galeria: Dados carregados', data.estatisticas);
        
        // Coletar TODAS as imagens e vídeos de TODOS os clientes
        if (data && data.clientes) {
          const clientesArray = Object.values(data.clientes);
          
          // Pegar TODAS as imagens e vídeos de cada cliente
          for (const cliente of clientesArray as any[]) {
            if (cliente.imagens) {
              // Garantir que imagens é sempre um array
              const imagensArray = Array.isArray(cliente.imagens) 
                ? cliente.imagens 
                : [cliente.imagens];
              
              if (imagensArray.length > 0) {
                imagensArray.forEach((url: string) => {
                  // Verificar se a URL não está vazia ou inválida
                  if (!url || url.trim() === '' || url === 'null' || url === 'undefined') {
                    console.warn('⚠️ URL inválida ignorada para cliente:', cliente.nome);
                    return;
                  }
                  
                  const lower = url.toLowerCase();
                  let type = 'img';
                  
                  // Identificar se é vídeo
                  if (lower.includes('.mp4') || lower.includes('.mpg') || lower.includes('.mpeg') || lower.includes('.mov')) {
                    type = 'vid';
                  }
                  
                  galleryData.push({ 
                    type: type, 
                    url: url,
                    originalUrl: url,
                    cliente: cliente.nome
                  });
                });
              }
            }
          }
          
          // Embaralhar as imagens para variedade
          galleryData.sort(() => Math.random() - 0.5);
          
          console.log('✅ Galeria: ' + galleryData.length + ' itens carregados (imagens e vídeos)');
          
          // Verificar se há imagens suficientes
          if (galleryData.length < 10) {
            console.warn('⚠️ Poucas imagens encontradas, adicionando placeholders');
          }
        }
      } catch (error) {
        console.error('❌ Erro ao carregar galeria:', error);
        // Se houver erro, não usar fallback - deixar vazio ou usar imagens locais
        console.log('⚠️ Galeria não pôde ser carregada');
      }

      // Build gallery items using DOM methods to avoid complex escape sequences
      const numSets = 3; // Reduzir duplicação já que temos muitas imagens
      console.log('🎨 Gerando a galeria (DOM) com', galleryData.length, 'imagens');

      const frag = document.createDocumentFragment();

      for (let i = 0; i < numSets; i++) {
        galleryData.forEach((item, index) => {
          const thumbnailUrl = item.type === 'vid'
            ? 'https://via.placeholder.com/260x260/1a2b45/FFFFFF?text=Video'
            : item.url;

          const imgId = 'gallery-img-' + i + '-' + index;

          const itemDiv = document.createElement('div');
          itemDiv.className = 'shrink-0 w-[220px] h-[220px] md:w-[260px] md:h-[260px] bg-[#223A5E] rounded-3xl overflow-hidden border-[4px] md:border-[6px] border-[#e2e8f0] relative cursor-pointer group shadow-lg flex items-center justify-center';
          itemDiv.addEventListener('click', () => {
            try { window.openLightbox(item.url, item.type); } catch (e) { console.warn('openLightbox missing', e); }
          });

          const img = document.createElement('img');
          img.id = imgId;
          img.src = thumbnailUrl;
          img.className = 'w-full h-full object-cover transition-transform duration-500 group-hover:scale-110';
          img.alt = 'Trabalho ' + (item.cliente || 'Atlântico');
          img.loading = 'lazy';
          img.onload = () => console.log('✅ Imagem carregada:', item.cliente);
          img.onerror = function () {
            console.error('❌ Erro ao carregar:', item.cliente, this.src);
            this.onerror = null;
            this.style.display = 'none';
            const fallback = document.createElement('div');
            fallback.className = 'text-center text-white p-4';
            fallback.innerHTML = '<i class="fa-solid fa-image-slash text-4xl mb-2 opacity-50"></i><p class="text-sm font-bold">' + (item.cliente || 'Imagem') + '</p><p class="text-xs opacity-70 mt-1">Imagem não disponível</p>';
            itemDiv.appendChild(fallback);
          };

          itemDiv.appendChild(img);

          // optional: add play icon and client label as HTML
          if (item.type === 'vid') {
            const playWrap = document.createElement('div');
            playWrap.className = 'absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors';
            playWrap.innerHTML = '<i class="fa-solid fa-play text-white/80 text-4xl drop-shadow-md"></i>';
            itemDiv.appendChild(playWrap);
          }

          if (item.cliente) {
            const clienteLabel = document.createElement('div');
            clienteLabel.className = 'absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity';
            clienteLabel.innerHTML = '<p class="text-white text-sm font-bold truncate">' + item.cliente + '</p>';
            itemDiv.appendChild(clienteLabel);
          }

          frag.appendChild(itemDiv);
        });
      }

      if (galleryTrack) {
        galleryTrack.innerHTML = '';
        galleryTrack.appendChild(frag);
        console.log('✅ Galeria inserida no DOM (DOM build)');
      }

      let gallerySetWidth = 0;
      setTimeout(() => {
        if (galleryTrack) {
          gallerySetWidth = galleryTrack.scrollWidth / numSets;
          galleryTrack.scrollTo({ left: gallerySetWidth * 3, behavior: 'instant' });
        }
      }, 100);

      (window as any).scrollGallery = function(direction: number) {
        if (galleryTrack) galleryTrack.scrollBy({ left: direction * 450, behavior: 'smooth' });
      };

      if (galleryTrack) {
        galleryTrack.addEventListener('scroll', () => {
          if (!gallerySetWidth || !galleryTrack) return;
          
          if (galleryTrack.scrollLeft < gallerySetWidth * 1.5) {
            galleryTrack.scrollTo({ left: galleryTrack.scrollLeft + (gallerySetWidth * 2), behavior: 'instant' });
          }
          else if (galleryTrack.scrollLeft > gallerySetWidth * 4.5) {
            galleryTrack.scrollTo({ left: galleryTrack.scrollLeft - (gallerySetWidth * 2), behavior: 'instant' });
          }
        });
      }

      // 5. Lightbox (Modal da Galeria)
      const lightbox = document.getElementById('lightbox');
      const lbImg = document.getElementById('lightbox-img');
      const lbPlay = document.getElementById('lightbox-play');

      (window as any).openLightbox = function(url: string, type: string) {
        if (lbImg && lightbox) {
          (lbImg as HTMLImageElement).src = url;
          if(type === 'vid' && lbPlay) {
            lbPlay.classList.remove('hidden');
          } else if (lbPlay) {
            lbPlay.classList.add('hidden');
          }
          lightbox.classList.remove('hidden');
          lightbox.classList.add('flex');
          document.body.style.overflow = 'hidden';
        }
      };

      (window as any).closeLightbox = function() {
        if (lightbox) {
          lightbox.classList.add('hidden');
          lightbox.classList.remove('flex');
          document.body.style.overflow = 'auto';
        }
      };

      if (lightbox) {
        lightbox.addEventListener('click', (e) => {
          if(e.target === lightbox) (window as any).closeLightbox();
        });
      }
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .dropdown-bridge { padding-top: 1.5rem; }
        .fade-img { transition: opacity 1.5s ease-in-out; }
        
        /* Animações */
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
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
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
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        .animate-delay-100 { animation-delay: 0.1s; opacity: 0; }
        .animate-delay-200 { animation-delay: 0.2s; opacity: 0; }
        .animate-delay-300 { animation-delay: 0.3s; opacity: 0; }
        .animate-delay-400 { animation-delay: 0.4s; opacity: 0; }
        .animate-delay-500 { animation-delay: 0.5s; opacity: 0; }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
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

      <div className="bg-dark text-whiteish font-sans overflow-x-hidden relative">
        {/* Background Fixo */}
        <div className="fixed inset-0 z-[-1]">
          <img src="https://images.unsplash.com/photo-1682687981974-c5ef2111640c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Fundo Mar" className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
          <div className="absolute inset-0 bg-[#0a111c]/80 backdrop-blur-[2px]"></div>
        </div>

        {/* HEADER */}
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
                <a href="/#servicos" className="mobile-link px-5 py-4 hover:bg-[#15253F] hover:text-accent transition-colors font-medium border-b border-dark/20 text-lg md:hidden">{t.nav.services.toUpperCase()}</a>
                <a href="/fale-conosco" className="mobile-link px-5 py-4 hover:bg-[#15253F] hover:text-accent transition-colors font-medium border-b border-dark/20 text-lg md:hidden">{t.nav.contactUs}</a>
                <a href="/sobre-nos#clientes" className="mobile-link px-5 py-4 hover:bg-[#15253F] hover:text-accent transition-colors font-medium border-b border-dark/20 text-lg">{t.nav.clients}</a>
                <a href="/sobre-nos#parceiros" className="mobile-link px-5 py-4 hover:bg-[#15253F] hover:text-accent transition-colors font-medium border-b border-dark/20 text-lg">{t.nav.partners}</a>
                <a href="/sobre-nos#galeria" className="mobile-link px-5 py-4 hover:bg-[#15253F] hover:text-accent transition-colors font-medium text-lg">{t.nav.gallery}</a>
              </div>
            </div>
            <nav className="flex gap-4 md:gap-8 font-bold tracking-wider text-sm md:text-xl uppercase items-center h-full mt-1 animate-fadeIn animate-delay-100">
              <div className="relative group">
                <a href="/#servicos" className="hover:text-accent transition-colors text-white py-2 block">{t.nav.services}</a>
                <div id="desktop-dropdown-menu" className="absolute top-full left-0 hidden md:group-hover:block dropdown-bridge z-50">
                  <div className="w-72 bg-[#15253F] shadow-2xl border border-dark rounded-md overflow-hidden flex flex-col">
                    <a href="/?servico=Recuperação Estrutural#servicos" className="dropdown-service-link text-left block w-full px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide">{t.services.categories.structural}</a>
                    <a href="/?servico=Navios e Plataformas#servicos" className="dropdown-service-link text-left block w-full px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide">{t.services.categories.ships}</a>
                    <a href="/?servico=Levantamento e Registro#servicos" className="dropdown-service-link text-left block w-full px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide">{t.services.categories.survey}</a>
                    <a href="/?servico=Hidroelétricas e Barragens#servicos" className="dropdown-service-link text-left block w-full px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide">{t.services.categories.hydroelectric}</a>
                    <a href="/?servico=Inspeção e Vistoria#servicos" className="dropdown-service-link text-left block w-full px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide">{t.services.categories.inspection}</a>
                    <a href="/?servico=Dragagem e Sondagem#servicos" className="dropdown-service-link text-left block w-full px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide">{t.services.categories.dredging}</a>
                    <a href="/?servico=Resgate e Salvatagem#servicos" className="dropdown-service-link text-left block w-full px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide">{t.services.categories.rescue}</a>
                    <a href="/?servico=Mergulho Especializado#servicos" className="dropdown-service-link text-left block w-full px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide">{t.services.categories.diving}</a>
                    <a href="/?servico=Dutos e Cabos Submarinos#servicos" className="dropdown-service-link text-left block w-full px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide">{t.services.categories.pipelines}</a>
                    <a href="/?servico=Tratamento de Água#servicos" className="dropdown-service-link text-left block w-full px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium text-sm uppercase tracking-wide">{t.services.categories.water}</a>
                  </div>
                </div>
              </div>
              <a href="/fale-conosco" className="hover:text-accent transition-colors text-white py-2 block">{t.nav.contactUs}</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="cursor-pointer hover:opacity-80 transition-opacity animate-fadeIn animate-delay-200" onClick={() => window.location.href='/'}>
              <img src="/images/logo-atlatico-vector.png" alt="Atlântico Logo" className="h-10 md:h-14 object-contain" />
            </div>
            <LanguageSwitcher />
          </div>
        </header>

        <main className="pt-24 pb-12 flex flex-col items-center w-full">
          {/* 1. SEÇÃO: SOBRE NÓS */}
          <section className="w-full max-w-[1400px] px-4 md:px-10 mt-8 mb-16">
            <div className="bg-[#1a2b45] inline-block px-6 md:px-8 py-2 rounded-t-xl rounded-br-xl mb-4 shadow-lg border border-primary/50 animate-fadeInUp">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-white">{t.about.title}</h2>
            </div>

              <div className="sobre-nos-panel rounded-3xl p-6 md:p-10 border border-primary/50 shadow-2xl flex flex-col md:flex-row gap-8 items-center animate-fadeInUp animate-delay-200 hover-lift" style={{backgroundColor: '#2b4c7e'}}>
              <div className="w-full md:w-2/5 h-64 md:h-96 relative rounded-2xl overflow-hidden border-2 border-white/20 shrink-0">
                <div className="absolute top-4 right-4 z-20 w-8 h-8 opacity-70">
                  <img src="/images/logo-atlatico-vector.png" alt="Icon" className="w-full h-full object-contain mix-blend-screen grayscale brightness-200" />
                </div>
                
                <img src="https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=800&q=80" className="slide-img fade-img absolute inset-0 w-full h-full object-cover opacity-100 z-10" alt="Slide 1" />
                <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80" className="slide-img fade-img absolute inset-0 w-full h-full object-cover opacity-0 z-0" alt="Slide 2" />
                <img src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=800&q=80" className="slide-img fade-img absolute inset-0 w-full h-full object-cover opacity-0 z-0" alt="Slide 3" />
              </div>

              <div className="w-full md:w-3/5 text-lg md:text-2xl font-medium leading-relaxed text-whiteish tracking-wide">
                <p className="mb-4">
                  {t.about.paragraph1}
                </p>
                <p className="mb-4">
                  {t.about.paragraph2}
                </p>
                <p>
                  {t.about.paragraph3}
                </p>
              </div>
            </div>
          </section>

          {/* 2. SEÇÃO: CLIENTES */}
          <section id="clientes" className="w-full max-w-[1400px] px-4 md:px-10 mb-16">
            <div className="bg-[#1a2b45] inline-block px-6 md:px-8 py-2 rounded-t-xl rounded-br-xl mb-4 shadow-lg border border-primary/50 animate-fadeInUp">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-white">{t.clients.title}</h2>
            </div>

            <div className="bg-[#0f172a]/90 rounded-3xl p-6 md:p-10 border border-primary/50 shadow-2xl animate-fadeInUp animate-delay-200">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {/* Lista de Clientes Dinâmica */}
                {Object.entries(t.clients.list).map(([key, client]) => (
                  <div key={key} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all hover:scale-105 cursor-pointer border border-primary/30">
                    <h3 className="text-accent font-bold text-lg md:text-xl mb-2">{client.name}</h3>
                    <p className="text-gray-300 text-xs md:text-sm">{client.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. SEÇÃO: PARCEIROS */}
          <section id="parceiros" className="w-full max-w-[1400px] px-4 md:px-10 mb-16 relative">
            <div className="bg-[#1a2b45] inline-block px-6 md:px-8 py-2 rounded-t-xl rounded-br-xl mb-4 shadow-lg border border-primary/50 animate-fadeInUp">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-white">{t.partners.title}</h2>
            </div>

            <div className="relative w-full flex items-center bg-[#0a111c]/60 py-6 rounded-2xl border border-primary/30 animate-fadeInUp animate-delay-200">
              <button onClick={() => (window as any).scrollPartners(-1)} className="absolute left-0 z-20 bg-white text-dark rounded-full w-10 h-10 flex items-center justify-center shadow-lg -ml-4 hover:bg-accent hover:text-white transition-colors">
                <i className="fa-solid fa-play rotate-180 text-xl pl-1"></i>
              </button>

              <div id="partners-track" className="flex gap-4 md:gap-6 overflow-x-hidden w-full px-8 py-2 items-center h-40">
                {/* Itens via JS */}
              </div>

              <button onClick={() => (window as any).scrollPartners(1)} className="absolute right-0 z-20 bg-white text-dark rounded-full w-10 h-10 flex items-center justify-center shadow-lg -mr-4 hover:bg-accent hover:text-white transition-colors">
                <i className="fa-solid fa-play text-xl pl-1"></i>
              </button>
            </div>
          </section>

          {/* 4. SEÇÃO: GALERIA */}
          <section id="galeria" className="w-full max-w-[1400px] px-4 md:px-10 mb-16 relative">
            <div className="bg-[#1a2b45] inline-block px-6 md:px-8 py-2 rounded-t-xl rounded-br-xl mb-4 shadow-lg border border-primary/50 animate-fadeInUp">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-white">{t.gallery.title}</h2>
            </div>

            <div className="relative w-full flex items-center justify-center mt-4 group animate-fadeInUp animate-delay-200">
              {/* Seta Esquerda */}
              <button onClick={() => (window as any).scrollGallery(-1)} className="absolute left-0 md:left-2 z-20 text-white hover:text-accent transition-colors drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] opacity-80 hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-16 h-32 md:w-20 md:h-40">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Grade de Imagens */}
              <div id="gallery-track" className="grid grid-rows-2 grid-flow-col gap-4 md:gap-6 overflow-x-auto no-scrollbar w-full py-4 h-[500px] md:h-[600px] items-center">
                {/* Itens injetados via JS */}
              </div>

              {/* Seta Direita */}
              <button onClick={() => (window as any).scrollGallery(1)} className="absolute right-0 md:right-2 z-20 text-white hover:text-accent transition-colors drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] opacity-80 hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-16 h-32 md:w-20 md:h-40">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer id="footer" className="bg-[#0a1320] py-8 border-t border-primary px-6 relative z-10 flex flex-col items-center">
          <div className="max-w-5xl w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16">
            <a href="https://maps.google.com/?q=Rua+Bittencourt,+25+Vila+Nova+-+Santos/SP" target="_blank" className="flex items-center gap-3 hover:text-accent transition-colors group">
              <i className="fa-solid fa-location-dot text-2xl group-hover:-translate-y-1 transition-transform"></i>
              <div className="leading-tight text-left">
                <p className="font-bold text-base md:text-lg">Rua Bittencourt, 25</p>
                <p className="text-xs md:text-sm text-gray-400">Vila Nova - Santos/SP</p>
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
          <div className="text-center mt-8 text-xs text-gray-500">
            {t.footer.copyright}
          </div>
        </footer>

        {/* LIGHTBOX / MODAL DA GALERIA */}
        <div id="lightbox" className="fixed inset-0 z-[100] bg-black/90 hidden flex-col items-center justify-center p-4 transition-opacity">
          <button onClick={() => (window as any).closeLightbox()} className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-accent text-4xl font-bold z-50">&times;</button>
          
          <div className="bg-[#1c2a3f] p-3 md:p-5 rounded-3xl w-full max-w-5xl shadow-[0_0_50px_rgba(0,0,0,0.8)] relative">
            <div className="border-[6px] border-[#e2e8f0] rounded-2xl overflow-hidden relative aspect-video flex items-center justify-center bg-black">
              <img id="lightbox-img" className="w-full h-full object-contain" alt="Lightbox" />
              <i id="lightbox-play" className="fa-solid fa-play text-white/80 text-6xl md:text-8xl absolute hidden drop-shadow-lg cursor-pointer hover:text-white hover:scale-110 transition-transform"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
