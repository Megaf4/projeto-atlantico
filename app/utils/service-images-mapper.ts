/**
 * Utilitário para mapear imagens de clientes aos serviços específicos
 * Baseado no gallery-data.json
 */

export interface ClienteData {
  imagens: string[];
  nome: string;
  totalImagens: number;
  servicos: string[];
}

export interface GalleryData {
  estatisticas: {
    totalClientes: number;
    totalImagens: number;
    geradoEm: string;
  };
  clientes: Record<string, ClienteData>;
}

// Mapeamento de categorias de serviços (uppercase) para as chaves usadas no JSON
const SERVICO_MAPPING: Record<string, string> = {
  'RECUPERAÇÃO ESTRUTURAL': 'RECUPERAÇÃO ESTRUTURAL',
  'NAVIOS E PLATAFORMAS': 'NAVIOS E PLATAFORMAS',
  'LEVANTAMENTO E REGISTRO': 'LEVANTAMENTO E REGISTRO',
  'HIDROELÉTRICAS E BARRAGENS': 'HIDROELÉTRICAS E BARRAGENS',
  'INSPEÇÃO E VISTORIA': 'INSPEÇÃO E VISTORIA',
  'DRAGAGEM E SONDAGEM': 'DRAGAGEM E SONDAGEM',
  'RESGATE E SALVATAGEM': 'RESGATE E SALVATAGEM',
  'MERGULHO ESPECIALIZADO': 'MERGULHO ESPECIALIZADO',
  'DUTOS E CABOS SUBMARINOS': 'DUTOS E CABOS SUBMARINOS',
  'TRATAMENTO DE ÁGUA': 'TRATAMENTO DE ÁGUA',
};

/**
 * Busca imagens para um serviço específico
 * @param serviceName - Nome do serviço (ex: "Recuperação Estrutural")
 * @param galleryData - Dados completos da galeria
 * @returns Array de URLs de imagens relacionadas ao serviço
 */
export function getImagesForService(
  serviceName: string,
  galleryData: GalleryData
): string[] {
  const serviceKey = SERVICO_MAPPING[serviceName.toUpperCase()] || serviceName.toUpperCase();
  const images: string[] = [];

  // Percorre todos os clientes e filtra aqueles que oferecem o serviço
  Object.values(galleryData.clientes).forEach((cliente) => {
    const clienteServicos = cliente.servicos.map(s => s.toUpperCase());
    
    if (clienteServicos.includes(serviceKey) || clienteServicos.includes('DIVERSOS')) {
      // Adiciona todas as imagens desse cliente
      images.push(...cliente.imagens);
    }
  });

  // Embaralha as imagens para variedade
  return shuffleArray(images);
}

/**
 * Busca uma imagem aleatória para um serviço específico
 * @param serviceName - Nome do serviço
 * @param galleryData - Dados completos da galeria
 * @param usedImages - Array de imagens já usadas (para evitar repetição)
 * @returns URL de uma imagem ou null se não houver disponível
 */
export function getRandomImageForService(
  serviceName: string,
  galleryData: GalleryData,
  usedImages: string[] = []
): string | null {
  const images = getImagesForService(serviceName, galleryData);
  
  // Filtra imagens não usadas
  const availableImages = images.filter(img => !usedImages.includes(img));
  
  if (availableImages.length === 0) {
    // Se todas foram usadas, retorna uma aleatória do pool completo
    return images.length > 0 ? images[Math.floor(Math.random() * images.length)] : null;
  }
  
  return availableImages[Math.floor(Math.random() * availableImages.length)];
}

/**
 * Distribui imagens de forma balanceada para múltiplos cards de um serviço
 * @param serviceName - Nome do serviço
 * @param count - Número de imagens necessárias
 * @param galleryData - Dados completos da galeria
 * @returns Array de URLs de imagens
 */
export function getImagesForServiceCards(
  serviceName: string,
  count: number,
  galleryData: GalleryData
): string[] {
  const allImages = getImagesForService(serviceName, galleryData);
  const result: string[] = [];
  
  if (allImages.length === 0) {
    // Fallback: retorna imagens genéricas de "DIVERSOS" ou "PUBLICO"
    const fallbackClientes = ['PUBLICO', 'NAVIOS'];
    for (const clienteNome of fallbackClientes) {
      const cliente = Object.values(galleryData.clientes).find(c => c.nome === clienteNome);
      if (cliente) {
        allImages.push(...cliente.imagens);
      }
    }
  }
  
  // Se ainda não tiver imagens suficientes, repete o array
  while (result.length < count && allImages.length > 0) {
    const remainingCount = count - result.length;
    if (remainingCount >= allImages.length) {
      result.push(...allImages);
    } else {
      result.push(...allImages.slice(0, remainingCount));
    }
  }
  
  return result;
}

/**
 * Função auxiliar para embaralhar array
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Agrupa clientes por serviço
 * @param galleryData - Dados completos da galeria
 * @returns Objeto com serviços como chave e array de clientes como valor
 */
export function groupClientsByService(galleryData: GalleryData): Record<string, ClienteData[]> {
  const grouped: Record<string, ClienteData[]> = {};
  
  Object.values(galleryData.clientes).forEach((cliente) => {
    cliente.servicos.forEach((servico) => {
      const servicoKey = servico.toUpperCase();
      if (!grouped[servicoKey]) {
        grouped[servicoKey] = [];
      }
      grouped[servicoKey].push(cliente);
    });
  });
  
  return grouped;
}

/**
 * Obtém estatísticas de imagens por serviço
 * @param galleryData - Dados completos da galeria
 * @returns Objeto com serviços e contagem de imagens disponíveis
 */
export function getServiceImageStats(galleryData: GalleryData): Record<string, number> {
  const stats: Record<string, number> = {};
  
  Object.keys(SERVICO_MAPPING).forEach((servico) => {
    const images = getImagesForService(servico, galleryData);
    stats[servico] = images.length;
  });
  
  return stats;
}
