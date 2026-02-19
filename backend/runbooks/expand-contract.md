# Runbook — Expand/Contract

## Objetivo
Executar mudanças de schema sem downtime e sem quebrar versões anteriores da aplicação.

## Expand (release N)
1. Criar objetos backward-compatible (`ADD COLUMN NULL`, tabelas novas, índices).
2. Publicar aplicação compatível com schema antigo+novo.
3. Fazer backfill em lotes quando necessário.
4. Monitorar métricas e qualidade.

## Contract (release N+1)
1. Confirmar que o caminho antigo não é mais usado.
2. Executar scripts `contract` em janela controlada.
3. Validar integridade e planos de query.
4. Atualizar runbook de rollback.

## Guardrails
- Nunca combinar expand e contract no mesmo deploy funcional.
- Toda migration deve ter arquivo de rollback correspondente.
- Contract exige aprovação explícita do owner de dados.
