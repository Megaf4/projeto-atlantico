'use client';

import Script from 'next/script';

export default function FaleConoscoPage() {
  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
        .dropdown-bridge { 
          padding-top: 1.5rem; 
        }
        .select-custom {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238FB3FF' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1.2em;
        }
        
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
                <a href="/" className="mobile-link px-5 py-4 hover:bg-[#15253F] hover:text-accent transition-colors font-medium border-b border-dark/20 text-lg">SOBRE NÓS</a>
                <a href="/#servicos" className="mobile-link px-5 py-4 hover:bg-[#15253F] hover:text-accent transition-colors font-medium border-b border-dark/20 text-lg md:hidden">SERVIÇOS</a>
                <a href="/fale-conosco" className="mobile-link px-5 py-4 hover:bg-[#15253F] hover:text-accent transition-colors font-medium border-b border-dark/20 text-lg md:hidden">FALE CONOSCO</a>
                <a href="/" className="mobile-link px-5 py-4 hover:bg-[#15253F] hover:text-accent transition-colors font-medium border-b border-dark/20 text-lg">CLIENTES</a>
                <a href="/" className="mobile-link px-5 py-4 hover:bg-[#15253F] hover:text-accent transition-colors font-medium border-b border-dark/20 text-lg">PARCEIROS</a>
                <a href="/" className="mobile-link px-5 py-4 hover:bg-[#15253F] hover:text-accent transition-colors font-medium text-lg">GALERIA</a>
              </div>
            </div>
            <nav className="flex gap-4 md:gap-8 font-bold tracking-wider text-sm md:text-xl uppercase items-center h-full mt-1 animate-fadeIn animate-delay-100">
              <div className="relative group">
                <a href="/#servicos" className="hover:text-accent transition-colors text-white py-2 block">Serviços</a>
                <div id="desktop-dropdown-menu" className="absolute top-full left-0 hidden md:group-hover:block dropdown-bridge z-50">
                  <div className="w-72 bg-[#15253F] shadow-2xl border border-dark rounded-md overflow-hidden flex flex-col">
                    <a href="/?servico=Recuperação Estrutural#servicos" className="dropdown-service-link text-left block w-full px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide">Recuperação Estrutural</a>
                    <a href="/?servico=Navios e Plataformas#servicos" className="dropdown-service-link text-left block w-full px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide">Navios e Plataformas</a>
                    <a href="/?servico=Levantamento e Registro#servicos" className="dropdown-service-link text-left block w-full px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide">Levantamento e Registro</a>
                    <a href="/?servico=Hidroelétricas e Barragens#servicos" className="dropdown-service-link text-left block w-full px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide">Hidroelétricas e Barragens</a>
                    <a href="/?servico=Inspeção e Vistoria#servicos" className="dropdown-service-link text-left block w-full px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide">Inspeção e Vistoria</a>
                    <a href="/?servico=Dragagem e Sondagem#servicos" className="dropdown-service-link text-left block w-full px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide">Dragagem e Sondagem</a>
                    <a href="/?servico=Resgate e Salvatagem#servicos" className="dropdown-service-link text-left block w-full px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide">Resgate e Salvatagem</a>
                    <a href="/?servico=Mergulho Especializado#servicos" className="dropdown-service-link text-left block w-full px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide">Mergulho Especializado</a>
                    <a href="/?servico=Dutos e Cabos Submarinos#servicos" className="dropdown-service-link text-left block w-full px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide">Dutos e Cabos Submarinos</a>
                    <a href="/?servico=Tratamento de Água#servicos" className="dropdown-service-link text-left block w-full px-5 py-3 hover:bg-[#223A5E] hover:text-accent transition-colors font-medium text-sm uppercase tracking-wide">Tratamento de Água</a>
                  </div>
                </div>
              </div>
              <a href="/fale-conosco" className="hover:text-accent transition-colors text-accent py-2 block">Fale Conosco</a>
            </nav>
          </div>
          <div className="cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center animate-fadeIn animate-delay-200" onClick={() => window.location.href='/'}>
            <img src="/images/logo-atlatico-vector.png" alt="Atlântico Logo" className="h-12 md:h-16 object-contain" />
          </div>
        </header>

        {/* SEÇÃO FALE CONOSCO */}
        <section className="relative min-h-screen pt-32 pb-20 bg-cover bg-center flex flex-col px-2 md:px-4" style={{backgroundImage: "url('https://images.unsplash.com/photo-1551244072-5d12893278ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"}}>
          <div className="absolute inset-0 bg-dark/30"></div>
          <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col h-full mt-8 md:mt-12">
            <div className="bg-[#1a2b45] inline-block px-6 md:px-8 py-2 rounded-t-xl rounded-br-xl mb-6 shadow-lg border border-primary/50 self-start ml-2 md:ml-10 animate-fadeInUp">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-white">Fale Conosco</h2>
            </div>
            <div className="flex-grow flex items-center justify-center w-full">
              <div className="bg-[#F3F6FF]/95 backdrop-blur-sm rounded-xl p-6 md:p-10 shadow-2xl border border-white w-full max-w-2xl mt-4 animate-fadeInUp animate-delay-200">
                <form action="https://formsubmit.co/atlanticosts@atlanticosts.com.br" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="/fale-conosco?sucesso=true" />
                  
                  <div className="md:col-span-2">
                    <input 
                      type="text" 
                      name="Empresa" 
                      placeholder="NOME DA EMPRESA" 
                      required 
                      className="w-full p-4 rounded-md font-bold text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm bg-white border border-gray-200"
                    />
                  </div>
                  
                  <div>
                    <input 
                      type="text" 
                      name="Nome" 
                      placeholder="SEU NOME" 
                      required 
                      className="w-full p-4 rounded-md font-bold text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm bg-white border border-gray-200"
                    />
                  </div>
                  
                  <div>
                    <input 
                      type="text" 
                      name="Site" 
                      placeholder="SITE DA EMPRESA" 
                      className="w-full p-4 rounded-md font-bold text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm bg-white border border-gray-200"
                    />
                  </div>
                  
                  <div>
                    <input 
                      type="email" 
                      name="Email" 
                      placeholder="SEU EMAIL" 
                      required 
                      className="w-full p-4 rounded-md font-bold text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm bg-white border border-gray-200"
                    />
                  </div>
                  
                  <div>
                    <select 
                      name="Estado"
                      defaultValue=""
                      className="select-custom w-full p-4 rounded-md font-bold text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm bg-white border border-gray-200"
                    >
                      <option value="" disabled>ESTADO</option>
                      <option value="SP">São Paulo</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="ES">Espírito Santo</option>
                      <option value="PR">Paraná</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="Outros">Outros</option>
                    </select>
                  </div>
                  
                  <div>
                    <input 
                      type="tel" 
                      name="Celular" 
                      placeholder="SEU CELULAR" 
                      className="w-full p-4 rounded-md font-bold text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm bg-white border border-gray-200"
                    />
                  </div>
                  
                  <div>
                    <input 
                      type="text" 
                      name="Cidade" 
                      placeholder="CIDADE" 
                      className="w-full p-4 rounded-md font-bold text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm bg-white border border-gray-200"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <select 
                      name="Servico" 
                      required
                      defaultValue=""
                      className="select-custom w-full p-4 rounded-md font-bold text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm bg-white border border-gray-200"
                    >
                      <option value="" disabled>TIPO DE SERVIÇO</option>
                      <option value="Recuperação Estrutural">Recuperação Estrutural</option>
                      <option value="Navios e Plataformas">Navios e Plataformas</option>
                      <option value="Levantamento e Registro">Levantamento e Registro</option>
                      <option value="Hidroelétricas e Barragens">Hidroelétricas e Barragens</option>
                      <option value="Inspeção e Vistoria">Inspeção e Vistoria</option>
                      <option value="Dragagem e Sondagem">Dragagem e Sondagem</option>
                      <option value="Resgate e Salvatagem">Resgate e Salvatagem</option>
                      <option value="Mergulho Especializado">Mergulho Especializado</option>
                      <option value="Dutos e Cabos Submarinos">Dutos e Cabos Submarinos</option>
                      <option value="Tratamento de Água">Tratamento de Água</option>
                      <option value="Outros">Outros</option>
                    </select>
                  </div>
                  
                  <div className="md:col-span-2 flex justify-end mt-2">
                    <button 
                      type="submit" 
                      className="bg-light hover:bg-blue-400 text-white font-bold py-3 px-12 rounded-md transition-colors text-lg md:text-xl shadow-md w-full md:w-auto"
                    >
                      ENVIAR
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

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
          <div className="text-center mt-8 text-xs text-gray-500">&copy; 2026 Atlântico Serviços Técnicos Submarinos. Todos os direitos reservados.</div>
        </footer>
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
