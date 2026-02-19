function Resolve-PsqlCommand {
  if ($env:PSQL_PATH) {
    if (Test-Path $env:PSQL_PATH) {
      return $env:PSQL_PATH
    }

    throw "PSQL_PATH foi definido, mas o arquivo não existe: $($env:PSQL_PATH)"
  }

  $psqlFromPath = Get-Command psql -ErrorAction SilentlyContinue
  if ($psqlFromPath) {
    return $psqlFromPath.Source
  }

  $candidates = Get-ChildItem -Path "C:\Program Files\PostgreSQL" -Filter psql.exe -Recurse -ErrorAction SilentlyContinue |
    Sort-Object FullName -Descending

  if ($candidates -and $candidates.Count -gt 0) {
    return $candidates[0].FullName
  }

  throw @"
psql não encontrado.

Opções para corrigir:
1) Instale PostgreSQL Client Tools e adicione o binário ao PATH.
2) Defina PSQL_PATH em backend/db/.env, por exemplo:
   PSQL_PATH=C:\Program Files\PostgreSQL\17\bin\psql.exe
"@
}
