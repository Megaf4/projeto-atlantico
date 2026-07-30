# Otimizador Agressivo - Segunda passagem
# Comprime ainda mais para caber no Git

Write-Host "OTIMIZADOR AGRESSIVO" -ForegroundColor Cyan
Write-Host ""

$pasta = "public\images"

# Tamanho antes
$antes = Get-ChildItem $pasta -Recurse -File -Include *.jpg,*.jpeg,*.JPG,*.JPEG
$tamanhoAntes = ($antes | Measure-Object -Property Length -Sum).Sum / 1MB

Write-Host "Tamanho atual: $([math]::Round($tamanhoAntes, 2)) MB"
Write-Host "Total: $($antes.Count) imagens"
Write-Host ""

Write-Host "ESTE SCRIPT VAI:" -ForegroundColor Yellow
Write-Host "  - Reduzir qualidade para 70%"
Write-Host "  - Redimensionar para max 1280x720"
Write-Host ""

$conf = Read-Host "Continuar? (S/N)"
if ($conf -ne "S") { exit }

Write-Host ""
Write-Host "Processando..."
Add-Type -AssemblyName System.Drawing

$count = 0
foreach ($arq in $antes) {
    try {
        $img = [System.Drawing.Image]::FromFile($arq.FullName)
        $largMax = 1280
        $altMax = 720
        
        $novLarg = $img.Width
        $novAlt = $img.Height
        
        $precisaRedimensionar = $false
        if ($img.Width -gt $largMax -or $img.Height -gt $altMax) {
            $ratio = [Math]::Min($largMax / $img.Width, $altMax / $img.Height)
            $novLarg = [int]($img.Width * $ratio)
            $novAlt = [int]($img.Height * $ratio)
            $precisaRedimensionar = $true
        }
        
        if ($precisaRedimensionar) {
            $novo = New-Object System.Drawing.Bitmap($novLarg, $novAlt)
            $g = [System.Drawing.Graphics]::FromImage($novo)
            $g.InterpolationMode = 2
            $g.DrawImage($img, 0, 0, $novLarg, $novAlt)
            $g.Dispose()
            
            $enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
            $params = New-Object System.Drawing.Imaging.EncoderParameters(1)
            $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 70)
            
            $img.Dispose()
            $novo.Save($arq.FullName, $enc, $params)
            $novo.Dispose()
        } else {
            # Recomprimir com qualidade menor
            $temp = [System.Drawing.Image]::FromFile($arq.FullName)
            $img.Dispose()
            
            $enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
            $params = New-Object System.Drawing.Imaging.EncoderParameters(1)
            $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 70)
            
            $temp.Save($arq.FullName, $enc, $params)
            $temp.Dispose()
        }
        
        $count++
        if ($count % 50 -eq 0) {
            Write-Host "  $count/$($antes.Count)..." -ForegroundColor Gray
        }
        
    } catch {
        Write-Host "  Erro: $($arq.Name)" -ForegroundColor Red
    }
}

# Resultado
$depois = Get-ChildItem $pasta -Recurse -File -Include *.jpg,*.jpeg,*.JPG,*.JPEG
$tamanhoDepois = ($depois | Measure-Object -Property Length -Sum).Sum / 1MB
$reducao = [math]::Round((1 - ($tamanhoDepois / $tamanhoAntes)) * 100, 2)

Write-Host ""
Write-Host "CONCLUIDO!" -ForegroundColor Green
Write-Host ""
Write-Host "Antes:  $([math]::Round($tamanhoAntes, 2)) MB"
Write-Host "Depois: $([math]::Round($tamanhoDepois, 2)) MB"
Write-Host "Economia adicional: $reducao%"
Write-Host ""

if ($tamanhoDepois -lt 100) {
    Write-Host "PRONTO PARA GIT!" -ForegroundColor Green
} else {
    Write-Host "Tamanho: $([math]::Round($tamanhoDepois, 2)) MB" -ForegroundColor Yellow
}
