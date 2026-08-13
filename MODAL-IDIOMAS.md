# 🌍 Modal de Seleção de Idiomas

## Visão Geral

Um modal de boas-vindas elegante que aparece quando o usuário acessa o site pela primeira vez, permitindo escolher o idioma preferido.

## ✨ Características

### 1. Aparece Apenas na Primeira Visita
- ✅ Modal aparece automaticamente ao entrar no site
- ✅ Não aparece novamente após a escolha
- ✅ Armazenado no localStorage
- ✅ Delay de 500ms para melhor experiência

### 2. Design Atraente
- 🎨 Fundo escuro com gradiente (azul marinho)
- 🎨 Bordas douradas (cor accent)
- 🎨 Logo da Atlântico no topo
- 🎨 Animações suaves (fade in + scale)
- 🎨 Efeito de hover nos botões

### 3. Três Opções de Idioma
- 🇧🇷 **Português** (Brasil)
- 🇺🇸 **English** (United States)
- 🇪🇸 **Español** (España)

### 4. Funcionalidades
- ✅ Clique em qualquer idioma para selecionar
- ✅ Modal fecha automaticamente após seleção
- ✅ Idioma aplicado imediatamente em todo o site
- ✅ Preferência salva para futuras visitas
- ✅ Backdrop blur (fundo desfocado)

## 📱 Responsivo

- **Desktop**: 3 colunas lado a lado
- **Mobile**: 1 coluna empilhada

## 🎯 Como Funciona

### 1. Primeira Visita
```
Usuário entra no site
    ↓
Verifica localStorage
    ↓
Não tem 'languageChosen'?
    ↓
Mostra modal após 500ms
    ↓
Usuário escolhe idioma
    ↓
Salva preferência
    ↓
Fecha modal
```

### 2. Visitas Subsequentes
```
Usuário entra no site
    ↓
Verifica localStorage
    ↓
Tem 'languageChosen'?
    ↓
Não mostra modal
    ↓
Carrega idioma salvo
```

## 🔧 Personalização

### Resetar a Escolha (para testes)
Para forçar o modal a aparecer novamente:

```javascript
// No console do navegador
localStorage.removeItem('languageChosen');
localStorage.removeItem('locale');
// Recarregue a página
```

### Alterar o Delay
Edite `LanguageWelcomeModal.tsx`:

```typescript
setTimeout(() => {
  setIsOpen(true);
}, 500); // Mude este valor (em milissegundos)
```

### Desabilitar o Modal
Se quiser remover o modal completamente, edite `app/layout.tsx`:

```tsx
// Remova esta linha:
<LanguageWelcomeModal />
```

## 🎨 Customização Visual

### Cores
As cores seguem o design system do site:

```typescript
// Gradiente de fundo
from-[#0E1A2B] to-[#223A5E]

// Borda dourada
border-accent/30

// Hover dos botões
hover:bg-accent
```

### Tamanhos das Bandeiras
```tsx
<div className="text-6xl mb-3">🇧🇷</div>
// Mude text-6xl para outro tamanho se necessário
```

## 📋 Estrutura do Componente

```
LanguageWelcomeModal
├── Overlay (fundo escuro)
├── Modal Container
│   ├── Logo Atlântico
│   ├── Título trilíngue
│   ├── Subtítulo
│   ├── Botões de Idioma
│   │   ├── Português 🇧🇷
│   │   ├── English 🇺🇸
│   │   └── Español 🇪🇸
│   └── Nota informativa
└── Estilos (animações)
```

## 🚀 Testando

### Teste 1: Primeira Visita
1. Limpe o localStorage
2. Acesse o site
3. Modal deve aparecer após 500ms
4. Escolha um idioma
5. Site deve mudar para o idioma escolhido
6. Modal fecha

### Teste 2: Segunda Visita
1. Recarregue a página
2. Modal NÃO deve aparecer
3. Site deve estar no idioma escolhido

### Teste 3: Mudança Manual
1. Use o seletor de idiomas no header
2. Idioma deve mudar
3. Modal não deve reaparecer

## 💡 Dicas

### Para Desenvolvedores
- O modal usa z-index 9999 e 10000 para ficar acima de tudo
- As animações são feitas com CSS puro (não precisa de biblioteca)
- O componente é 100% client-side (`'use client'`)

### Para Designers
- Bandeiras são emojis (sempre funcionam, sem precisar de imagens)
- Hover effects são suaves (300ms transition)
- Scale effects nos botões (105% no hover, 95% no click)

## 🔍 Detalhes Técnicos

### localStorage Keys
```typescript
'languageChosen' // Boolean - se o usuário já escolheu
'locale'         // String - idioma escolhido ('pt', 'en', 'es')
```

### Estados
```typescript
const [isOpen, setIsOpen] = useState(false);
// true = modal visível
// false = modal oculto
```

### Integração
```typescript
import { useLanguage } from '../contexts/LanguageContext';
const { setLocale } = useLanguage();

// Ao clicar em um idioma:
setLocale('pt'); // ou 'en', 'es'
```

## 🎯 Comportamento Esperado

| Ação | Resultado |
|------|-----------|
| Primeira visita | Modal aparece |
| Escolhe idioma | Modal fecha, site traduz |
| Recarrega página | Modal não aparece |
| Limpa localStorage | Modal volta a aparecer |
| Usa seletor do header | Idioma muda, modal não reaparece |

## ❓ FAQ

**P: O modal aparece toda vez que entro no site?**  
R: Não, apenas na primeira vez. Depois ele lembra da sua escolha.

**P: Posso mudar o idioma depois?**  
R: Sim! Use o seletor de idiomas no canto superior direito do header.

**P: Como faço o modal aparecer de novo?**  
R: Limpe o localStorage do navegador ou use modo anônimo/privado.

**P: Posso desabilitar o modal?**  
R: Sim, remova `<LanguageWelcomeModal />` do `layout.tsx`.

**P: Funciona em mobile?**  
R: Sim! O layout se adapta automaticamente.

**P: Posso adicionar mais idiomas?**  
R: Sim! Edite o componente e adicione mais botões seguindo o mesmo padrão.

## 🌟 Exemplo de Uso

O modal já está integrado no layout principal. Não precisa fazer nada além de ter certeza de que:

1. ✅ `LanguageProvider` está envolvendo a aplicação
2. ✅ `LanguageWelcomeModal` está dentro do `LanguageProvider`
3. ✅ O site tem as traduções configuradas

**Está tudo pronto! Basta acessar o site pela primeira vez!** 🎉

## 📚 Arquivos Relacionados

- `app/components/LanguageWelcomeModal.tsx` - Componente do modal
- `app/layout.tsx` - Inclusão do modal
- `app/contexts/LanguageContext.tsx` - Gerenciamento de idioma
- `app/i18n/translations/` - Arquivos de tradução

---

**Status:** ✅ Implementado e Funcionando  
**Versão:** 1.0.0  
**Última atualização:** 2026-08-10
