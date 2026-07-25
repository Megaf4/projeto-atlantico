const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
const outputFile = path.join(__dirname, '../app/data/gallery-data.json');

// Mapeamento de clientes para categorias de serviço
const clienteParaServico = {
  // Hidroelétricas e Barragens
  'CTG BRASIL': ['Hidroelétricas e Barragens'],
  'CTG 2024': ['Hidroelétricas e Barragens'],
  'CTG 2025': ['Hidroelétricas e Barragens'],
  'CEMIG': ['Hidroelétricas e Barragens'],
  'CGH CASCATA': ['Hidroelétricas e Barragens'],
  'CGH SARDOÁ': ['Hidroelétricas e Barragens'],
  'IGARAPAVA': ['Hidroelétricas e Barragens'],
  'IGARAPAVA 2026': ['Hidroelétricas e Barragens'],
  'IGARAPAVA ENERGIA': ['Hidroelétricas e Barragens'],
  'IGARAPAVA ENERGIA 2023': ['Hidroelétricas e Barragens'],
  'CAMARGO CORREA - FOZ DO CHAPECÓ': ['Hidroelétricas e Barragens'],
  'ELEJOR': ['Hidroelétricas e Barragens'],
  'GUANHÃES ENERGIA': ['Hidroelétricas e Barragens'],
  'GUANHAES ENERGIA 2024': ['Hidroelétricas e Barragens'],
  'PCH EMAS': ['Hidroelétricas e Barragens'],
  'SAE - SANTO ANTÔNIO ENERGIA': ['Hidroelétricas e Barragens'],
  'VOTORANTIM ENERGIA': ['Hidroelétricas e Barragens'],
  'ARATU ENERGIA': ['Hidroelétricas e Barragens'],
  'ARATU GERAÇÃO': ['Hidroelétricas e Barragens'],
  'ALIANÇA ENERGIA': ['Hidroelétricas e Barragens'],
  'ALIANÇA ENERGIA 2023': ['Hidroelétricas e Barragens'],
  'ALIANÇA ENERGIA 2024': ['Hidroelétricas e Barragens'],
  'AT&T ENERGIA S.A': ['Hidroelétricas e Barragens'],
  'AUREN ENERGIA': ['Hidroelétricas e Barragens'],
  'AUREN ENERGIA 2025': ['Hidroelétricas e Barragens'],
  'PARATY ENERGIA': ['Hidroelétricas e Barragens'],
  
  // Portos e Terminais
  'AGEO': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'AGEO - COPAPE': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'AGEO 2024': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'AGEO TERMINAIS': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'BTP': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'BTP - BRASIL TERMINAL PORTUÁRIO': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'CODESP': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'LIBRA TERMINAIS': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'SANTOS BRASIL': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'SPA - SANTOS PORT AUTORIT': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'ULTRACARGO': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'ULTRACARGO ~2018': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'VOPAK': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'COFCO': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'COPERSUCAR': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'PORTO AÇU': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'RUMO': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'WAYPOINT': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'LOG-IN_PROINDE': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'LOG-IN _ PROINDE ~2018': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  
  // Navios
  'NAVIOS': ['Navios e Plataformas', 'Inspeção e Vistoria'],
  'NAVIOS 2022': ['Navios e Plataformas', 'Inspeção e Vistoria'],
  'CMA CGM': ['Navios e Plataformas', 'Inspeção e Vistoria'],
  
  // Tratamento de Água e Saneamento
  'SABESP': ['Tratamento de Água', 'Inspeção e Vistoria'],
  'SABESP ~2018': ['Tratamento de Água', 'Inspeção e Vistoria'],
  'SABESP 2020': ['Tratamento de Água', 'Inspeção e Vistoria'],
  'SABESP 2021': ['Tratamento de Água', 'Inspeção e Vistoria'],
  'SABESP 2022': ['Tratamento de Água', 'Inspeção e Vistoria'],
  'SABESP 2024': ['Tratamento de Água', 'Inspeção e Vistoria'],
  'SABESP 2025': ['Tratamento de Água', 'Inspeção e Vistoria'],
  'SABESP PINHEIROS': ['Tratamento de Água', 'Inspeção e Vistoria'],
  'BRK AMBIENTAL': ['Tratamento de Água', 'Inspeção e Vistoria'],
  'BRK AMBIENTAL 2020': ['Tratamento de Água', 'Inspeção e Vistoria'],
  'BRK AMBIENTAL 2022': ['Tratamento de Água', 'Inspeção e Vistoria'],
  'BRK PORTO FERREIRA': ['Tratamento de Água', 'Inspeção e Vistoria'],
  'DAE': ['Tratamento de Água', 'Inspeção e Vistoria'],
  'DAE ~2018': ['Tratamento de Água', 'Inspeção e Vistoria'],
  'DAE AMERICA 2022': ['Tratamento de Água', 'Inspeção e Vistoria'],
  'DAE AMERICANA': ['Tratamento de Água', 'Inspeção e Vistoria'],
  'DAE AMERICANA 2021': ['Tratamento de Água', 'Inspeção e Vistoria'],
  
  // Pontes e Infraestrutura
  'FINGER & SOMMER': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'FINGER & SOMMER 2022': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'FINGER & SOMMER 2023': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'FINGER & SOMMER 2024': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'PONTE DOS BARREIROS': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'ECR-DERSA': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  
  // Indústrias
  'PETROBRAS': ['Dutos e Cabos Submarinos', 'Inspeção e Vistoria'],
  'TBG': ['Dutos e Cabos Submarinos', 'Inspeção e Vistoria'],
  'DOW': ['Mergulho Especializado', 'Inspeção e Vistoria'],
  'YARA': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'YARA 2025': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'YARA BRASIL': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'BRACELL': ['Mergulho Especializado', 'Inspeção e Vistoria'],
  'NATURA': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'NATURA 2024': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'CUTRALE': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'CUTRALE ~2018': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  
  // Engenharia e Construção
  '4S ENGENHARIA': ['Recuperação Estrutural'],
  'AXXO': ['Recuperação Estrutural'],
  'AXXO 2021': ['Recuperação Estrutural'],
  'AXXO 2022': ['Recuperação Estrutural'],
  'AXXO CONSTRUTORA': ['Recuperação Estrutural'],
  'DT ENGENHARIA': ['Recuperação Estrutural'],
  'FARES & ASSOCIADOS ENGENHARIA': ['Recuperação Estrutural'],
  'INTENGE': ['Recuperação Estrutural'],
  'PIACENTINI': ['Recuperação Estrutural'],
  'PROJEL': ['Recuperação Estrutural'],
  'TECNIPLAN': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'TECNIPLAN 2023': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'TECNIPLAN 2025': ['Recuperação Estrutural', 'Inspeção e Vistoria'],
  'CONSORCIO PAULITEC': ['Recuperação Estrutural'],
  'VIATÉCNICA - RONDONÓPOLIS': ['Recuperação Estrutural'],
  
  // Equipamentos e Fornecedores
  'FKB': ['Hidroelétricas e Barragens'],
  'FKB - COMPORTAS': ['Hidroelétricas e Barragens'],
  'FKB - VÁLVULAS E COMPORTAS': ['Hidroelétricas e Barragens'],
  'FKD VÁLVULAS': ['Hidroelétricas e Barragens'],
  'KSB BOMBAS': ['Tratamento de Água'],
  'KSB BOMBAS HIDRAULICAS': ['Tratamento de Água'],
  
  // Inspeção e Pesquisa
  'IPT - INSTITUTO DE PESQUISAS TECNOLÓGICAS': ['Levantamento e Registro', 'Inspeção e Vistoria'],
  
  // Diversos
  'CHIP BELEM': ['Recuperação Estrutural'],
  'CLI': ['Recuperação Estrutural'],
  'CLI SUL': ['Recuperação Estrutural'],
  'CLUBE INTERNACIONAL DE REGATAS': ['Recuperação Estrutural'],
  'CONDOMINIO SWISS PARK': ['Recuperação Estrutural'],
  'SWISS PARK': ['Recuperação Estrutural'],
  'LATINA': ['Recuperação Estrutural'],
  'PREFEITURA DE SANTOS': ['Inspeção e Vistoria'],
  'REDRAM': ['Recuperação Estrutural'],
  'RETROFIT': ['Recuperação Estrutural'],
  'SDZ': ['Recuperação Estrutural'],
  'ZORTEA': ['Recuperação Estrutural'],
  'ZORTEA ~2018': ['Recuperação Estrutural'],
  'PUBLICO': ['Levantamento e Registro']
};

function getAllImageFiles(dir, baseDir = dir, resultado = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      getAllImageFiles(fullPath, baseDir, resultado);
    } else {
      const ext = path.extname(item).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext)) {
        const relativePath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
        resultado.push('/images/' + relativePath);
      }
    }
  }
  
  return resultado;
}

function organizarPorCliente() {
  const clientes = {};
  const dirs = fs.readdirSync(imagesDir, { withFileTypes: true });
  
  for (const dirent of dirs) {
    if (dirent.isDirectory()) {
      const clienteName = dirent.name;
      const clientePath = path.join(imagesDir, clienteName);
      const imagens = getAllImageFiles(clientePath, imagesDir);
      
      if (imagens.length > 0) {
        clientes[clienteName] = {
          nome: clienteName,
          imagens: imagens,
          servicos: clienteParaServico[clienteName] || ['Diversos'],
          totalImagens: imagens.length
        };
      }
    }
  }
  
  return clientes;
}

function organizarPorServico(clientes) {
  const servicos = {
    'Recuperação Estrutural': [],
    'Hidroelétricas e Barragens': [],
    'Inspeção e Vistoria': [],
    'Navios e Plataformas': [],
    'Levantamento e Registro': [],
    'Dragagem e Sondagem': [],
    'Resgate e Salvatagem': [],
    'Mergulho Especializado': [],
    'Dutos e Cabos Submarinos': [],
    'Tratamento de Água': [],
    'Diversos': []
  };
  
  for (const [clienteName, clienteData] of Object.entries(clientes)) {
    const servicosCliente = clienteData.servicos;
    
    for (const servico of servicosCliente) {
      if (servicos[servico]) {
        servicos[servico].push({
          cliente: clienteName,
          imagens: clienteData.imagens.slice(0, 3), // Primeiras 3 imagens
          totalImagens: clienteData.totalImagens
        });
      }
    }
  }
  
  return servicos;
}

function gerarDados() {
  console.log('Escaneando diretório de imagens...');
  const clientes = organizarPorCliente();
  const servicos = organizarPorServico(clientes);
  
  const dados = {
    clientes: clientes,
    servicos: servicos,
    estatisticas: {
      totalClientes: Object.keys(clientes).length,
      totalImagens: Object.values(clientes).reduce((sum, c) => sum + c.totalImagens, 0),
      geradoEm: new Date().toISOString()
    }
  };
  
  // Criar diretório se não existir
  const dataDir = path.dirname(outputFile);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  // Salvar arquivo JSON
  fs.writeFileSync(outputFile, JSON.stringify(dados, null, 2));
  
  console.log(`✓ Dados gerados com sucesso!`);
  console.log(`  - ${dados.estatisticas.totalClientes} clientes`);
  console.log(`  - ${dados.estatisticas.totalImagens} imagens`);
  console.log(`  - Arquivo: ${outputFile}`);
}

// Executar
gerarDados();
