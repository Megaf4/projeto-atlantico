# 🚀 Deploy no Vercel - Projeto Atlântico

## ✅ Correções Aplicadas

### Problema Original
As imagens não apareciam no Vercel porque o código usava uma API route (`/api/image`) que dependia do módulo `fs` (file system), que **não funciona em ambientes serverless** como o Vercel.

### Solução Implementada

1. **Removida a API route** `/app/api/image/route.ts`
2. **Alterado para caminhos diretos** das imagens na pasta `public/images/`
3. **Adicionada codificação de URL** para caracteres especiais
4. **Criado `vercel.json`** com configurações de cache

## 📁 Estrutura de Imagens

```
public/
├── images/           # 437 imagens otimizadas (36 MB)
│   ├── 4S ENGENHARIA/
│   ├── AGEO/
│   ├── ALIANÇA ENERGIA/
│   └── ... (131 empresas)
├── parceiros/        # 16 logos de parceiros
└── data/
    └── gallery-data.json  # Dados da galeria
```

## 🔧 Como o Vercel Serve as Imagens

No Vercel, arquivos na pasta `public/` são servidos **automaticamente** como arquivos estáticos:

- Caminho no código: `/images/AGEO/DSC05015.JPG`
- URL final: `https://seu-dominio.vercel.app/images/AGEO/DSC05015.JPG`

## ⚙️ Configurações do Vercel

O arquivo `vercel.json` foi criado com:

```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

Isso garante:
- URLs limpas sem `.html`
- Cache de 1 ano para imagens (melhor performance)
- Redução de custos de bandwidth

## 🚀 Passos para Deploy

### 1. Conectar ao Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub
3. Clique em "Add New Project"
4. Selecione o repositório: `Megaf4/projeto-atlantico`

### 2. Configurações do Deploy

- **Framework Preset**: Next.js
- **Root Directory**: `./`
- **Build Command**: `npm run build` (automático)
- **Output Directory**: `.next` (automático)
- **Install Command**: `npm install` (automático)

### 3. Deploy

- Clique em "Deploy"
- Aguarde 2-3 minutos
- O Vercel irá:
  1. Instalar dependências
  2. Build da aplicação Next.js
  3. Upload das imagens estáticas
  4. Deploy completo

### 4. Verificar

Após o deploy, acesse:
- **Página inicial**: `https://seu-projeto.vercel.app`
- **Sobre Nós** (galeria): `https://seu-projeto.vercel.app/sobre-nos`
- **Teste de imagem**: `https://seu-projeto.vercel.app/images/logo-top.png`

## 🔍 Debug de Problemas

### Se as imagens ainda não aparecerem:

1. **Verificar Console do Navegador**
   - Abra DevTools (F12)
   - Vá para aba "Console"
   - Procure erros 404 nas imagens

2. **Verificar Network**
   - Aba "Network" no DevTools
   - Filtrar por "Img"
   - Ver quais URLs estão falhando

3. **Verificar Estrutura no Vercel**
   - No dashboard do Vercel, vá em "Storage"
   - Verifique se a pasta `public/images/` foi upada

### Possíveis Problemas:

#### Problema 1: Caracteres Especiais
Alguns nomes de arquivos têm acentos:
- `ALIANÇA ENERGIA/` (Ç)
- `à(s)` em alguns arquivos

**Solução**: O código já codifica URLs automaticamente com `encodeURIComponent()`

#### Problema 2: Build muito grande
Se o build exceder 50 MB (limite gratuito do Vercel):

**Solução**: 
- Upgrade para Vercel Pro ($20/mês)
- Ou mover imagens para CDN externa (Cloudinary)

#### Problema 3: Timeout no Build
Se o build demorar mais de 45 segundos (limite gratuito):

**Solução**: 
- Já resolvido: imagens otimizadas de 627 MB → 36 MB
- Build deve levar ~30 segundos

## 📊 Tamanhos

- **Código**: ~5 MB
- **Imagens**: 36 MB (otimizadas 94%)
- **Total Deploy**: ~41 MB
- **Tempo de Build**: ~30 segundos

## 🎯 Próximos Passos

### Opcional: Domínio Personalizado

1. No Vercel Dashboard
2. Vá em "Settings" > "Domains"
3. Adicione: `www.atlantico.com.br`
4. Configure DNS conforme instruções

### Opcional: Analytics

1. Ative Vercel Analytics (grátis)
2. Dashboard em tempo real
3. Web Vitals automáticos

### Opcional: CDN para Imagens

Se quiser reduzir custos e melhorar performance:

1. Criar conta no [Cloudinary](https://cloudinary.com) (grátis)
2. Upload das 437 imagens
3. Atualizar `gallery-data.json` com URLs do Cloudinary
4. Remover pasta `public/images/` do Git

## 📞 Suporte

Se tiver problemas:
1. Verifique os logs do deploy no Vercel
2. Confira o console do navegador
3. Teste URLs de imagens diretamente

## ✅ Checklist de Deploy

- [x] Imagens otimizadas (36 MB)
- [x] API route removida
- [x] Caminhos diretos implementados
- [x] Codificação de URL para caracteres especiais
- [x] `vercel.json` configurado
- [x] Push para GitHub
- [ ] Deploy no Vercel
- [ ] Testar galeria
- [ ] Testar todas as páginas
- [ ] Configurar domínio (opcional)

---

**Última atualização**: Janeiro 2025
**Versão Next.js**: 16.2.10
**Node.js**: >=18.17.0
