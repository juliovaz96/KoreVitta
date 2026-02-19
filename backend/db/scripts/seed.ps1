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

$seedPath = Join-Path $PSScriptRoot "..\seeds\$Phase"
if (-not (Test-Path $seedPath)) {
  throw "Fase de seed não encontrada: $Phase"
}

$files = Get-ChildItem -Path $seedPath -Filter "S*.sql" | Sort-Object Name
foreach ($file in $files) {
  Write-Host "Aplicando seed $($file.FullName)"
  & $psqlCommand "$env:DATABASE_URL" -v ON_ERROR_STOP=1 -f $file.FullName
  if ($LASTEXITCODE -ne 0) {
    throw "Falha ao aplicar seed $($file.Name)"
  }
}

Write-Host "Seeds da fase $Phase aplicadas com sucesso."
