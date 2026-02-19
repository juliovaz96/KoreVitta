-- Saúde geral do banco
SELECT now() AS collected_at;
SELECT version();

-- Tamanho por tabela (top 20)
SELECT
  schemaname,
  relname,
  pg_size_pretty(pg_total_relation_size(relid)) AS total_size
FROM pg_catalog.pg_statio_user_tables
ORDER BY pg_total_relation_size(relid) DESC
LIMIT 20;

-- Queries lentas (se pg_stat_statements habilitado)
SELECT
  queryid,
  calls,
  total_exec_time,
  mean_exec_time,
  rows,
  query
FROM pg_stat_statements
ORDER BY total_exec_time DESC
LIMIT 20;
