# Alertas Baseline (DB)

## Criticidade Alta
- Falha em `REFRESH MATERIALIZED VIEW CONCURRENTLY mv_patient_dashboard` por 2 execuções consecutivas.
- Falha em criação/manutenção de partições mensais (`checkins`, `messages`, `water_intake_logs`, `audit_log`).
- Uso de storage > 85% no PostgreSQL.

## Criticidade Média
- p95 de queries CRM > 350ms por 15 minutos.
- Locks > 30s em tabelas de alto tráfego.
- Bloat de índice > 30% em tabelas particionadas.

## Criticidade Baixa
- Jobs agendados com atraso > 5 minutos.
- Queda de taxa de refresh de MVs abaixo de 95% no dia.
