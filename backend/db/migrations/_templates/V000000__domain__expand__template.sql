BEGIN;

-- Expand migration template
-- Regras:
-- 1) Apenas operações backward-compatible
-- 2) Evitar locks longos
-- 3) Incluir índices e constraints incrementais

-- Exemplo:
-- CREATE TABLE ...;
-- ALTER TABLE ... ADD COLUMN ... NULL;
-- CREATE INDEX CONCURRENTLY ...;

COMMIT;
