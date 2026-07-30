'use client';

import Script from 'next/script';

export default function ServicosPage() {
  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .card-transition { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .card-expanded { width: 100% !important; max-width: 900px; }
        .expanded-content { display: none !important; }
        .card-expanded .normal-content { display: none !important; }
        .card-expanded .expanded-content { display: flex !important; }
        .dropdown-bridge { padding-top: 1.5rem; }
        .dot-transition { transition: all 0.3s ease; }
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
        <header className="fixed top-0 w-full z-50 bg-[#0E1A2B] shadow-lg flex items-center justify-between px-4 md:px-10 py-3 md:py-4">
          <div className="flex items-center gap-4 md:gap-12">
            <div className="relative">
              <button id="menu-btn" className="text-white hover:text-accent transition-colors flex flex-col gap-1 md:gap-1.5">
                <span className="w-7 md:w-8 h-[3px] md:h-1 bg-white block"></span>
                <span className="w-7 md:w-8 h-[3px] md:h-1 bg-white block"></span>
                <span className="w-7 md:w-8 h-[3px] md:h-1 bg-white block"></span>
              </button>
              <div id="dropdown" className="hidden absolute top-full left-0 mt-5 md:mt-6 w-56 bg-primary shadow-2xl border border-dark rounded-b-md overflow-hidden flex-col z-50">
                <a href="#" className="mobile-link px-5 py-4 hover:bg-dark hover:text-accent transition-colors font-medium border-b border-dark/20 text-lg">SOBRE NÓS</a>
                <a href="#" className="mobile-link px-5 py-4 hover:bg-dark hover:text-accent transition-colors font-medium border-b border-dark/20 text-lg">CLIENTES</a>
                <a href="#" className="mobile-link px-5 py-4 hover:bg-dark hover:text-accent transition-colors font-medium border-b border-dark/20 text-lg">PARCEIROS</a>
                <a href="#" className="mobile-link px-5 py-4 hover:bg-dark hover:text-accent transition-colors font-medium text-lg">GALERIA</a>
              </div>
            </div>
            <nav className="flex gap-4 md:gap-8 font-bold tracking-wider text-sm md:text-xl uppercase items-center h-full mt-1">
              <div className="relative group">
                <a href="#servicos" className="hover:text-accent transition-colors text-white py-2 block">Serviços</a>
                <div id="desktop-dropdown-menu" className="absolute top-full left-0 hidden md:group-hover:block dropdown-bridge z-50">
                  <div className="w-72 bg-panel shadow-2xl border border-dark rounded-md overflow-hidden flex flex-col">
                    <button className="dropdown-service-link text-left px-5 py-3 hover:bg-dark hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service="Recuperação Estrutural">Recuperação Estrutural</button>
                    <button className="dropdown-service-link text-left px-5 py-3 hover:bg-dark hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service="Navios e Plataformas">Navios e Plataformas</button>
                    <button className="dropdown-service-link text-left px-5 py-3 hover:bg-dark hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service="Levantamento e Registro">Levantamento e Registro</button>
                    <button className="dropdown-service-link text-left px-5 py-3 hover:bg-dark hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service="Hidroelétricas e Barragens">Hidroelétricas e Barragens</button>
                    <button className="dropdown-service-link text-left px-5 py-3 hover:bg-dark hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service="Inspeção e Vistoria">Inspeção e Vistoria</button>
                    <button className="dropdown-service-link text-left px-5 py-3 hover:bg-dark hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service="Dragagem e Sondagem">Dragagem e Sondagem</button>
                    <button className="dropdown-service-link text-left px-5 py-3 hover:bg-dark hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service="Resgate e Salvatagem">Resgate e Salvatagem</button>
                    <button className="dropdown-service-link text-left px-5 py-3 hover:bg-dark hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service="Mergulho Especializado">Mergulho Especializado</button>
                    <button className="dropdown-service-link text-left px-5 py-3 hover:bg-dark hover:text-accent transition-colors font-medium border-b border-dark/50 text-sm uppercase tracking-wide" data-service="Dutos e Cabos Submarinos">Dutos e Cabos Submarinos</button>
                    <button className="dropdown-service-link text-left px-5 py-3 hover:bg-dark hover:text-accent transition-colors font-medium text-sm uppercase tracking-wide" data-service="Tratamento de Água">Tratamento de Água</button>
                  </div>
                </div>
              </div>
              <a href="#footer" className="hover:text-accent transition-colors text-white py-2 block">Fale Conosco</a>
            </nav>
          </div>
          <div className="cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center" onClick={() => window.scrollTo(0,0)}>
            <img src="/images/logo-atlatico-vector.png" alt="Atlântico Logo" className="h-12 md:h-16 object-contain" />
          </div>
        </header>

        {/* HERO PAGE */}
        <section id="hero" className="relative h-screen w-full flex items-end pb-20 justify-start px-6 md:px-10 pt-24">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1682687981974-c5ef2111640c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Mergulhador" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-5xl md:text-8xl font-bold tracking-wider mb-2 leading-none">Atlântico</h1>
            <p className="text-lg md:text-2xl font-light tracking-widest text-gray-300">Serviços Técnicos Submarinos</p>
          </div>
        </section>

        {/* SEÇÃO DE SERVIÇOS */}
        <section id="servicos" className="relative min-h-screen py-16 overflow-hidden flex flex-col items-center">
          <div id="service-bg" className="absolute inset-0 z-0 transition-all duration-700">
            <div className="absolute inset-0 bg-dark/50 backdrop-blur-sm"></div>
          </div>
          <div className="relative z-10 w-full max-w-[1400px] px-2 md:px-4 flex flex-col h-full">
            <div className="bg-[#1a2b45] inline-block px-6 md:px-8 py-2 rounded-t-xl rounded-br-xl mb-6 shadow-lg border border-primary/50 self-start ml-2 md:ml-10">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-white">Nossos Serviços</h2>
            </div>
            <div id="categories-container" className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3 mb-8 px-2 md:px-10 w-full">
            </div>
            <div className="relative flex-grow flex flex-col items-center justify-center w-full">
              <div className="relative w-full flex items-center justify-center">
                <button onClick={() => (window as any).moveCarousel(-1)} className="absolute left-0 md:left-4 z-20 text-4xl md:text-7xl text-white/40 hover:text-accent transition-colors">
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <div id="carousel-track" className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory w-full px-10 md:px-24 py-4 md:py-6 items-center min-h-[450px] md:min-h-[500px]">
                </div>
                <button onClick={() => (window as any).moveCarousel(1)} className="absolute right-0 md:right-4 z-20 text-4xl md:text-7xl text-white/40 hover:text-accent transition-colors">
                  <i className="fa-solid fa-angle-right"></i>
                </button>
              </div>
              <div id="carousel-dots" className="flex justify-center gap-2 pb-4 h-6 mt-4"></div>
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

      <Script id="servicos-script" strategy="lazyOnload">
        {`
// Controle dos Menus
const menuBtn = document.getElementById('menu-btn');
const dropdown = document.getElementById('dropdown');
const mobileLinks = document.querySelectorAll('.mobile-link');
const dropdownServiceLinks = document.querySelectorAll('.dropdown-service-link');
const desktopDropdownMenu = document.getElementById('desktop-dropdown-menu');

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

mobileLinks.forEach(link => link.addEventListener('click', () => {
  dropdown.classList.add('hidden');
  dropdown.classList.remove('flex');
}));

dropdownServiceLinks.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const serviceName = btn.getAttribute('data-service');
    categoriaAtual = serviceName;
    desktopDropdownMenu.style.display = 'none';
    renderizarBotoes();
    renderizarCards();
    document.getElementById('servicos').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => { desktopDropdownMenu.style.display = ''; }, 1000);
  });
});

const categorias = ["Recuperação Estrutural", "Navios e Plataformas", "Levantamento e Registro", "Hidroelétricas e Barragens", "Inspeção e Vistoria", "Dragagem e Sondagem", "Resgate e Salvatagem", "Mergulho Especializado", "Dutos e Cabos Submarinos", "Tratamento de Água"];
`}
      </Script>

      <Script id="servicos-data" strategy="lazyOnload">
        {`
const rawData = {
  "Recuperação Estrutural": [
    { t: "Recuperação de estruturas em concreto e aço", c: "Reparos especializados em superfícies submersas.", l: "Executamos técnicas avançadas para restaurar a integridade estrutural de elementos em concreto e aço afetados pela corrosão ou desgaste mecânico em ambientes subaquáticos. Utilizamos materiais de alta resistência que curam debaixo d'água, garantindo vida útil prolongada." },
    { t: "Reforço estrutural de estacas de carga, prancha e laje", c: "Aumento da capacidade e segurança estrutural.", l: "Desenvolvemos reforços estruturais de precisão para estacas de carga, estacas prancha e lajes de cais. O processo previne o colapso estrutural, recupera a capacidade de sustentação original e adequa a estrutura portuária para cargas maiores." },
    { t: "Reforço estrutural de pilares, estacas e pontes", c: "Estabilização e reparo de fundações de pontes.", l: "Focados na infraestrutura viária e ferroviária, realizamos o reforço de pilares e blocos de pontes sujeitos à erosão hidráulica. Garantimos a estabilidade da fundação contra a ação agressiva das marés e correntezas fluviais." },
    { t: "Recuperação estrutural de píer e dolfins", c: "Manutenção de estruturas portuárias vitais.", l: "Atuamos na recuperação de dolfins de atracação e amarração, reparando danos causados pelo impacto de embarcações e salinidade extrema. Asseguramos que o píer opere com força máxima, reduzindo tempo de inatividade no terminal." },
    { t: "Aplicação de massa epóxi", c: "Revestimentos de alta proteção anticorrosiva.", l: "Aplicação profissional de massas e resinas epóxi subaquáticas para criar uma barreira impenetrável contra agentes corrosivos. Ideal para o preenchimento de fissuras e selamento definitivo de superfícies metálicas e de concreto." },
    { t: "Concretagem com argamassa de alto desempenho", c: "Preenchimento e moldagem subaquática.", l: "Realizamos concretagens imersas utilizando argamassas tixotrópicas (grout) de altíssimo desempenho, dispensando a necessidade de drenagem. A secagem rápida promove resistência imediata aos reparos estruturais em docas e barragens." },
    { t: "Demolição de concreto", c: "Remoção controlada de estruturas deterioradas.", l: "Através de marteletes pneumáticos e hidráulicos manuseados por mergulhadores especializados, efetuamos a demolição controlada de concreto avariado sob a água, preparando a área de forma segura para a nova concretagem." },
    { t: "Corte e solda submarina em estruturas de aço", c: "Manutenção e montagem metálica imersa.", l: "Utilizamos equipamentos de oxi-corte e soldagem a arco elétrico molhado (wet welding). Nossos mergulhadores soldadores são qualificados para garantir uniões resistentes e estanques, indispensáveis no reparo de cascos e plataformas." },
    { t: "Derrocagem a frio ou a fogo", c: "Desmonte e remoção de rochas no fundo do mar.", l: "Operamos no aprofundamento de canais de navegação através do desmonte de maciços rochosos submersos. Podendo ser a frio (rompedores mecânicos/expansão química) ou a fogo (uso rigorosamente controlado de explosivos subaquáticos)." }
  ],
  "Hidroelétricas e Barragens": [
    { t: "Recuperação e reforço de hidrelétricas e barragens", c: "Manutenção civil especializada para o setor elétrico.", l: "Trabalhos meticulosos para recuperar a face de concreto, tratar juntas de dilatação e selar infiltrações em estruturas de represamento, garantindo a eficiência energética e a segurança perante os órgãos fiscalizadores." },
    { t: "Colocação/retirada de stop logs e painéis", c: "Manejo ágil para isolamento de fluxo d'água.", l: "Operações complexas com guindastes e mergulhadores para inserção e remoção de comportas temporárias (stop logs) e painéis de vedação, essenciais durante as manutenções das turbinas e vertedouros." },
    { t: "Vedação de ensecadeiras", c: "Isolamento a seco para obras submersas.", l: "Garantimos a estanqueidade de ensecadeiras aplicando materiais de selagem na interface com o fundo rochoso, permitindo que as equipes de engenharia trabalhem a seco com segurança absoluta no interior das estruturas." },
    { t: "Retirada/colocação de caixão metálico", c: "Manobra de estruturas pesadas em usinas.", l: "Mergulho profundo para guiar e travar com precisão os pesados caixões metálicos em seus trilhos, garantindo que a vedação do conduto forçado seja executada sem falhas para manutenções programadas." },
    { t: "Colocação de anteparos e cabos de aço", c: "Segurança e sistemas de contenção mecânica.", l: "Instalação de cabos guia, telas de proteção e anteparos mecânicos de segurança. Assegura a integridade das instalações contra detritos trazidos pela força hídrica e auxilia na descida de equipamentos." },
    { t: "Inspeção em comportas e soleiras", c: "Avaliação técnica das áreas de vazão hídrica.", l: "Nossos mergulhadores percorrem toda a extensão de soleiras e comportas radiais/vagão, identificando desgastes no concreto, cavitação, falhas nas borrachas de vedação e corrosão em componentes vitais." },
    { t: "Inspeção tátil nas grades", c: "Verificação da integridade do sistema de filtragem.", l: "Em ambientes de visibilidade zero ou áreas confinadas, realizamos inspeções rigorosas por contato tátil, mapeando obstruções por troncos, deformações no metal e garantindo o fluxo desimpedido para as turbinas." },
    { t: "Vistoria em painéis de vedação", c: "Checagem minuciosa contra vazamentos e desgastes.", l: "Antes da secagem de uma unidade geradora, validamos se os painéis estão perfeitamente assentados, checando as vedações periféricas para evitar acidentes com a súbita entrada de água." }
  ],
`}
      </Script>

      <Script id="servicos-data-2" strategy="lazyOnload">
        {`
  "Inspeção e Vistoria": [
    { t: "Inspeção visual submarina", c: "Análise direta de cascos e fundações.", l: "O modo mais eficaz de avaliar avarias preliminares. O mergulhador técnico relata as condições do alvo em tempo real, fornecendo informações essenciais para o planejamento de reparos." },
    { t: "Vistoria com foto e vídeo", c: "Registro multimídia de alta definição.", l: "Utilizamos câmeras subaquáticas 4K e iluminação especializada para criar um laudo visual indiscutível. Perfeito para fins de seguros, documentação de avarias em navios e comprovação de término de obra." },
    { t: "Inspeção com monitoramento de superfície", c: "Acompanhamento ao vivo pelas equipes de engenharia.", l: "O capacete do mergulhador transmite áudio bidirecional e vídeo em tempo real para a superfície. O cliente ou engenheiro pode acompanhar a inspeção a bordo e orientar o mergulhador durante toda a operação." },
    { t: "Ensaios não destrutivos", c: "Análise técnica sem danificar a estrutura.", l: "Aplicações de técnicas como Medição de Espessura por Ultrassom (ME), Partículas Magnéticas e Inspeção Visual Sistematizada para descobrir microfissuras e graus de desgaste não visíveis a olho nu." },
    { t: "Vistorias em ambientes confinados", c: "Inspeção em galerias, dutos e tanques fechados.", l: "Equipes treinadas para adentrar ambientes de altíssimo risco e restrição espacial. Utilizamos equipamentos de respiração controlados pela superfície (bailout) para atestar a segurança em galerias de usinas e adutoras." },
    { t: "Fiscalização e administração em obras portuárias", c: "Controle de qualidade e avanço técnico de obras.", l: "Agimos como o fiscal do cliente abaixo da linha d'água. Garantimos que os prestadores de serviço executem o trabalho dentro das rigorosas especificações exigidas pelos projetos de engenharia." },
    { t: "Emissão de relatório descritivo de inspeção", c: "Documentação formal com ART e assinaturas técnicas.", l: "Todos os dados coletados são compilados em relatórios completos assinados por engenheiros responsáveis. Incluem esquemas, mapeamento de anomalias, fotografias catalogadas e recomendações corretivas." }
  ],
  "Navios e Plataformas": [
    { t: "Vistoria para substituição e extensão de docagem", c: "Emissão de laudo para classficadoras de navios.", l: "Através da Inspeção Submarina em Lugar de Docagem (UWILD), fornecemos os relatórios detalhados aceitos pelas sociedades classificadoras internacionais para estender o prazo de navios no mar sem necessidade de docagem imediata." },
    { t: "Tampoamento / Bujonamento", c: "Bloqueio de dutos e válvulas para manutenção interna.", l: "Técnica de vedação externa de grades e tomadas de mar (sea chests) usando tampões de madeira, aço ou borrachão moldado. Permite que a equipe interna do navio faça a manutenção em válvulas à seco com total segurança." },
    { t: "Calefação de vazamentos", c: "Estancamento emergencial de rombos e fissuras.", l: "Intervenção rápida para calafetar fraturas no casco, utilizando cunhas especiais, mantas de neoprene e massas epóxi de fixação rápida. Evita paradas forçadas, poluição ambiental e naufrágios." }
  ],
  "Levantamento e Registro": [
    { t: "Fotografia e filmagem subaquática", c: "Amostra visual precisa do ambiente submarino.", l: "Produção de imagens nítidas (mesmo em águas turvas) para laudos ambientais, inspeções de fauna bentônica e registros históricos da condição de cabos e cascos. Entregas rápidas em mídias digitais." },
    { t: "Levantamentos topográfico e cadastral", c: "Mapeamento rigoroso do entorno submerso.", l: "Demarcação e posicionamento de pontos notáveis da infraestrutura náutica. Cruzamos os dados topográficos externos com os achados subaquáticos para gerar um cadastro técnico as-built perfeito." },
    { t: "Batimetria / Topobatimetria", c: "Medição e desenho em 3D do leito marinho.", l: "Uso de ecobatímetros de feixe simples ou multifeixe aliados a GPS RTK para determinar a profundidade e traçar o relevo do fundo. Crucial para atestar o calado de portos antes de atracar grandes embarcações." }
  ],
  "Dragagem e Sondagem": [
    { t: "Dragagem / Dragagem Subaquática", c: "Desassoreamento e aprofundamento de canais.", l: "Utilizando bombas de sucção submersíveis manuseadas pelos mergulhadores, removemos lama, areia e detritos acumulados em berços de atracação, píeres e captações d'água onde dragas grandes não têm acesso." },
    { t: "Sondagens", c: "Pesquisa de reconhecimento do fundo do mar.", l: "Sondagens à percussão ou SPT (Standard Penetration Test) realizadas sobre balsas ou em marés baixas para caracterizar a resistência do subsolo marinho, viabilizando o projeto de fundações portuárias e plataformas." },
    { t: "Coleta de material", c: "Amostragem de solo e sedimentos focada em laudos.", l: "Coletamos amostras indeformadas do fundo do mar para análise em laboratórios ambientais, determinando o grau de contaminação, tipo de solo e garantindo as licenças necessárias para intervenções marinhas." },
    { t: "Acompanhamento de cravação de estacas", c: "Orientação e alinhamento durante obras de fundação.", l: "Monitoramos e orientamos, diretamente do fundo, as pesadas manobras dos martelos de bate-estacas, certificando-se de que a camisa metálica não atinja obstruções e siga o prumo projetado na obra." }
  ],
`}
      </Script>

      <Script id="servicos-data-3" strategy="lazyOnload">
        {`
  "Dutos e Cabos Submarinos": [
    { t: "Inspeção, lançamento e manutenção de emissários", c: "Cuidado integral com sistemas de saneamento costeiro.", l: "Instalamos tubulações gigantescas no fundo do mar, realizamos lastreamento com blocos de concreto (saddles) e mantemos os difusores livres de cracas para garantir a correta dispersão de efluentes tratados." },
    { t: "Oleodutos/Gasodutos/Slamorodutos", c: "Suporte especializado à infraestrutura de óleo e gás.", l: "Lançamento e enterramento de dutos flexíveis (rígidos e spools) focados na interligação de poços ao terminal costeiro. Realizamos monitoramento contra scour (erosão ao redor do tubo) e reparos em revestimentos térmicos." },
    { t: "Cabos elétricos submarinos", c: "Conexão de energia ininterrupta e protegida.", l: "Supervisão da descida de cabos de força entre continentes e ilhas. Atuamos na proteção das extremidades perto da zona de rebentação com tubos articulados em ferro fundido para evitar abrasão extrema." },
    { t: "Cabos de fibra ótica", c: "Mapeamento e resgate de cabos de telecomunicações.", l: "Mergulhadores altamente treinados para rastrear cabos óticos enterrados. Atuamos no desencalhe, resgate para a superfície e novo enterramento (jetting) das linhas de internet intercontinentais." }
  ],
  "Resgate e Salvatagem": [
    { t: "Resgate e Salvatagem Naval", c: "Reflotação de embarcações e mitigação de desastres.", l: "Operações complexas focadas em trazer à superfície barcos e navios afundados, utilizando paraquedas de ar (lift bags), selagem de cascos e grande bombeamento. Atuamos com extrema urgência na proteção portuária." },
    { t: "Busca, remoção e salvamento de estruturas flutuantes", c: "Limpeza de canais e localização de ativos perdidos.", l: "Busca sistemática de contêineres, âncoras, hélices e partes de maquinário perdidas durante a navegação. Amarração pesada e içamento técnico, devolvendo ativos valiosos e liberando o fluxo aquaviário." }
  ],
  "Mergulho Especializado": [
    { t: "Mergulho em águas contaminadas", c: "Mergulho de extremo risco com proteção total (HazMat).", l: "Realizado em esgotos, estações químicas e áreas de derramamento. O profissional utiliza trajes vulcanizados herméticos e capacetes dry-suit para evitar qualquer contato dérmico ou inalação das toxinas presentes." },
    { t: "Manutenção em fábricas de papel e celulose", c: "Apoio a sistemas vitais do polo industrial.", l: "Execução de reparos críticos sem interromper a produção da fábrica. Desobstruímos calhas industriais, limpamos tanques de decantação espessos e manutenimos as bombas de captação de água bruta (raw water)." }
  ],
  "Tratamento de Água": [
    { t: "Serviço em ETE (Estação de Tratamento de Esgoto/Água)", c: "Limpeza e recuperação de ativos de saneamento.", l: "Operações subaquáticas em reatores, tanques de aeração e decantadores. Fazemos a remoção de lodo, conserto de raspadores e troca de difusores de ar sem a necessidade de secar o tanque, mantendo o abastecimento público." }
  ]
};
`}
      </Script>

      <Script id="servicos-render" strategy="lazyOnload">
        {`
// Carrega os dados da galeria
let galleryData = null;
let imagensPorServico = {};

// Função para carregar dados da galeria
async function carregarGalleryData() {
  try {
    const response = await fetch('/data/gallery-data.json');
    galleryData = await response.json();
    processarImagensPorServico();
  } catch (error) {
    console.error('Erro ao carregar gallery-data.json:', error);
  }
}

// Mapeia serviços para suas imagens disponíveis
function processarImagensPorServico() {
  const servicoMapping = {
    'Recuperação Estrutural': 'RECUPERAÇÃO ESTRUTURAL',
    'Navios e Plataformas': 'NAVIOS E PLATAFORMAS',
    'Levantamento e Registro': 'LEVANTAMENTO E REGISTRO',
    'Hidroelétricas e Barragens': 'HIDROELÉTRICAS E BARRAGENS',
    'Inspeção e Vistoria': 'INSPEÇÃO E VISTORIA',
    'Dragagem e Sondagem': 'DRAGAGEM E SONDAGEM',
    'Resgate e Salvatagem': 'RESGATE E SALVATAGEM',
    'Mergulho Especializado': 'MERGULHO ESPECIALIZADO',
    'Dutos e Cabos Submarinos': 'DUTOS E CABOS SUBMARINOS',
    'Tratamento de Água': 'TRATAMENTO DE ÁGUA'
  };
  
  // Inicializa arrays vazios para cada serviço
  Object.keys(servicoMapping).forEach(servico => {
    imagensPorServico[servico] = [];
  });
  
  // Percorre todos os clientes e agrupa imagens por serviço
  Object.values(galleryData.clientes).forEach(cliente => {
    cliente.servicos.forEach(servicoCliente => {
      const servicoKey = Object.keys(servicoMapping).find(
        key => servicoMapping[key] === servicoCliente
      );
      
      if (servicoKey && cliente.imagens) {
        imagensPorServico[servicoKey].push(...cliente.imagens);
      }
      
      // Adiciona imagens "Diversos" a todos os serviços como fallback
      if (servicoCliente === 'Diversos' && cliente.imagens) {
        Object.keys(servicoMapping).forEach(servico => {
          imagensPorServico[servico].push(...cliente.imagens);
        });
      }
    });
  });
  
  // Embaralha as imagens de cada serviço
  Object.keys(imagensPorServico).forEach(servico => {
    imagensPorServico[servico] = embaralharArray(imagensPorServico[servico]);
  });
}

// Função auxiliar para embaralhar array
function embaralharArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Obtém uma imagem para um serviço e índice específico
function obterImagemParaServico(servico, index) {
  const imagens = imagensPorServico[servico] || [];
  
  if (imagens.length === 0) {
    // Fallback para imagem genérica
    return 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop';
  }
  
  // Rotaciona através das imagens disponíveis
  const imagemPath = imagens[index % imagens.length];
  
  // Codificar o caminho para caracteres especiais
  const encodedPath = imagemPath.split('/').map(part => encodeURIComponent(part)).join('/');
  
  return encodedPath;
}

const dadosServicos = {};
for (const cat in rawData) {
  dadosServicos[cat] = rawData[cat].map((info, index) => {
    return {
      titulo: info.t,
      shortDesc: info.c,
      longDesc: info.l,
      imagem: null, // Será preenchido depois do carregamento dos dados
      servicoCategoria: cat,
      indice: index
    };
  });
}

// Carrega os dados ao iniciar
carregarGalleryData().then(() => {
  // Atualiza as imagens depois que os dados forem carregados
  for (const cat in dadosServicos) {
    dadosServicos[cat].forEach((card, index) => {
      card.imagem = obterImagemParaServico(cat, index);
    });
  }
  // Renderiza os cards com as imagens reais
  renderizarBotoes();
  renderizarCards();
});

const categoriesContainer = document.getElementById('categories-container');
const carouselTrack = document.getElementById('carousel-track');
const serviceBg = document.getElementById('service-bg');
const carouselDots = document.getElementById('carousel-dots');
let categoriaAtual = "Recuperação Estrutural";

function renderizarBotoes() {
  categoriesContainer.innerHTML = '';
  categorias.forEach(cat => {
    const isActive = cat === categoriaAtual;
    const btn = document.createElement('button');
    btn.className = 'px-1 md:px-2 py-2 md:py-3 rounded-md uppercase text-[10px] md:text-base font-bold transition-all shadow-md border leading-tight ' + (isActive ? 'bg-[#2b4c7e] text-white border-light/50 scale-105' : 'bg-dark text-gray-300 border-primary hover:bg-[#1a2b45] hover:text-white');
    const partes = cat.split(' e ');
    if(partes.length > 1) {
      btn.innerHTML = partes[0] + ' E<br>' + partes[1];
    } else {
      btn.innerHTML = cat;
    }
    btn.onclick = () => {
      categoriaAtual = cat;
      renderizarBotoes();
      renderizarCards();
    };
    categoriesContainer.appendChild(btn);
  });
}
`}
      </Script>

      <Script id="servicos-cards" strategy="lazyOnload">
        {`
function renderizarCards() {
  carouselTrack.innerHTML = '';
  carouselDots.innerHTML = '';
  const cards = dadosServicos[categoriaAtual];
  
  cards.forEach((cardData, index) => {
    const card = document.createElement('div');
    card.className = "service-card snap-center shrink-0 w-[300px] md:w-[600px] h-[420px] md:h-[400px] bg-panel rounded-2xl border border-primary/30 flex shadow-2xl relative overflow-hidden card-transition group cursor-pointer";
    card.setAttribute('data-bg', cardData.imagem);
    card.innerHTML = '<div class="w-1/3 md:w-1/2 h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 z-20" style="background-image: url(' + "'" + cardData.imagem + "'" + ');"></div><div class="w-2/3 md:w-1/2 p-4 md:p-6 flex flex-col justify-between relative z-10 bg-panel overflow-hidden"><img src="/images/logo-atlatico-vector.png" class="absolute top-1/2 left-1/2 -translate-y-1/2 w-[150%] max-w-none opacity-[0.05] grayscale pointer-events-none z-0 rotate-12" alt="Watermark"><div class="relative z-10 flex-1 flex flex-col overflow-hidden mb-4"><div class="normal-content flex flex-col"><h3 class="text-[13px] md:text-2xl font-bold uppercase leading-tight mb-2 md:mb-3 text-white">' + cardData.titulo + '</h3><p class="text-[11px] md:text-base text-gray-300 font-light leading-snug line-clamp-6 md:line-clamp-4 text-left md:text-justify">' + cardData.shortDesc + '</p></div><div class="expanded-content flex flex-col h-full overflow-hidden"><h4 class="text-[11px] md:text-base font-bold uppercase leading-tight mb-2 text-accent tracking-widest shrink-0">' + cardData.titulo + '</h4><p class="text-[10px] md:text-base text-gray-200 font-light leading-relaxed overflow-y-auto no-scrollbar text-left md:text-justify">' + cardData.longDesc + '</p></div></div><button class="btn-action relative z-10 bg-dark border border-primary hover:bg-accent hover:border-accent text-white py-2 md:py-3 rounded uppercase font-bold text-[11px] md:text-lg transition-colors w-full shadow-lg shrink-0 mt-auto">Saiba Mais</button></div>';
    
    card.addEventListener('mouseenter', () => updateBackground(cardData.imagem));
    
    const btn = card.querySelector('.btn-action');
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = card.classList.contains('card-expanded');
      
      document.querySelectorAll('.service-card').forEach(c => {
        c.classList.remove('card-expanded');
        c.querySelector('.btn-action').textContent = 'Saiba Mais';
        c.querySelector('.btn-action').classList.replace('bg-accent', 'bg-dark');
      });
      
      if (!isExpanded) {
        card.classList.add('card-expanded');
        btn.textContent = 'CONTRATAR SERVIÇO';
        btn.classList.replace('bg-dark', 'bg-accent');
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });
    
    carouselTrack.appendChild(card);
    
    const dot = document.createElement('div');
    dot.className = 'dot h-2 rounded-full dot-transition cursor-pointer ' + (index === 0 ? 'bg-white w-4' : 'bg-white/30 w-2');
    dot.onclick = () => {
      const cardCenterInTrack = card.offsetLeft + (card.offsetWidth / 2);
      const containerCenter = carouselTrack.offsetWidth / 2;
      carouselTrack.scrollTo({ left: cardCenterInTrack - containerCenter, behavior: 'smooth' });
    };
    carouselDots.appendChild(dot);
  });
  
  carouselTrack.scrollLeft = 0;
  if(cards.length > 0) updateBackground(cards[0].imagem);
}

function updateBackground(imageUrl) {
  serviceBg.style.backgroundImage = 'url(' + "'" + imageUrl + "'" + ')';
  serviceBg.style.backgroundSize = 'cover';
  serviceBg.style.backgroundPosition = 'center';
}
`}
      </Script>

      <Script id="servicos-carousel" strategy="lazyOnload">
        {`
window.moveCarousel = function(direction) {
  const cardsNodes = document.querySelectorAll('.service-card');
  if (cardsNodes.length <= 1) return;
  
  let currentIndex = 0;
  let minDistance = Infinity;
  const trackCenter = carouselTrack.getBoundingClientRect().left + carouselTrack.offsetWidth / 2;
  
  cardsNodes.forEach((card, index) => {
    const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2;
    const distance = Math.abs(trackCenter - cardCenter);
    if (distance < minDistance) {
      minDistance = distance;
      currentIndex = index;
    }
  });
  
  let nextIndex = currentIndex + direction;
  if (nextIndex >= cardsNodes.length) nextIndex = 0;
  else if (nextIndex < 0) nextIndex = cardsNodes.length - 1;
  
  const targetCard = cardsNodes[nextIndex];
  const cardCenterInTrack = targetCard.offsetLeft + (targetCard.offsetWidth / 2);
  const containerCenter = carouselTrack.offsetWidth / 2;
  carouselTrack.scrollTo({ left: cardCenterInTrack - containerCenter, behavior: 'smooth' });
}

carouselTrack.addEventListener('scroll', () => {
  const cardsNodes = document.querySelectorAll('.service-card');
  const dotsNodes = document.querySelectorAll('.dot');
  if(cardsNodes.length === 0) return;
  
  let currentIndex = 0;
  let closestCard = cardsNodes[0];
  let minDistance = Infinity;
  const trackCenter = carouselTrack.getBoundingClientRect().left + carouselTrack.offsetWidth / 2;
  
  cardsNodes.forEach((card, index) => {
    const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2;
    const distance = Math.abs(trackCenter - cardCenter);
    if (distance < minDistance) {
      minDistance = distance;
      closestCard = card;
      currentIndex = index;
    }
  });
  
  updateBackground(closestCard.getAttribute('data-bg'));
  
  dotsNodes.forEach((dot, i) => {
    if(i === currentIndex) {
      dot.classList.remove('bg-white/30', 'w-2');
      dot.classList.add('bg-white', 'w-4');
    } else {
      dot.classList.remove('bg-white', 'w-4');
      dot.classList.add('bg-white/30', 'w-2');
    }
  });
});

// As funções de renderização serão chamadas automaticamente após o carregamento dos dados
`}
      </Script>
    </>
  );
}
