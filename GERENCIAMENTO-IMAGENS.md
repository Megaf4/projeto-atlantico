# 📸 Gerenciamento de Imagens do Projeto

## ⚠️ Problema Resolvido

As imagens da galeria (~2GB) foram **removidas do Git** e adicionadas ao `.gitignore`.

## 🎯 Por que não colocar imagens no Git?

1. **Tamanho**: 2GB+ de imagens tornam o repositório muito pesado
2. **Lentidão**: Clones e pulls ficam extremamente lentos
3. **Custos**: GitHub/GitLab têm limites de tamanho
4. **Desnecessário**: Imagens não precisam de controle de versão como código

## ✅ Solução Implementada

### Arquivos no Git:
- ✅ Código-fonte (.tsx, .ts, .js, .css)
- ✅ Configurações (package.json, next.config.ts, etc.)
- ✅ Dados estruturados (gallery-data.json)
- ❌ Imagens grandes (public/images/, public/parceiros/)

### .gitignore atualizado:
```
# imagens grandes (não fazer commit - usar CDN ou storage externo)
/public/images/
/public/parceiros/
```

## 🚀 Como fazer deploy das imagens?

### Opção 1: Upload Manual ao Servidor (Recomendado para agora)
1. Fazer push apenas do código: `git push`
2. No servidor de produção, fazer upload das pastas:
   - `public/images/`
   - `public/parceiros/`
3. Pode usar FTP, SCP, ou painel de hospedagem

### Opção 2: CDN / Cloud Storage (Ideal para produção)
Para um site profissional, considere usar:
- **Cloudinary** (grátis até 25GB)
- **AWS S3 + CloudFront**
- **Vercel Blob Storage**
- **Firebase Storage**

### Opção 3: Git LFS (Git Large File Storage)
Se realmente precisa versionar as imagens:
```bash
# Instalar Git LFS
git lfs install

# Rastrear imagens
git lfs track "public/images/**"
git lfs track "public/parceiros/**"

# Commit e push
git add .gitattributes
git commit -m "feat: adiciona Git LFS para imagens"
git push
```

## 📋 Comandos para fazer push agora:

```bash
# 1. Adicionar mudanças (sem imagens)
git add .

# 2. Commit
git commit -m "feat: galeria completa com API route e 131 empresas"

# 3. Push (agora vai funcionar - sem 2GB de imagens)
git push
```

## 🔍 Verificar o que será commitado:

```bash
# Ver arquivos que serão incluídos
git status

# Verificar tamanho do commit
git count-objects -vH
```

## 📦 Backup das Imagens

**IMPORTANTE:** Faça backup das pastas localmente:
- `public/images/` (2GB+)
- `public/parceiros/` (pequeno)

Mantenha uma cópia em:
- ☁️ Google Drive / OneDrive
- 💾 HD externo
- 🖥️ Servidor de produção

## 🛠️ Para novos desenvolvedores

Quando outro dev clonar o projeto:
1. Clone do Git (apenas código)
2. Peça as pastas de imagens separadamente
3. Coloque em `public/images/` e `public/parceiros/`
4. Rode `npm install` e `npm run dev`

## 📊 Estatísticas do Projeto

- **Código-fonte:** ~5-10 MB
- **Imagens:** ~2 GB (NÃO no Git)
- **node_modules:** ~400 MB (NÃO no Git)
- **Total no Git:** ~5-10 MB ✅

---

## ✅ Status Atual

- ✅ Imagens removidas do Git
- ✅ .gitignore atualizado
- ✅ Projeto pronto para push
- ✅ Galeria funcionando localmente
