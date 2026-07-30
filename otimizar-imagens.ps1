# Script de Otimização de Imagens para Windows
# Reduz o tamanho das imagens mantendo qualidade visual

param(
    [string]$Pasta = "public\images",
    [string]$PastaBackup = "public\images_backup",
    [int]$LarguraMax = 1920,
    [int]$AlturaMax = 1080,
    [int]$Qualidade = 85
)

Write-Host "🖼️  OTIMIZADOR DE IMAGENS PARA GIT" -ForegroundColor Cyan
Write-Host "═══════════════════════════════════════════════════" -ForegroundColor Gray
Write-Host ""

# Verificar se a pasta existe
if (-not (Test-Path $Pasta)) {
    Write-Host "❌ Pasta não encontrada: $Pasta" -ForegroundColor Red
    exit
}

Write-Host "📊 Configurações:" -ForegroundColor Yellow
Write-Host "  Pasta: $Pasta"
Write-Host "  Largura máxima: ${LarguraMax}px"
Write-Host "  Altura máxima: ${AlturaMax}px"
Write-Host "  Qualidade JPEG: $Qualidade%"
Write-Host ""

# Calcular tamanho inicial
$imagensAntes = Get-ChildItem $Pasta -Recurse -File -Include *.jpg,*.jpeg,*.png,*.JPG,*.JPEG,*.PNG
$tamanhoAntes = ($imagensAntes | Measure-Object -Property Length -Sum).Sum
$tamanhoAntesMB = [math]::Round($tamanhoAntes / 1MB, 2)

Write-Host "📦 Tamanho atual: $tamanhoAntesMB MB" -ForegroundColor Yellow
Write-Host "   Total de imagens: $($imagensAntes.Count)"
Write-Host ""

# Perguntar confirmação
Write-Host "⚠️  ATENÇÃO: Este script irá:" -ForegroundColor Yellow
Write-Host "   1. Criar backup em: $PastaBackup"
Write-Host "   2. Redimensionar imagens grandes"
Write-Host "   3. Comprimir JPEGs"
Write-Host ""
$confirmacao = Read-Host "Deseja continuar? (S/N)"

if ($confirmacao -ne "S" -and $confirmacao -ne "s") {
    Write-Host "❌ Operação cancelada" -ForegroundColor Red
    exit
}

# Criar backup
Write-Host ""
Write-Host "💾 Criando backup..." -ForegroundColor Cyan
if (Test-Path $PastaBackup) {
    Write-Host "   Removendo backup antigo..."
    Remove-Item $PastaBackup -Recurse -Force
}
Copy-Item $Pasta $PastaBackup -Recurse
Write-Host "   ✅ Backup criado em: $PastaBackup" -ForegroundColor Green

Write-Host ""
Write-Host "🔄 Otimizando imagens..." -ForegroundColor Cyan
Write-Host ""

# Carregar System.Drawing
Add-Type -AssemblyName System.Drawing

$processadas = 0
$erros = 0
$economiaTotal = 0

foreach ($arquivo in $imagensAntes) {
    try {
        $tamanhoOriginal = $arquivo.Length
        
        # Carregar imagem
        $img = [System.Drawing.Image]::FromFile($arquivo.FullName)
        
        # Verificar se precisa redimensionar
        $novaLargura = $img.Width
        $novaAltura = $img.Height
        
        if ($img.Width -gt $LarguraMax -or $img.Height -gt $AlturaMax) {
            $ratio = [Math]::Min($LarguraMax / $img.Width, $AlturaMax / $img.Height)
            $novaLargura = [int]($img.Width * $ratio)
            $novaAltura = [int]($img.Height * $ratio)
        }
        
        # Criar nova imagem redimensionada
        $novaBitmap = New-Object System.Drawing.Bitmap($novaLargura, $novaAltura)
        $graphics = [System.Drawing.Graphics]::FromImage($novaBitmap)
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.DrawImage($img, 0, 0, $novaLargura, $novaAltura)
        
        # Salvar com compressão
        $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $Qualidade)
        
        # Salvar
        $img.Dispose()
        $graphics.Dispose()
        
        # Converter para JPEG se for PNG grande
        $caminhoSaida = $arquivo.FullName
        if ($arquivo.Extension -match "\.png" -and $tamanhoOriginal -gt 500KB) {
            $caminhoSaida = $caminhoSaida -replace "\.png$", ".jpg"
        }
        
        $novaBitmap.Save($caminhoSaida, $encoder, $encoderParams)
        $novaBitmap.Dispose()
        
        # Calcular economia
        $novoTamanho = (Get-Item $caminhoSaida).Length
        $economia = $tamanhoOriginal - $novoTamanho
        $economiaTotal += $economia
        
        $processadas++
        
        if ($processadas % 50 -eq 0) {
            Write-Host "   Processadas: $processadas / $($imagensAntes.Count)" -ForegroundColor Gray
        }
        
    } catch {
        Write-Host "   ❌ Erro: $($arquivo.Name) - $($_.Exception.Message)" -ForegroundColor Red
        $erros++
    }
}

# Calcular tamanho final
$imagensDepois = Get-ChildItem $Pasta -Recurse -File -Include *.jpg,*.jpeg,*.png,*.JPG,*.JPEG,*.PNG
$tamanhoDepois = ($imagensDepois | Measure-Object -Property Length -Sum).Sum
$tamanhoDepoisMB = [math]::Round($tamanhoDepois / 1MB, 2)

$reducao = [math]::Round((($tamanhoAntes - $tamanhoDepois) / $tamanhoAntes) * 100, 2)

Write-Host ""
Write-Host "✅ OTIMIZAÇÃO CONCLUÍDA!" -ForegroundColor Green
Write-Host ""
Write-Host "📊 Resultados:" -ForegroundColor Cyan
Write-Host "   Antes:  $tamanhoAntesMB MB"
Write-Host "   Depois: $tamanhoDepoisMB MB"
Write-Host "   Redução: $reducao%"
Write-Host ""
Write-Host "   Imagens processadas: $processadas"
Write-Host "   Erros: $erros"
Write-Host ""
Write-Host "💾 Backup disponível em: $PastaBackup" -ForegroundColor Yellow
Write-Host ""

if ($tamanhoDepoisMB -lt 100) {
    Write-Host "✅ Tamanho OK para Git! ($tamanhoDepoisMB MB)" -ForegroundColor Green
    Write-Host ""
    Write-Host "Próximos passos:"
    Write-Host "  1. Remover imagens do .gitignore"
    Write-Host "  2. git add public/images"
    Write-Host "  3. git commit -m 'feat: adiciona imagens otimizadas'"
    Write-Host "  4. git push"
} else {
    Write-Host "⚠️  Ainda muito grande para Git ($tamanhoDepoisMB MB)" -ForegroundColor Yellow
    Write-Host "   Considere usar Git LFS ou CDN"
}
