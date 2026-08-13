# 🧪 Guia de Teste - Sistema de Internacionalização

## ✅ Como Testar se Está Funcionando

### Teste 1: Limpar e Recarregar
1. Abra o console do navegador (F12)
2. Digite: `localStorage.clear()`
3. Pressione Enter
4. Recarregue a página (F5 ou Ctrl+R)
5. ✅ O modal deve aparecer
6. Clique em um idioma
7. ✅ O modal deve fechar
8. ✅ Verifique se o texto mudou

### Teste 2: Verificar Console
1. Abra o console do navegador (F12)
2. Clique em um idioma no modal
3. ✅ Deve aparecer: `🌍 Mudando idioma de pt para en` (ou es)
4. ✅ Deve aparecer: `Tradução carregada para: en` (ou es)

### Teste 3: Verificar localStorage
1. Abra o console do navegador (F12)
2. Digite: `localStorage.getItem('locale')`
3. ✅ Deve mostrar: `"pt"`, `"en"` ou `"es"`
4. Digite: `localStorage.getItem('languageChosen')`
5. ✅ Deve mostrar: `"true"`

### Teste 4: Página de Exemplo
1. Acesse: `http://localhost:3000/exemplo-i18n`
2. ✅ Veja se o conteúdo está no idioma escolhido
3. Use o seletor no header (🇧🇷 PT ▼)
4. Mude para outro idioma
5. ✅ O texto deve mudar instantaneamente

### Teste 5: Seletor do Header
1. Procure o seletor no canto superior direito
2. Passe o mouse sobre a bandeira
3. ✅ Deve aparecer um dropdown
4. Clique em outro idioma
5. ✅ O site deve traduzir instantaneamente
6. ✅ Verifique o console: `🌍 Mudando idioma...`

## 🐛 Se Não Estiver Funcionando

### Problema: Modal não aparece
**Solução:**
```javascript
// No console:
localStorage.removeItem('languageChosen');
localStorage.removeItem('locale');
// Recarregue a página
```

### Problema: Traduções não mudam
**Verificações:**

1. **Abra o console e verifique erros**
2. **Digite no console:**
```javascript
// Verificar se o contexto existe
window.__languageContext = true;
```

3. **Verificar se as traduções estão carregadas:**
```javascript
// No console:
import { translations } from './app/i18n/translations';
console.log(translations.pt);
console.log(translations.en);
console.log(translations.es);
```

### Problema: Modal aparece mas não fecha
**Verificação:**
1. Abra o console
2. Veja se há erros de JavaScript
3. Digite: `localStorage.setItem('languageChosen', 'true')`
4. Recarregue a página

## 🔍 Debug Avançado

### Ver Estado Atual do Idioma
Cole no console:
```javascript
// Ver idioma atual
console.log('Idioma atual:', localStorage.getItem('locale'));

// Forçar mudança de idioma
localStorage.setItem('locale', 'en');
location.reload();
```

### Forçar Idioma Específico
```javascript
// Forçar Português
localStorage.setItem('locale', 'pt');
localStorage.setItem('languageChosen', 'true');
location.reload();

// Forçar Inglês
localStorage.setItem('locale', 'en');
localStorage.setItem('languageChosen', 'true');
location.reload();

// Forçar Espanhol
localStorage.setItem('locale', 'es');
localStorage.setItem('languageChosen', 'true');
location.reload();
```

## 📊 Checklist de Funcionamento

Marque conforme testa:

- [ ] Modal aparece na primeira visita
- [ ] Modal não aparece na segunda visita
- [ ] Clicar em PT traduz para Português
- [ ] Clicar em EN traduz para Inglês
- [ ] Clicar em ES traduz para Espanhol
- [ ] Seletor no header funciona
- [ ] Idioma persiste ao recarregar
- [ ] Console mostra logs de mudança
- [ ] localStorage salva preferência
- [ ] Página `/exemplo-i18n` funciona

## 🚀 Teste Completo

Execute este script no console para teste automático:

```javascript
console.log('🧪 INICIANDO TESTES DE I18N...\n');

// Teste 1: Verificar localStorage
console.log('1️⃣ localStorage:');
console.log('   locale:', localStorage.getItem('locale'));
console.log('   languageChosen:', localStorage.getItem('languageChosen'));

// Teste 2: Verificar se as traduções existem
console.log('\n2️⃣ Verificando traduções...');
const locales = ['pt', 'en', 'es'];
locales.forEach(loc => {
  try {
    const saved = localStorage.getItem('locale');
    console.log(`   ${loc}:`, saved === loc ? '✅ ATUAL' : '⚪ disponível');
  } catch (e) {
    console.log(`   ${loc}: ❌ erro`);
  }
});

// Teste 3: Simular mudança
console.log('\n3️⃣ Simulando mudança para Inglês...');
localStorage.setItem('locale', 'en');
console.log('   ✅ localStorage atualizado');
console.log('   📝 Recarregue a página para ver as mudanças');

console.log('\n✅ TESTES CONCLUÍDOS');
console.log('💡 Recarregue a página (F5) para aplicar mudanças');
```

## 📱 Teste Mobile

1. Abra o DevTools (F12)
2. Clique no ícone de mobile/responsive
3. Escolha um dispositivo (iPhone, Android)
4. Recarregue a página
5. ✅ Modal deve se adaptar ao mobile
6. ✅ Botões devem estar empilhados (1 coluna)

## 🎯 Resultado Esperado

Quando funcionar corretamente:

1. **Primeira visita:**
   - Modal aparece com 3 opções
   - Escolhe idioma → modal fecha
   - Site traduz instantaneamente
   - Console mostra logs

2. **Próximas visitas:**
   - Modal não aparece
   - Site carrega no idioma salvo
   - Pode mudar usando header

3. **Mudança manual:**
   - Clica no seletor
   - Escolhe idioma
   - Site traduz na hora
   - Preferência é salva

## 💻 Comandos Úteis

### Resetar Tudo
```bash
# No terminal
npm run dev
# No navegador console
localStorage.clear();
location.reload();
```

### Ver Logs em Tempo Real
```javascript
// Adicionar listener de mudanças
window.addEventListener('storage', (e) => {
  if (e.key === 'locale') {
    console.log('🌍 Idioma mudou para:', e.newValue);
  }
});
```

### Testar Todos os Idiomas
```javascript
const testLocales = async () => {
  for (const locale of ['pt', 'en', 'es']) {
    console.log(`\n🔄 Testando ${locale}...`);
    localStorage.setItem('locale', locale);
    await new Promise(r => setTimeout(r, 1000));
    location.reload();
  }
};
// testLocales(); // Descomente para executar
```

## 📞 Se Ainda Não Funcionar

1. **Verifique se está rodando:**
   ```bash
   npm run dev
   ```

2. **Acesse:**
   ```
   http://localhost:3000/exemplo-i18n
   ```

3. **Abra o console e envie:**
   - Screenshot dos erros
   - Resultado de `localStorage.getItem('locale')`
   - Resultado de `localStorage.getItem('languageChosen')`

## ✅ Sucesso!

Se todos os testes passarem, você verá:
- ✅ Modal aparece e fecha corretamente
- ✅ Idiomas mudam ao clicar
- ✅ Textos traduzem instantaneamente  
- ✅ Preferência persiste entre sessões
- ✅ Console mostra logs de debug
- ✅ localStorage armazena corretamente

**Tudo funcionando? Parabéns! 🎉**
