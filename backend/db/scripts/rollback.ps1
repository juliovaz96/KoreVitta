param(
  [Parameter(Mandatory = $true)]
  [string]$File
)

. $PSScriptRoot\load-env.ps1
. $PSScriptRoot\resolve-psql.ps1

if (-not $env:DATABASE_URL) {
  throw "DATABASE_URL não definido. Configure backend/db/.env ou exporte a variável no terminal."
}

$psqlCommand = Resolve-PsqlCommand

$rollbackFile = Join-Path $PSScriptRoot "..\$File"
if (-not (Test-Path $rollbackFile)) {
  throw "Arquivo de rollback não encontrado: $File"
}

Write-Host "Executando rollback $rollbackFile"
& $psqlCommand "$env:DATABASE_URL" -v ON_ERROR_STOP=1 -f $rollbackFile
if ($LASTEXITCODE -ne 0) {
  throw "Falha no rollback"
}

Write-Host "Rollback concluído com sucesso."
