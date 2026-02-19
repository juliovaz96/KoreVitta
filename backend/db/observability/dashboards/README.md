# Dashboards sugeridos

## Dashboard 1: DB Core Health
- CPU, memória, conexões ativas
- TPS e latência p50/p95/p99
- Lock wait time
- Tamanho total e crescimento diário

## Dashboard 2: Analytics Reliability
- Tempo médio de refresh das MVs
- Último refresh com sucesso
- Erros por job de `pg_cron`
- Freshness (`now - max(applied_at)`) de `mv_patient_dashboard`

## Dashboard 3: Partition Ops
- Próximas partições criadas
- Partições faltantes por tabela
- Tamanho por partição mensal
- Retenção executada x pendente
