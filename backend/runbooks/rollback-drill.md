# Runbook — Rollback Drill

## Objetivo
Testar reversão controlada por fase/domínio antes de produção.

## Passos
1. Clonar snapshot de staging para ambiente de drill.
2. Aplicar migration alvo (`apply.ps1`).
3. Rodar smoke de integridade e consultas críticas.
4. Executar rollback correspondente (`rollback.ps1`).
5. Reexecutar smoke e comparar métricas.

## Critérios de aprovação
- Rollback sem erro.
- Sem perda de dados não planejada.
- Latência p95 dentro do baseline ±10%.

## Frequência
- Obrigatório para mudanças `contract`.
- Recomendado para qualquer mudança em tabelas particionadas e MVs.
