# Guia Rápido de Internacionalização (i18n)

## ✅ O que foi implementado

Sistema completo de internacionalização com suporte a:
- 🇧🇷 **Português** (idioma padrão)
- 🇺🇸 **Inglês**
- 🇪🇸 **Espanhol**

## 🚀 Como usar rapidamente

### 1. Em um componente React

```tsx
'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function MeuComponente() {
  const { t } = useLanguage();
  
  return <h1>{t.hero.title}</h1>;
}
```

### 2. Usar componentes prontos

```tsx
import HeaderWithI18n from '../components/HeaderWithI18n';
import FooterWithI18n from '../components/FooterWithI18n';

export default function MinhaPage() {
  return (
    <>
      <HeaderWithI18n />
      {/* Seu conteúdo aqui */}
      <FooterWithI18n />
    </>
  );
}
```

## 📁 Arquivos criados

```
app/
├── i18n/
│   ├── locales.ts                    # Idiomas disponíveis
│   └── translations/
│       ├── pt.ts                     # 🇧🇷 Traduções em Português
│       ├── en.ts                     # 🇺🇸 Traduções em Inglês
│       └── es.ts                     # 🇪🇸 Traduções em Espanhol
├── contexts/
│   └── LanguageContext.tsx           # Gerenciamento de idioma
└── components/
    ├── LanguageSwitcher.tsx          # Seletor de idiomas
    ├── HeaderWithI18n.tsx            # Header traduzido
    └── FooterWithI18n.tsx            # Footer traduzido
```

## 🎯 Exemplo Prático

Visite `/exemplo-i18n` para ver o sistema funcionando!

## 📝 Traduções disponíveis

Todas as traduções estão organizadas em:

```typescript
t.nav.aboutUs           // Navegação - Sobre Nós
t.nav.services          // Navegação - Serviços
t.nav.contactUs         // Navegação - Fale Conosco
t.hero.title            // Hero - Título
t.hero.subtitle         // Hero - Subtítulo
t.services.title        // Serviços - Título
t.services.categories   // Serviços - Categorias (structural, ships, etc.)
t.about.title           // Sobre - Título
t.about.paragraph1      // Sobre - Parágrafo 1
t.contact.title         // Contato - Título
t.contact.form.*        // Contato - Campos do formulário
t.footer.address        // Footer - Endereço
t.footer.copyright      // Footer - Copyright
```

## 🔧 Como adicionar novas traduções

1. **Edite `app/i18n/translations/pt.ts`** (arquivo base)
2. **Copie a mesma estrutura para `en.ts` e `es.ts`**
3. **Use no seu componente**: `t.suaNovaChave.subChave`

Exemplo:

```typescript
// pt.ts
export const pt = {
  novaSecao: {
    titulo: 'Meu Título',
  },
};

// en.ts
export const en = {
  novaSecao: {
    titulo: 'My Title',
  },
};

// es.ts
export const es = {
  novaSecao: {
    titulo: 'Mi Título',
  },
};
```

## 💡 Recursos

- ✅ Persistência automática no localStorage
- ✅ Seletor visual com bandeiras
- ✅ TypeScript para segurança de tipos
- ✅ Componentes reutilizáveis
- ✅ Fácil de estender com novos idiomas

## 📚 Documentação completa

Consulte [INTERNATIONALIZATION.md](./INTERNATIONALIZATION.md) para detalhes completos.

## 🎨 Interface do Seletor

O seletor de idiomas aparece no canto superior direito do header:

```
🇧🇷 PT ▼
  🇧🇷 Português
  🇺🇸 English
  🇪🇸 Español
```

## 🌐 Integração com páginas existentes

Para adicionar i18n às páginas existentes, você tem duas opções:

### Opção 1: Substituir Header e Footer
```tsx
// Antes
<header>...</header>

// Depois
<HeaderWithI18n />
```

### Opção 2: Adicionar apenas traduções
```tsx
'use client';
import { useLanguage } from '../contexts/LanguageContext';

// Depois use t.* onde necessário
```

## ⚠️ Importante

- Componentes que usam `useLanguage()` devem ter `'use client'` no topo
- O `LanguageProvider` já está configurado no `layout.tsx` principal
- As traduções são carregadas do localStorage automaticamente

## 🐛 Solução de problemas

**Tradução não aparece?**
- Verifique se a chave existe em todos os arquivos (pt.ts, en.ts, es.ts)
- Confirme que está usando `'use client'` no componente

**Idioma não persiste?**
- Verifique se o localStorage está habilitado
- Confirme que o LanguageProvider está no layout.tsx

## 🎉 Pronto!

Agora você pode:
1. ✅ Ver o site em 3 idiomas
2. ✅ Adicionar novas traduções facilmente
3. ✅ Usar componentes prontos com i18n
4. ✅ Criar novos componentes traduzidos

**Teste agora:** Visite `/exemplo-i18n` e mude o idioma!
