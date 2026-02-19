BEGIN;

-- Exemplo inicial de manutenção com pg_partman
-- Ajustar premake/retention conforme volume real.
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_extension WHERE extname = 'pg_partman') THEN
    -- Cadastros de parent podem ser adicionados após validação do naming padrão no ambiente.
    -- SELECT partman.create_parent('public.checkins', 'scheduled_at', 'native', 'monthly');
    -- SELECT partman.create_parent('public.messages', 'created_at', 'native', 'monthly');
    -- SELECT partman.create_parent('public.water_intake_logs', 'intake_date', 'native', 'monthly');
    -- SELECT partman.create_parent('public.audit_log', 'created_at', 'native', 'monthly');
    NULL;
  END IF;
END $$;

COMMIT;
