# Runbook — Partition Maintenance

## Escopo
Tabelas particionadas: `checkins`, `messages`, `water_intake_logs`, `audit_log`.

## Rotina mensal
1. Verificar criação automática de partições do mês seguinte.
2. Validar índices nas novas partições.
3. Revisar política de retenção (dados operacionais e LGPD).
4. Arquivar/expurgar partições antigas conforme política.

## Verificação rápida
- Existe partição para mês atual e próximo.
- Inserts continuam roteando para partição correta.
- Sem crescimento indevido na partição `default`.

## Incidente comum
Se dados começarem a cair na partição default:
1. Criar partição faltante.
2. Mover dados da default para a partição correta.
3. Reindexar e atualizar estatísticas.
