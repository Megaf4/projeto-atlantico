/**
 * Utilitário para carregar imagens de serviços
 */

export interface ServiceImage {
  url: string;
  cliente: string;
}

export interface GalleryData {
  clientes: Record<string, {
    nome: string;
    imagens: string[];
    servicos: string[];
    totalImagens: number;
  }>;
  servicos: Record<string, Array<{
    cliente: string;
    imagens: string[];
    totalImagens: number;
  }>>;
  estatisticas: {
    totalClientes: number;
    totalImagens: number;
    geradoEm: string;
  };
}

/**
 * Carrega todas as imagens de um serviço específico
 */
export async function loadServiceImages(serviceName: string): Promise<ServiceImage[]> {
  try {
    const response = await fetch('/data/gallery-data.json');
    const data: GalleryData = await response.json();
    
    if (!data.servicos[serviceName]) {
      console.warn(`Serviço "${serviceName}" não encontrado`);
      return [];
    }
    
    const serviceData = data.servicos[serviceName];
    const images: ServiceImage[] = [];
    
    serviceData.forEach(clienteData => {
      clienteData.imagens.forEach(url => {
        images.push({
          url,
          cliente: clienteData.cliente
        });
      });
    });
    
    return images;
  } catch (error) {
    console.error('Erro ao carregar imagens do serviço:', error);
    return [];
  }
}

/**
 * Carrega uma imagem aleatória de um serviço
 */
export async function loadRandomServiceImage(serviceName: string): Promise<ServiceImage | null> {
  const images = await loadServiceImages(serviceName);
  if (images.length === 0) return null;
  
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

/**
 * Carrega N imagens aleatórias de um serviço
 */
export async function loadRandomServiceImages(
  serviceName: string,
  count: number
): Promise<ServiceImage[]> {
  const images = await loadServiceImages(serviceName);
  
  // Embaralhar
  const shuffled = images.sort(() => Math.random() - 0.5);
  
  // Pegar as primeiras N
  return shuffled.slice(0, count);
}

/**
 * Carrega todas as imagens de um cliente específico
 */
export async function loadClientImages(clienteName: string): Promise<string[]> {
  try {
    const response = await fetch('/data/gallery-data.json');
    const data: GalleryData = await response.json();
    
    if (!data.clientes[clienteName]) {
      console.warn(`Cliente "${clienteName}" não encontrado`);
      return [];
    }
    
    return data.clientes[clienteName].imagens;
  } catch (error) {
    console.error('Erro ao carregar imagens do cliente:', error);
    return [];
  }
}

/**
 * Carrega estatísticas da galeria
 */
export async function loadGalleryStats() {
  try {
    const response = await fetch('/data/gallery-data.json');
    const data: GalleryData = await response.json();
    return data.estatisticas;
  } catch (error) {
    console.error('Erro ao carregar estatísticas:', error);
    return null;
  }
}

/**
 * Lista todos os clientes que têm um serviço específico
 */
export async function listClientsForService(serviceName: string): Promise<string[]> {
  try {
    const response = await fetch('/data/gallery-data.json');
    const data: GalleryData = await response.json();
    
    if (!data.servicos[serviceName]) {
      return [];
    }
    
    return data.servicos[serviceName].map(s => s.cliente);
  } catch (error) {
    console.error('Erro ao listar clientes:', error);
    return [];
  }
}

/**
 * Retorna um mapeamento de serviço -> imagem de capa
 */
export async function getServiceCoverImages(): Promise<Record<string, ServiceImage>> {
  const servicosMapeados: Record<string, ServiceImage> = {};
  const servicos = [
    'Recuperação Estrutural',
    'Hidroelétricas e Barragens',
    'Inspeção e Vistoria',
    'Navios e Plataformas',
    'Levantamento e Registro',
    'Dragagem e Sondagem',
    'Resgate e Salvatagem',
    'Mergulho Especializado',
    'Dutos e Cabos Submarinos',
    'Tratamento de Água'
  ];
  
  for (const servico of servicos) {
    const image = await loadRandomServiceImage(servico);
    if (image) {
      servicosMapeados[servico] = image;
    }
  }
  
  return servicosMapeados;
}
