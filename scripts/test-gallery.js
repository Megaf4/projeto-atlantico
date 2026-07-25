/**
 * Script de teste para verificar o sistema de galeria
 * Execute: node scripts/test-gallery.js
 */

const fs = require('fs');
const path = require('path');

const galleryDataPath = path.join(__dirname, '../public/data/gallery-data.json');

function testarSistema() {
  console.log('🔍 Testando Sistema de Galeria\n');
  console.log('═'.repeat(50));
  
  // 1. Verificar se o arquivo existe
  console.log('\n1️⃣  Verificando arquivo JSON...');
  if (!fs.existsSync(galleryDataPath)) {
    console.log('❌ Arquivo não encontrado! Execute: node scripts/scan-images.js');
    process.exit(1);
  }
  console.log('✅ Arquivo encontrado');
  
  // 2. Carregar e validar JSON
  console.log('\n2️⃣  Validando estrutura do JSON...');
  let data;
  try {
    const content = fs.readFileSync(galleryDataPath, 'utf8');
    data = JSON.parse(content);
    console.log('✅ JSON válido');
  } catch (error) {
    console.log('❌ Erro ao ler JSON:', error.message);
    process.exit(1);
  }
  
  // 3. Verificar estatísticas
  console.log('\n3️⃣  Estatísticas:');
  console.log(`   📊 Total de Clientes: ${data.estatisticas.totalClientes}`);
  console.log(`   📸 Total de Imagens: ${data.estatisticas.totalImagens}`);
  console.log(`   📅 Gerado em: ${new Date(data.estatisticas.geradoEm).toLocaleString('pt-BR')}`);
  
  // 4. Verificar serviços
  console.log('\n4️⃣  Serviços catalogados:');
  const servicos = Object.keys(data.servicos);
  servicos.forEach((servico, i) => {
    const clientes = data.servicos[servico].length;
    const totalImagens = data.servicos[servico].reduce((sum, c) => sum + c.imagens.length, 0);
    console.log(`   ${i + 1}. ${servico}`);
    console.log(`      └─ ${clientes} clientes, ${totalImagens} imagens`);
  });
  
  // 5. Top 10 clientes com mais imagens
  console.log('\n5️⃣  Top 10 Clientes (mais imagens):');
  const clientesOrdenados = Object.values(data.clientes)
    .sort((a, b) => b.totalImagens - a.totalImagens)
    .slice(0, 10);
  
  clientesOrdenados.forEach((cliente, i) => {
    console.log(`   ${i + 1}. ${cliente.nome}: ${cliente.totalImagens} imagens`);
  });
  
  // 6. Verificar integridade das imagens
  console.log('\n6️⃣  Verificando integridade das imagens...');
  let imagensVerificadas = 0;
  let imagensQuebradas = 0;
  const publicPath = path.join(__dirname, '../public');
  
  // Verificar uma amostra (50 primeiras imagens)
  const todasImagens = Object.values(data.clientes)
    .flatMap(c => c.imagens)
    .slice(0, 50);
  
  todasImagens.forEach(imgPath => {
    const fullPath = path.join(publicPath, imgPath);
    if (fs.existsSync(fullPath)) {
      imagensVerificadas++;
    } else {
      imagensQuebradas++;
      console.log(`   ⚠️  Imagem não encontrada: ${imgPath}`);
    }
  });
  
  console.log(`   ✅ ${imagensVerificadas} imagens verificadas`);
  if (imagensQuebradas > 0) {
    console.log(`   ⚠️  ${imagensQuebradas} imagens com problema`);
  }
  
  // 7. Testar exemplos de queries
  console.log('\n7️⃣  Exemplos de queries:');
  
  // Exemplo 1: Imagens de um serviço específico
  const hidroeletricasData = data.servicos['Hidroelétricas e Barragens'];
  if (hidroeletricasData && hidroeletricasData.length > 0) {
    console.log(`   📌 Hidroelétricas: ${hidroeletricasData[0].cliente} - ${hidroeletricasData[0].imagens[0]}`);
  }
  
  // Exemplo 2: Imagens de um cliente específico
  const sabespData = data.clientes['SABESP'];
  if (sabespData) {
    console.log(`   📌 SABESP: ${sabespData.totalImagens} imagens disponíveis`);
  }
  
  // Exemplo 3: Cliente com mais diversidade de serviços
  const clienteDiverso = Object.values(data.clientes)
    .sort((a, b) => b.servicos.length - a.servicos.length)[0];
  console.log(`   📌 Cliente mais diverso: ${clienteDiverso.nome} (${clienteDiverso.servicos.length} serviços)`);
  
  // 8. Tamanho do arquivo
  console.log('\n8️⃣  Análise de performance:');
  const stats = fs.statSync(galleryDataPath);
  const tamanhoKB = (stats.size / 1024).toFixed(2);
  const tamanhoMB = (stats.size / (1024 * 1024)).toFixed(2);
  console.log(`   📦 Tamanho do JSON: ${tamanhoKB} KB (${tamanhoMB} MB)`);
  
  if (stats.size < 1024 * 1024) {
    console.log(`   ✅ Tamanho adequado para carregamento rápido`);
  } else {
    console.log(`   ⚠️  Arquivo grande, considere otimização`);
  }
  
  // 9. Distribuição de imagens por serviço
  console.log('\n9️⃣  Distribuição de imagens por serviço:');
  const distribuicao = Object.entries(data.servicos)
    .map(([servico, items]) => ({
      servico,
      total: items.reduce((sum, c) => sum + c.imagens.length, 0)
    }))
    .sort((a, b) => b.total - a.total);
  
  distribuicao.forEach(({ servico, total }, i) => {
    const barra = '█'.repeat(Math.ceil(total / 10));
    console.log(`   ${servico.padEnd(30)} ${barra} ${total}`);
  });
  
  // 10. Conclusão
  console.log('\n' + '═'.repeat(50));
  console.log('🎉 Teste concluído!');
  
  if (imagensQuebradas === 0 && data.estatisticas.totalImagens > 0) {
    console.log('✅ Sistema funcionando perfeitamente!');
    console.log('\n📝 Próximos passos:');
    console.log('   1. Importar o componente Gallery nas páginas');
    console.log('   2. Usar as funções em app/utils/service-images.ts');
    console.log('   3. Consultar INTEGRACAO-IMAGENS.md para exemplos');
  } else if (imagensQuebradas > 0) {
    console.log('⚠️  Algumas imagens não foram encontradas');
    console.log('   Execute novamente: node scripts/scan-images.js');
  }
  
  console.log('\n');
}

// Executar teste
testarSistema();
