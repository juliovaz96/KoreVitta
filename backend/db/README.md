# KoreVitta DB — SQL-first

Este diretório define o projeto de banco SQL-first para o KoreVitta com:
- versionamento por **fase** e **domínio**
- convenção **expand/contract**
- scripts de **rollback** por migration
- seeds faseados
- queries de observabilidade e runbooks operacionais

## Estrutura

```text
backend/db/
  migration-manifest.yaml
  migrations/
    phase-000-bootstrap/
    phase-100-mvp/
    phase-200-v1_1/
    phase-300-v1_2/
  rollback/
    ... (espelho de migrations)
  seeds/
    phase-000-bootstrap/
    phase-100-mvp/
    phase-200-v1_1/
    phase-300-v1_2/
  observability/
    queries/
    alerts/
    dashboards/
  scripts/
```

## Convenção de naming

`V{phase}{seq}__{domain}__{expand|contract}__{slug}.sql`

Exemplos:
- `V000001__global__expand__extensions_and_types.sql`
- `V100004__core__expand__create_patients.sql`
- `V300003__analytics__contract__drop_deprecated_mv.sql`

Rollback correspondente:
`R{phase}{seq}__{domain}__{expand|contract}__{slug}.sql`

## Ordem de execução

1. `migrations/phase-000-bootstrap`
2. `migrations/phase-100-mvp`
3. `seeds/phase-100-mvp`
4. `migrations/phase-200-v1_1`
5. `seeds/phase-200-v1_1`
6. `migrations/phase-300-v1_2`
7. `seeds/phase-300-v1_2`

## Expand/Contract (regras)

- **Expand**: só adição/backward-compatible (`CREATE TABLE`, `ADD COLUMN NULL`, `CREATE INDEX CONCURRENTLY`, `CREATE POLICY`).
- **Contract**: remoções apenas após backfill e validação (drop de colunas/tabelas/policies antigas).
- Nenhum contract entra no mesmo release do expand correspondente.

## Execução local (PowerShell)

Pré-requisitos:
- PostgreSQL 16+
- `psql` no `PATH` **ou** `PSQL_PATH` definido no `backend/db/.env`
- `DATABASE_URL` (carregada automaticamente de `backend/db/.env`)

Precedência de configuração:
1. variável já exportada no terminal (`$env:DATABASE_URL`)
2. arquivo `backend/db/.env`

Exemplo (Windows) para `PSQL_PATH`:

```dotenv
PSQL_PATH=C:\Program Files\PostgreSQL\17\bin\psql.exe
```

```powershell
./scripts/apply.ps1 -Phase phase-000-bootstrap
./scripts/apply.ps1 -Phase phase-100-mvp
./scripts/seed.ps1 -Phase phase-100-mvp
```

Rollback de um arquivo:

```powershell
./scripts/rollback.ps1 -File rollback/phase-100-mvp/core/R100004__core__expand__create_patients.sql
```

## Escalabilidade embutida

- Tabelas de alto volume já preparadas para particionamento por tempo.
- Materialized views com refresh concorrente via `pg_cron`.
- RLS configurável por escopo (MVP mínimo + expansão por fase).
- Runbooks em `backend/runbooks/` para operação e incidentes.
