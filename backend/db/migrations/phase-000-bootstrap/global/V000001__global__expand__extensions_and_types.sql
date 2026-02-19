BEGIN;

-- Extensões obrigatórias para escalabilidade e operação
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- Extensões opcionais por ambiente (podem não existir em instalações locais Windows)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_available_extensions WHERE name = 'pg_cron') THEN
    CREATE EXTENSION IF NOT EXISTS pg_cron;
  ELSE
    RAISE NOTICE 'Extensão pg_cron indisponível neste ambiente; seguindo sem agendamento no banco.';
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_available_extensions WHERE name = 'pg_partman') THEN
    CREATE EXTENSION IF NOT EXISTS pg_partman;
  ELSE
    RAISE NOTICE 'Extensão pg_partman indisponível neste ambiente; partições serão geridas sem partman.';
  END IF;
END $$;

-- TODO(UUID v7): substituir por função definitiva de UUID v7 suportada no ambiente
-- Exemplo inicial (fallback): gen_random_uuid()

-- Tipos/enums globais
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_role') THEN
    CREATE TYPE user_role AS ENUM ('professional', 'patient');
  END IF;
END $$;

COMMIT;
