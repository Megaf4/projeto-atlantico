# 📸 Como Adicionar a Imagem Hero

## ✅ O Que Foi Feito

Atualizei o código da homepage para usar a nova imagem de salvamento.

**Alteração no código:**
```tsx
// ANTES:
<img src="/images/hero-mergulhador.jpg" alt="Mergulhador" ... />

// DEPOIS:
<img src="/images/hero-salvamento.jpg" alt="Salvamento Marítimo Atlântico" ... />
```

## 📋 O Que Você Precisa Fazer

### Passo 1: Salvar a Imagem

Salve a imagem que você enviou (do guindaste com o barco) com o nome:
```
hero-salvamento.jpg
```

### Passo 2: Colocar na Pasta Correta

Cole a imagem na pasta:
```
public/images/hero-salvamento.jpg
```

Caminho completo:
```
C:\Users\henri\projeto-atlantico\public\images\hero-salvamento.jpg
```

### Passo 3: Verificar

Acesse a homepage:
```
http://localhost:3000/
```

A nova imagem deve aparecer no fundo da seção hero (tela inicial).

## 🎯 Estrutura de Pastas

```
projeto-atlantico/
├── public/
│   └── images/
│       ├── hero-mergulhador.jpg  (antiga)
│       ├── hero-salvamento.jpg   ← NOVA! (coloque aqui)
│       ├── logo-atlatico-vector.png
│       └── logo-top.png
└── app/
    └── page.tsx (já atualizado ✅)
```

## 🔍 Verificação

### Se a imagem NÃO aparecer:

1. **Verifique o caminho:**
   - Deve estar em: `public/images/hero-salvamento.jpg`
   - NÃO em: `public/hero-salvamento.jpg`
   - NÃO em: `images/hero-salvamento.jpg`

2. **Verifique o nome:**
   - Exatamente: `hero-salvamento.jpg`
   - NÃO: `Hero-Salvamento.jpg`
   - NÃO: `hero_salvamento.jpg`
   - NÃO: `hero salvamento.jpg`

3. **Reinicie o servidor:**
   ```bash
   # Pare (Ctrl+C)
   # Inicie novamente
   npm run dev
   ```

4. **Limpe o cache do navegador:**
   - Ctrl + Shift + R (Windows)
   - Cmd + Shift + R (Mac)

## 📸 Formatos Aceitos

- ✅ `.jpg` ou `.jpeg`
- ✅ `.png`
- ✅ `.webp`

**Recomendação:** Use `.jpg` para fotos (menor tamanho)

## 🎨 Otimização (Opcional)

Se a imagem estiver muito pesada, você pode otimizar:

1. **Tamanho recomendado:** 1920x1080 pixels
2. **Qualidade:** 80-85%
3. **Formato:** JPG

Ferramentas online:
- https://tinyjpg.com/
- https://squoosh.app/

## ✅ Checklist

- [ ] Imagem salva como `hero-salvamento.jpg`
- [ ] Colocada em `public/images/`
- [ ] Servidor reiniciado
- [ ] Cache do navegador limpo
- [ ] Acesse `http://localhost:3000/`
- [ ] Imagem aparece no fundo da homepage

## 🎉 Pronto!

Quando fizer isso, a imagem do guindaste com o barco aparecerá como fundo da homepage!

---

**Arquivo já atualizado:** ✅ `app/page.tsx`  
**Aguardando:** Você adicionar a imagem na pasta `public/images/`
