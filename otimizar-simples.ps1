# Otimizador Simples de Imagens
# Usa PowerShell nativo - nao precisa instalar nada

Write-Host "OTIMIZADOR RAPIDO DE IMAGENS" -ForegroundColor Cyan
Write-Host ""

$pasta = "public\images"

# Tamanho antes
$antes = Get-ChildItem $pasta -Recurse -File -Include *.jpg,*.jpeg,*.png,*.JPG,*.JPEG,*.PNG
$tamanhoAntes = ($antes | Measure-Object -Property Length -Sum).Sum / 1MB

Write-Host "Tamanho atual: $([math]::Round($tamanhoAntes, 2)) MB"
Write-Host "Total: $($antes.Count) imagens"
Write-Host ""

Write-Host "ESTE SCRIPT VAI:" -ForegroundColor Yellow
Write-Host "  - Criar backup em public\images_backup"
Write-Host "  - Redimensionar imagens > 1920px"
Write-Host "  - Comprimir JPEGs (85% quality)"
Write-Host "  - Converter PNGs grandes para JPEG"
Write-Host ""

$conf = Read-Host "Continuar? (S/N)"
if ($conf -ne "S") { exit }

# Backup
Write-Host ""
Write-Host "Criando backup..."
if (Test-Path "public\images_backup") {
    Remove-Item "public\images_backup" -Recurse -Force
}
Copy-Item $pasta "public\images_backup" -Recurse
Write-Host "Backup criado em public\images_backup" -ForegroundColor Green

Write-Host ""
Write-Host "Processando imagens..."
Add-Type -AssemblyName System.Drawing

$count = 0
foreach ($arq in $antes) {
    try {
        $img = [System.Drawing.Image]::FromFile($arq.FullName)
        $largMax = 1920
        $altMax = 1080
        
        $novLarg = $img.Width
        $novAlt = $img.Height
        
        if ($img.Width -gt $largMax -or $img.Height -gt $altMax) {
            $ratio = [Math]::Min($largMax / $img.Width, $altMax / $img.Height)
            $novLarg = [int]($img.Width * $ratio)
            $novAlt = [int]($img.Height * $ratio)
            
            $novo = New-Object System.Drawing.Bitmap($novLarg, $novAlt)
            $g = [System.Drawing.Graphics]::FromImage($novo)
            $g.InterpolationMode = 2
            $g.DrawImage($img, 0, 0, $novLarg, $novAlt)
            
            $enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
            $params = New-Object System.Drawing.Imaging.EncoderParameters(1)
            $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 85)
            
            $img.Dispose()
            $g.Dispose()
            
            $saida = $arq.FullName -replace "\.png$", ".jpg"
            $novo.Save($saida, $enc, $params)
            $novo.Dispose()
            
            if ($arq.FullName -ne $saida) {
                Remove-Item $arq.FullName -Force
            }
        }
        
        $count++
        if ($count % 100 -eq 0) {
            Write-Host "  $count/$($antes.Count)..." -ForegroundColor Gray
        }
        
    } catch {
        Write-Host "  Erro: $($arq.Name)" -ForegroundColor Red
    }
}

# Resultado
$depois = Get-ChildItem $pasta -Recurse -File -Include *.jpg,*.jpeg,*.png,*.JPG,*.JPEG,*.PNG
$tamanhoDepois = ($depois | Measure-Object -Property Length -Sum).Sum / 1MB
$reducao = [math]::Round((1 - ($tamanhoDepois / $tamanhoAntes)) * 100, 2)

Write-Host ""
Write-Host "CONCLUIDO!" -ForegroundColor Green
Write-Host ""
Write-Host "Antes:  $([math]::Round($tamanhoAntes, 2)) MB"
Write-Host "Depois: $([math]::Round($tamanhoDepois, 2)) MB"
Write-Host "Economia: $reducao%"
Write-Host ""

if ($tamanhoDepois -lt 100) {
    Write-Host "Pronto para Git! Menos de 100MB" -ForegroundColor Green
} else {
    Write-Host "Ainda grande. Considere Git LFS ou CDN" -ForegroundColor Yellow
}
