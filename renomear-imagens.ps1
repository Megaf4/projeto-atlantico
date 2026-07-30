# Script para renomear arquivos e pastas removendo caracteres especiais

Write-Host "Iniciando renomeacao..." -ForegroundColor Cyan

$pasta = "public\images"

function Normalizar {
    param($n)
    $n = $n -replace "[ÇçÃã]", ""
    $n = $n -replace " ", "_"
    $n = $n -replace "&", "_e_"
    $n = $n -replace "[()]", ""
    $n = $n -replace "à", "a"
    return $n
}

# Pastas
Get-ChildItem $pasta -Directory -Recurse | Sort-Object FullName -Descending | ForEach-Object {
    $antigo = $_.Name
    $novo = Normalizar $antigo
    
    if ($antigo -ne $novo) {
        $destino = Join-Path $_.Parent.FullName $novo
        if (-not (Test-Path $destino)) {
            Rename-Item $_.FullName $novo
            Write-Host "Pasta: $antigo -> $novo" -ForegroundColor Green
        }
    }
}

# Arquivos
Get-ChildItem $pasta -File -Recurse | ForEach-Object {
    $antigo = $_.Name
    $novo = Normalizar $antigo
    
    if ($antigo -ne $novo) {
        $destino = Join-Path $_.Directory.FullName $novo
        if (-not (Test-Path $destino)) {
            Rename-Item $_.FullName $novo
            Write-Host "Arquivo: $antigo" -ForegroundColor Green
        }
    }
}

Write-Host "Concluido!" -ForegroundColor Green
