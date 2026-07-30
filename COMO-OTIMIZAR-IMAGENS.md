# 🖼️ Como Otimizar Imagens para Git

## 📊 Situação Atual

- **Tamanho das imagens:** ~2 GB
- **Problema:** GitHub limita repositórios a ~1-2 GB
- **Solução:** Otimizar imagens para reduzir tamanho

## 🚀 Opções Disponíveis

### ✅ Opção 1: Script PowerShell (MAIS FÁCIL)

Criado 2 scripts prontos para você:

#### Script Simples (Recomendado):
```powershell
.\otimizar-simples.ps1
```

**O que faz:**
- ✅ Cria backup automático
- ✅ Redimensiona imagens > 1920px
- ✅ Comprime JPEGs (85% quality)
- ✅ Converte PNGs grandes para JPEG
- ✅ **Redução esperada: 60-75%**

#### Script Completo (Mais opções):
```powershell
.\otimizar-imagens.ps1
```

**Opções customizáveis:**
```powershell
# Customizar tamanho e qualidade
.\otimizar-imagens.ps1 -LarguraMax 1280 -AlturaMax 720 -Qualidade 75
```

---

### ✅ Opção 2: Usar Ferramentas Online

Se preferir não usar scripts:

1. **TinyPNG** (https://tinypng.com)
   - Upload de até 20 imagens por vez
   - Compressão automática
   - Redução: 50-70%

2. **Squoosh** (https://squoosh.app)
   - Compressão avançada
   - Conversão para WebP
   - Redução: 70-90%

3. **ImageOptim** (Windows: https://imageoptim.com)
   - Arraste pastas inteiras
   - Otimização em massa
   - Redução: 40-60%

---

### ✅ Opção 3: Git LFS (Git Large File Storage)

Para manter qualidade máxima mas gerenciar arquivos grandes:

```bash
# 1. Instalar Git LFS
# Download: https://git-lfs.github.com/

# 2. Inicializar no repositório
git lfs install

# 3. Rastrear imagens
git lfs track "public/images/**/*.jpg"
git lfs track "public/images/**/*.jpeg"
git lfs track "public/images/**/*.png"

# 4. Adicionar configuração
git add .gitattributes

# 5. Commit normal
git add public/images
git commit -m "feat: adiciona imagens com Git LFS"
git push
```

**Vantagens:**
- ✅ Mantém qualidade original
- ✅ Repositório Git permanece leve
- ✅ Arquivos grandes ficam em storage separado

**Desvantagens:**
- ⚠️ Limite de 1GB grátis/mês no GitHub
- ⚠️ Precisa instalar Git LFS

---

### ✅ Opção 4: CDN Externa (MELHOR PARA PRODUÇÃO)

Não colocar imagens no Git e usar serviço de CDN:

**Cloudinary** (Recomendado):
- 25 GB grátis
- Otimização automática
- URLs permanentes
- Resize on-the-fly

**Como usar:**
```javascript
// Ao invés de:
<img src="/images/empresa/foto.jpg" />

// Usar:
<img src="https://res.cloudinary.com/seu-cloud/empresa/foto.jpg" />
```

**Outras opções:**
- **ImgBB** (grátis)
- **Imgur** (grátis)
- **AWS S3 + CloudFront**
- **Vercel Blob Storage**

---

## 🎯 Passo a Passo Recomendado

### Se quer MANTER imagens no Git:

```powershell
# 1. Executar otimização
.\otimizar-simples.ps1

# 2. Verificar tamanho após otimização
# Se < 100 MB:

# 3. Remover do .gitignore
# Edite .gitignore e comente/remova:
# /public/images/

# 4. Adicionar ao Git
git add public/images

# 5. Commit
git commit -m "feat: adiciona imagens otimizadas"

# 6. Push
git push
```

### Se quer usar CDN (Recomendado):

1. Criar conta no Cloudinary (grátis)
2. Upload das imagens
3. Atualizar `gallery-data.json` com novas URLs
4. Remover pasta `public/images` local
5. Push apenas do código

---

## 📊 Comparação de Tamanhos

| Método | Tamanho Final | Qualidade | Facilidade |
|--------|---------------|-----------|------------|
| Original | 2.0 GB | 100% | - |
| Script Simples | ~500 MB | 90% | ⭐⭐⭐⭐⭐ |
| WebP Conversion | ~300 MB | 95% | ⭐⭐⭐ |
| Git LFS | 2.0 GB* | 100% | ⭐⭐⭐⭐ |
| CDN | 0 MB** | 100% | ⭐⭐⭐⭐ |

\* Tamanho real, mas Git fica leve  
\** Imagens ficam fora do repositório

---

## ⚠️ Importante

**Sempre faça backup antes de otimizar!**

Os scripts criam backup automaticamente em `public/images_backup`

Se algo der errado:
```powershell
# Restaurar backup
Remove-Item public\images -Recurse -Force
Rename-Item public\images_backup public\images
```

---

## 🆘 Ajuda

**Script não executa?**
```powershell
# Permitir execução de scripts
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

**Imagens ainda muito grandes?**
- Tente qualidade 75% ao invés de 85%
- Redimensione para 1280x720
- Use WebP ao invés de JPEG
- Considere Git LFS ou CDN

**Dúvidas?**
- Leia este arquivo completo
- Teste com poucas imagens primeiro
- Mantenha sempre um backup
