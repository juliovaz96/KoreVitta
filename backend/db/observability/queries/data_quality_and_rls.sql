-- Linhas sem soft delete em tabelas críticas
SELECT 'patients' AS table_name, COUNT(*) AS total, COUNT(*) FILTER (WHERE deleted_at IS NOT NULL) AS deleted
FROM patients;

-- Validação de órfãos de protocolo ativo
SELECT COUNT(*) AS invalid_active_protocol
FROM patients p
LEFT JOIN protocols pr ON pr.id = p.active_protocol_id
WHERE p.active_protocol_id IS NOT NULL
  AND pr.id IS NULL;

-- Cobertura de políticas RLS
SELECT schemaname, tablename, policyname, permissive, roles, cmd
FROM pg_policies
WHERE schemaname = 'public'
ORDER BY tablename, policyname;
