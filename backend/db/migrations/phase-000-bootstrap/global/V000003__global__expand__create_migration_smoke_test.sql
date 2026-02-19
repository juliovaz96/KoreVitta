BEGIN;

CREATE TABLE IF NOT EXISTS migration_smoke_test (
  check_name       TEXT PRIMARY KEY,
  details          JSONB NOT NULL DEFAULT '{}'::jsonb,
  last_checked_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO migration_smoke_test (check_name, details)
VALUES (
  'bootstrap-phase',
  '{"status":"ok","source":"V000003"}'::jsonb
)
ON CONFLICT (check_name)
DO UPDATE SET
  details = EXCLUDED.details,
  last_checked_at = now();

COMMIT;
