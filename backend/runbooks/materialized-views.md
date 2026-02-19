# Runbook — Materialized Views

## MVs críticas
- `mv_patient_dashboard`
- `mv_protocol_effectiveness`

## Frequência
- `mv_patient_dashboard`: a cada 15 min
- `mv_protocol_effectiveness`: a cada 30 min

## Operação
- Usar sempre `REFRESH MATERIALIZED VIEW CONCURRENTLY`.
- Garantir índice único em cada MV antes do refresh concorrente.

## Diagnóstico
1. Checar jobs no `pg_cron`.
2. Verificar lock/contention no refresh.
3. Medir runtime e rows processadas.
4. Avaliar degradação de query no CRM.

## Ação de mitigação
- Se refresh exceder janela, reduzir frequência temporariamente.
- Considerar separar MV em blocos incrementais por domínio.
