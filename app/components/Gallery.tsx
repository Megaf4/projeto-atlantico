'use client';

import { useState, useEffect, useRef } from 'react';

interface GalleryImage {
  url: string;
  cliente: string;
}

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Carregar dados da galeria
    async function loadGalleryData() {
      try {
        const response = await fetch('/data/gallery-data.json');
        const data = await response.json();
        
        if (data && data.clientes) {
          const allImages: GalleryImage[] = [];
          
          // Coletar imagens de todos os clientes
          Object.values(data.clientes).forEach((cliente: any) => {
            if (cliente.imagens && cliente.imagens.length > 0) {
              cliente.imagens
                .filter((img: string) => 
                  !img.toLowerCase().includes('.mp4') && 
                  !img.toLowerCase().includes('.mpg') &&
                  !img.toLowerCase().includes('.mpeg')
                )
                .slice(0, 4) // Até 4 imagens por cliente
                .forEach((img: string) => {
                  allImages.push({
                    url: img,
                    cliente: cliente.nome
                  });
                });
            }
          });
          
          // Embaralhar imagens
          const shuffled = allImages.sort(() => Math.random() - 0.5);
          
          // Pegar primeiras 50 imagens
          setImages(shuffled.slice(0, 50));
        }
      } catch (error) {
        console.error('Erro ao carregar galeria:', error);
        // Fallback com imagens de exemplo
        setImages([
          { url: 'https://picsum.photos/600/400?random=1', cliente: 'Exemplo' },
          { url: 'https://picsum.photos/600/400?random=2', cliente: 'Exemplo' },
          { url: 'https://picsum.photos/600/400?random=3', cliente: 'Exemplo' },
        ]);
      }
    }

    loadGalleryData();
  }, []);

  const scrollGallery = (direction: number) => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: direction * 450, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="galeria" className="w-full max-w-[1400px] px-4 md:px-10 mb-16 relative">
        <div className="bg-[#1a2b45] inline-block px-6 md:px-8 py-2 rounded-t-xl rounded-br-xl mb-4 shadow-lg border border-primary/50 animate-fadeInUp">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-white">Galeria</h2>
        </div>

        <div className="relative w-full flex items-center justify-center mt-4 group animate-fadeInUp animate-delay-200">
          {/* Seta Esquerda */}
          <button 
            onClick={() => scrollGallery(-1)} 
            className="absolute left-0 md:left-2 z-20 text-white hover:text-accent transition-colors drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] opacity-80 hover:opacity-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-16 h-32 md:w-20 md:h-40">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Grade de Imagens */}
          <div 
            ref={galleryRef}
            className="grid grid-rows-2 grid-flow-col gap-4 md:gap-6 overflow-x-auto no-scrollbar w-full py-4 h-[500px] md:h-[600px] items-center"
          >
            {images.map((image, index) => {
              const rowSpan = (index % 3 === 0) ? 'row-span-2' : 'row-span-1';
              return (
                <div 
                  key={`${image.url}-${index}`}
                  className={`shrink-0 relative ${rowSpan} w-64 md:w-80 rounded-2xl overflow-hidden group cursor-pointer shadow-2xl hover:scale-105 transition-all border-2 border-primary/20`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image.url} 
                    alt={`Trabalho ${image.cliente}`}
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all" 
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm font-bold truncate">{image.cliente}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Seta Direita */}
          <button 
            onClick={() => scrollGallery(1)} 
            className="absolute right-0 md:right-2 z-20 text-white hover:text-accent transition-colors drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] opacity-80 hover:opacity-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-16 h-32 md:w-20 md:h-40">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-4 transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            onClick={() => setSelectedImage(null)} 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-accent text-4xl font-bold z-50"
          >
            &times;
          </button>
          
          <div className="bg-[#1c2a3f] p-3 md:p-5 rounded-3xl w-full max-w-5xl shadow-[0_0_50px_rgba(0,0,0,0.8)] relative">
            <div className="border-[6px] border-[#e2e8f0] rounded-2xl overflow-hidden relative aspect-video flex items-center justify-center bg-black">
              <img
                src={selectedImage.url}
                alt={`Trabalho ${selectedImage.cliente}`}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-white text-xl font-bold">{selectedImage.cliente}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
