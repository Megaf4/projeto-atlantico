# Sistema de Internacionalização (i18n)

## Visão Geral

O site da Atlântico agora possui suporte completo para três idiomas:
- 🇧🇷 Português (pt) - idioma padrão
- 🇺🇸 Inglês (en)
- 🇪🇸 Espanhol (es)

## Estrutura de Arquivos

```
app/
├── i18n/
│   ├── locales.ts              # Definição de idiomas suportados
│   └── translations/
│       ├── index.ts            # Exporta todas as traduções
│       ├── pt.ts               # Traduções em Português
│       ├── en.ts               # Traduções em Inglês
│       └── es.ts               # Traduções em Espanhol
├── contexts/
│   └── LanguageContext.tsx     # Contexto React para gerenciar idioma
└── components/
    ├── LanguageSwitcher.tsx    # Seletor de idiomas
    ├── HeaderWithI18n.tsx      # Header com i18n
    └── FooterWithI18n.tsx      # Footer com i18n
```

## Como Usar

### 1. Em Componentes React

```tsx
'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function MyComponent() {
  const { t, locale, setLocale } = useLanguage();

  return (
    <div>
      <h1>{t.hero.title}</h1>
      <p>{t.hero.subtitle}</p>
      <button onClick={() => setLocale('en')}>English</button>
    </div>
  );
}
```

### 2. Adicionar Novas Traduções

#### Passo 1: Edite `pt.ts` (arquivo base)
```typescript
export const pt = {
  newSection: {
    title: 'Meu Título',
    description: 'Minha Descrição',
  },
};
```

#### Passo 2: Edite `en.ts` e `es.ts`
```typescript
// en.ts
export const en: Translation = {
  newSection: {
    title: 'My Title',
    description: 'My Description',
  },
};

// es.ts
export const es: Translation = {
  newSection: {
    title: 'Mi Título',
    description: 'Mi Descripción',
  },
};
```

### 3. Usar o Seletor de Idiomas

O componente `LanguageSwitcher` já está integrado no header e permite que os usuários alternem entre idiomas:

```tsx
import LanguageSwitcher from './components/LanguageSwitcher';

<LanguageSwitcher />
```

### 4. Componentes Prontos

Já existem componentes prontos com i18n:

- **HeaderWithI18n**: Header completo com navegação traduzida
- **FooterWithI18n**: Footer com informações de contato traduzidas

Exemplo de uso:
```tsx
import HeaderWithI18n from './components/HeaderWithI18n';
import FooterWithI18n from './components/FooterWithI18n';

export default function Page() {
  return (
    <>
      <HeaderWithI18n />
      {/* Seu conteúdo aqui */}
      <FooterWithI18n />
    </>
  );
}
```

## Estrutura de Traduções

As traduções estão organizadas em categorias:

```typescript
{
  nav: {              // Navegação
    aboutUs: '...',
    services: '...',
    contactUs: '...',
    // ...
  },
  hero: {             // Seção Hero
    title: '...',
    subtitle: '...',
  },
  services: {         // Serviços
    title: '...',
    categories: {
      structural: '...',
      ships: '...',
      // ...
    },
  },
  about: {            // Sobre Nós
    title: '...',
    paragraph1: '...',
    // ...
  },
  clients: {          // Clientes
    title: '...',
  },
  partners: {         // Parceiros
    title: '...',
  },
  gallery: {          // Galeria
    title: '...',
  },
  contact: {          // Contato
    title: '...',
    form: {
      companyName: '...',
      yourName: '...',
      // ...
    },
  },
  footer: {           // Rodapé
    address: '...',
    copyright: '...',
  },
}
```

## Persistência

O idioma selecionado é salvo automaticamente no `localStorage` do navegador, então:
- ✅ O usuário não precisa selecionar novamente ao recarregar a página
- ✅ A preferência persiste entre sessões
- ✅ O atributo `lang` do HTML é atualizado automaticamente

## Idiomas Suportados

| Código | Idioma    | Flag |
|--------|-----------|------|
| `pt`   | Português | 🇧🇷   |
| `en`   | Inglês    | 🇺🇸   |
| `es`   | Espanhol  | 🇪🇸   |

## Adicionando um Novo Idioma

Para adicionar um novo idioma (ex: Francês):

1. **Edite `locales.ts`**:
```typescript
export const locales = ['pt', 'en', 'es', 'fr'] as const;
```

2. **Crie `fr.ts` em `translations/`**:
```typescript
import { Translation } from './pt';

export const fr: Translation = {
  // ... suas traduções em francês
};
```

3. **Atualize `translations/index.ts`**:
```typescript
import { fr } from './fr';

export const translations = {
  pt,
  en,
  es,
  fr,
} as const;
```

4. **Atualize `LanguageSwitcher.tsx`**:
```typescript
const languages = [
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
];
```

## Integração com as Páginas Existentes

Para integrar i18n nas páginas existentes:

### Opção 1: Usando Hooks (Recomendado)

```tsx
'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function MyPage() {
  const { t } = useLanguage();
  
  return (
    <div>
      <h1>{t.services.title}</h1>
      {/* resto do conteúdo */}
    </div>
  );
}
```

### Opção 2: Usando Componentes Prontos

```tsx
import HeaderWithI18n from '../components/HeaderWithI18n';
import FooterWithI18n from '../components/FooterWithI18n';

export default function MyPage() {
  return (
    <>
      <HeaderWithI18n />
      {/* seu conteúdo */}
      <FooterWithI18n />
    </>
  );
}
```

## Exemplo Completo

```tsx
'use client';

import { useLanguage } from './contexts/LanguageContext';
import HeaderWithI18n from './components/HeaderWithI18n';
import FooterWithI18n from './components/FooterWithI18n';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <HeaderWithI18n />
      
      <main>
        <section>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.subtitle}</p>
        </section>
        
        <section>
          <h2>{t.services.title}</h2>
          <ul>
            <li>{t.services.categories.structural}</li>
            <li>{t.services.categories.ships}</li>
            <li>{t.services.categories.survey}</li>
          </ul>
        </section>
      </main>
      
      <FooterWithI18n />
    </>
  );
}
```

## Boas Práticas

1. **Sempre use chaves descritivas**: `t.contact.form.yourName` é melhor que `t.c.f.yn`
2. **Mantenha a estrutura consistente**: Todos os idiomas devem ter a mesma estrutura
3. **Use TypeScript**: O tipo `Translation` garante que todos os idiomas tenham as mesmas chaves
4. **Teste todos os idiomas**: Navegue pelo site em cada idioma para verificar se está tudo correto
5. **Atualize todos os arquivos**: Ao adicionar uma nova tradução, atualize pt.ts, en.ts e es.ts

## Problemas Comuns

### Tradução não aparece
- Verifique se a chave existe em todos os arquivos de idioma (pt.ts, en.ts, es.ts)
- Confirme que está usando `useLanguage()` no componente
- Certifique-se de que o componente está marcado como `'use client'`

### Idioma não persiste
- Verifique se o localStorage está habilitado no navegador
- Confirme que o `LanguageProvider` está envolvendo sua aplicação no `layout.tsx`

### Erro de TypeScript
- Execute `npm run build` para verificar erros de tipo
- Certifique-se de que todas as traduções seguem o tipo `Translation` de `pt.ts`

## Suporte

Para dúvidas ou problemas, consulte a documentação do projeto ou entre em contato com a equipe de desenvolvimento.
