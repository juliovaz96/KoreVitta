param(
  [Parameter(Mandatory = $true)]
  [string]$Phase
)

. $PSScriptRoot\load-env.ps1
. $PSScriptRoot\resolve-psql.ps1

if (-not $env:DATABASE_URL) {
  throw "DATABASE_URL não definido. Configure backend/db/.env ou exporte a variável no terminal."
}

$psqlCommand = Resolve-PsqlCommand

$phasePath = Join-Path $PSScriptRoot "..\migrations\$Phase"
if (-not (Test-Path $phasePath)) {
  throw "Fase não encontrada: $Phase"
}

$files = Get-ChildItem -Path $phasePath -Recurse -Filter "V*.sql" | Sort-Object FullName
if ($files.Count -eq 0) {
  Write-Host "Nenhuma migration encontrada para $Phase"
  exit 0
}

foreach ($file in $files) {
  Write-Host "Aplicando $($file.FullName)"
  & $psqlCommand "$env:DATABASE_URL" -v ON_ERROR_STOP=1 -f $file.FullName
  if ($LASTEXITCODE -ne 0) {
    throw "Falha ao aplicar $($file.Name)"
  }
}

Write-Host "Fase $Phase aplicada com sucesso."
