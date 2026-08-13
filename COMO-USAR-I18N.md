# 🌍 Como Usar o Sistema de Internacionalização

## Para Visitantes do Site

### 1. Mudando o Idioma

**Localização**: Canto superior direito do header

```
┌─────────────────────────────────────────────────┐
│  ☰  Serviços  Fale Conosco    🇧🇷 PT ▼  [LOGO] │
└─────────────────────────────────────────────────┘
```

**Ao clicar em 🇧🇷 PT ▼:**

```
┌──────────────────┐
│ 🇧🇷 Português   ✓ │ ← Selecionado
│ 🇺🇸 English       │
│ 🇪🇸 Español       │
└──────────────────┘
```

**O que acontece:**
- ✅ Site inteiro muda instantaneamente
- ✅ Preferência é salva automaticamente
- ✅ Não precisa recarregar a página
- ✅ Idioma mantido na próxima visita

---

## Para Desenvolvedores

### Cenário 1: Criar uma Nova Página com i18n

```tsx
'use client';

import { useLanguage } from '../contexts/LanguageContext';
import HeaderWithI18n from '../components/HeaderWithI18n';
import FooterWithI18n from '../components/FooterWithI18n';

export default function MinhaNovaPage() {
  const { t } = useLanguage();

  return (
    <>
      <HeaderWithI18n />
      
      <main>
        <h1>{t.hero.title}</h1>
        <p>{t.hero.subtitle}</p>
        
        <section>
          <h2>{t.services.title}</h2>
          <ul>
            {Object.values(t.services.categories).map((category, i) => (
              <li key={i}>{category}</li>
            ))}
          </ul>
        </section>
      </main>
      
      <FooterWithI18n />
    </>
  );
}
```

### Cenário 2: Atualizar Página Existente

**ANTES:**
```tsx
export default function Page() {
  return (
    <div>
      <header>
        <nav>
          <a href="/sobre-nos">SOBRE NÓS</a>
          <a href="/#servicos">SERVIÇOS</a>
          <a href="/fale-conosco">FALE CONOSCO</a>
        </nav>
      </header>
      
      <h1>Atlântico</h1>
      <p>Serviços Técnicos Submarinos</p>
      
      <footer>
        <p>© 2026 Atlântico Serviços Técnicos Submarinos</p>
      </footer>
    </div>
  );
}
```

**DEPOIS:**
```tsx
'use client';

import { useLanguage } from '../contexts/LanguageContext';
import HeaderWithI18n from '../components/HeaderWithI18n';
import FooterWithI18n from '../components/FooterWithI18n';

export default function Page() {
  const { t } = useLanguage();
  
  return (
    <div>
      <HeaderWithI18n />
      
      <h1>{t.hero.title}</h1>
      <p>{t.hero.subtitle}</p>
      
      <FooterWithI18n />
    </div>
  );
}
```

### Cenário 3: Adicionar Nova Tradução

Suponha que você quer adicionar um novo texto "Nosso Time":

**1. Edite `app/i18n/translations/pt.ts`:**
```typescript
export const pt = {
  // ... traduções existentes
  team: {
    title: 'Nosso Time',
    description: 'Profissionais qualificados e experientes',
  },
};
```

**2. Edite `app/i18n/translations/en.ts`:**
```typescript
export const en: Translation = {
  // ... traduções existentes
  team: {
    title: 'Our Team',
    description: 'Qualified and experienced professionals',
  },
};
```

**3. Edite `app/i18n/translations/es.ts`:**
```typescript
export const es: Translation = {
  // ... traduções existentes
  team: {
    title: 'Nuestro Equipo',
    description: 'Profesionales calificados y experimentados',
  },
};
```

**4. Use no seu componente:**
```tsx
'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function TeamSection() {
  const { t } = useLanguage();
  
  return (
    <section>
      <h2>{t.team.title}</h2>
      <p>{t.team.description}</p>
    </section>
  );
}
```

### Cenário 4: Obter Idioma Atual

```tsx
'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function MyComponent() {
  const { locale, setLocale, t } = useLanguage();
  
  return (
    <div>
      <p>Idioma atual: {locale}</p>
      
      {locale === 'pt' && <p>Você está vendo em Português</p>}
      {locale === 'en' && <p>You are viewing in English</p>}
      {locale === 'es' && <p>Estás viendo en Español</p>}
      
      <button onClick={() => setLocale('en')}>
        Change to English
      </button>
    </div>
  );
}
```

### Cenário 5: Formulário com i18n

```tsx
'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function ContactForm() {
  const { t } = useLanguage();
  
  return (
    <form>
      <input 
        type="text" 
        placeholder={t.contact.form.companyName}
        name="company"
      />
      
      <input 
        type="text" 
        placeholder={t.contact.form.yourName}
        name="name"
      />
      
      <input 
        type="email" 
        placeholder={t.contact.form.yourEmail}
        name="email"
      />
      
      <select name="service">
        <option value="">{t.contact.form.serviceType}</option>
        <option>{t.services.categories.structural}</option>
        <option>{t.services.categories.ships}</option>
        <option>{t.services.categories.survey}</option>
      </select>
      
      <button type="submit">
        {t.contact.form.submit}
      </button>
    </form>
  );
}
```

---

## 🔍 Chaves de Tradução Disponíveis

### Navegação (`t.nav`)
```typescript
t.nav.aboutUs       // "SOBRE NÓS" / "ABOUT US" / "SOBRE NOSOTROS"
t.nav.services      // "Serviços" / "Services" / "Servicios"
t.nav.contactUs     // "Fale Conosco" / "Contact Us" / "Contáctenos"
t.nav.clients       // "CLIENTES" / "CLIENTS" / "CLIENTES"
t.nav.partners      // "PARCEIROS" / "PARTNERS" / "SOCIOS"
t.nav.gallery       // "GALERIA" / "GALLERY" / "GALERÍA"
```

### Hero (`t.hero`)
```typescript
t.hero.title        // "Atlântico"
t.hero.subtitle     // "Serviços Técnicos Submarinos" / "Underwater Technical Services" / "Servicios Técnicos Submarinos"
```

### Serviços (`t.services`)
```typescript
t.services.title                  // "Nossos Serviços" / "Our Services" / "Nuestros Servicios"
t.services.categories.structural  // "Recuperação Estrutural" / "Structural Recovery" / "Recuperación Estructural"
t.services.categories.ships       // "Navios e Plataformas" / "Ships and Platforms" / "Buques y Plataformas"
t.services.categories.survey      // "Levantamento e Registro" / "Survey and Recording" / "Levantamiento y Registro"
t.services.categories.hydroelectric // "Hidroelétricas e Barragens" / "Hydroelectric Plants and Dams" / "Hidroeléctricas y Represas"
t.services.categories.inspection  // "Inspeção e Vistoria" / "Inspection and Survey" / "Inspección y Revisión"
t.services.categories.dredging    // "Dragagem e Sondagem" / "Dredging and Sounding" / "Dragado y Sondeo"
t.services.categories.rescue      // "Resgate e Salvatagem" / "Rescue and Salvage" / "Rescate y Salvamento"
t.services.categories.diving      // "Mergulho Especializado" / "Specialized Diving" / "Buceo Especializado"
t.services.categories.pipelines   // "Dutos e Cabos Submarinos" / "Underwater Pipelines and Cables" / "Ductos y Cables Submarinos"
t.services.categories.water       // "Tratamento de Água" / "Water Treatment" / "Tratamiento de Agua"
```

### Sobre (`t.about`)
```typescript
t.about.title       // "Sobre Nós" / "About Us" / "Sobre Nosotros"
t.about.paragraph1  // Primeiro parágrafo
t.about.paragraph2  // Segundo parágrafo
t.about.paragraph3  // Terceiro parágrafo
```

### Clientes (`t.clients`)
```typescript
t.clients.title     // "Nossos Clientes" / "Our Clients" / "Nuestros Clientes"
```

### Parceiros (`t.partners`)
```typescript
t.partners.title    // "Parceiros" / "Partners" / "Socios"
```

### Galeria (`t.gallery`)
```typescript
t.gallery.title     // "Galeria" / "Gallery" / "Galería"
```

### Contato (`t.contact`)
```typescript
t.contact.title                    // "Fale Conosco" / "Contact Us" / "Contáctenos"
t.contact.form.companyName        // "NOME DA EMPRESA" / "COMPANY NAME" / "NOMBRE DE LA EMPRESA"
t.contact.form.yourName           // "SEU NOME" / "YOUR NAME" / "SU NOMBRE"
t.contact.form.companySite        // "SITE DA EMPRESA" / "COMPANY WEBSITE" / "SITIO WEB DE LA EMPRESA"
t.contact.form.yourEmail          // "SEU EMAIL" / "YOUR EMAIL" / "SU CORREO ELECTRÓNICO"
t.contact.form.state              // "ESTADO" / "STATE" / "ESTADO"
t.contact.form.states.sp          // "São Paulo"
t.contact.form.states.rj          // "Rio de Janeiro"
t.contact.form.states.es          // "Espírito Santo"
t.contact.form.states.pr          // "Paraná"
t.contact.form.states.sc          // "Santa Catarina"
t.contact.form.states.others      // "Outros" / "Others" / "Otros"
t.contact.form.phone              // "SEU CELULAR" / "YOUR PHONE" / "SU TELÉFONO"
t.contact.form.city               // "CIDADE" / "CITY" / "CIUDAD"
t.contact.form.serviceType        // "TIPO DE SERVIÇO" / "SERVICE TYPE" / "TIPO DE SERVICIO"
t.contact.form.others             // "Outros" / "Others" / "Otros"
t.contact.form.submit             // "ENVIAR" / "SUBMIT" / "ENVIAR"
```

### Footer (`t.footer`)
```typescript
t.footer.address      // "Rua Bittencourt, 25" / "Bittencourt Street, 25" / "Calle Bittencourt, 25"
t.footer.addressLine2 // "Vila Nova - Santos/SP"
t.footer.copyright    // "© 2026 Atlântico Serviços Técnicos Submarinos. Todos os direitos reservados."
```

---

## 💡 Dicas e Truques

### 1. Interpolação de Variáveis
Se precisar incluir variáveis nas traduções:

```tsx
const { t, locale } = useLanguage();
const userName = "João";

// Crie a string manualmente
const greeting = locale === 'pt' ? `Olá, ${userName}!` 
  : locale === 'en' ? `Hello, ${userName}!`
  : `¡Hola, ${userName}!`;
```

### 2. Pluralização Simples
```tsx
const { t, locale } = useLanguage();
const count = 5;

const itemsText = count === 1 
  ? (locale === 'pt' ? 'item' : locale === 'en' ? 'item' : 'ítem')
  : (locale === 'pt' ? 'itens' : locale === 'en' ? 'items' : 'ítems');

// Resultado: "5 itens" / "5 items" / "5 ítems"
```

### 3. Formatação de Datas
```tsx
const { locale } = useLanguage();
const date = new Date();

const formattedDate = date.toLocaleDateString(
  locale === 'pt' ? 'pt-BR' : locale === 'en' ? 'en-US' : 'es-ES'
);
```

### 4. Debug do Idioma Atual
```tsx
const { locale, t } = useLanguage();

console.log('Current locale:', locale);
console.log('All translations:', t);
```

---

## ❓ Perguntas Frequentes

**Q: O idioma persiste entre páginas?**  
A: Sim! O idioma é salvo no localStorage e mantido em toda navegação.

**Q: Como mudar o idioma padrão?**  
A: Edite `app/i18n/locales.ts` e mude `defaultLocale`:
```typescript
export const defaultLocale: Locale = 'en'; // era 'pt'
```

**Q: Posso usar i18n em componentes server-side?**  
A: Não. Use `'use client'` nos componentes que usam `useLanguage()`.

**Q: Como adicionar um quarto idioma (ex: Francês)?**  
A: Veja a seção "Adicionando um Novo Idioma" em `INTERNATIONALIZATION.md`.

**Q: As imagens mudam com o idioma?**  
A: Não automaticamente. Você precisa implementar isso manualmente se necessário.

---

## 🎯 Próximos Passos

1. ✅ Teste o seletor em `/exemplo-i18n`
2. ✅ Atualize suas páginas existentes
3. ✅ Adicione traduções conforme necessário
4. ✅ Compartilhe com sua equipe

**Documentação completa:** `INTERNATIONALIZATION.md`  
**Guia rápido:** `I18N-README.md`  
**Resumo técnico:** `IMPLEMENTACAO-I18N-RESUMO.md`
