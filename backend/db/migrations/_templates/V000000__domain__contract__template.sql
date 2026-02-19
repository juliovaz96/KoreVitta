BEGIN;

-- Contract migration template
-- Regras:
-- 1) Executar somente após ciclo expand validado em produção
-- 2) Validar inexistência de dependências ativas
-- 3) Garantir rollback testado em drill

-- Exemplo:
-- DROP INDEX ...;
-- ALTER TABLE ... DROP COLUMN ...;
-- DROP TABLE ...;

COMMIT;
