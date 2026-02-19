BEGIN;

CREATE TABLE IF NOT EXISTS schema_migrations (
  version         TEXT PRIMARY KEY,
  phase           TEXT NOT NULL,
  domain          TEXT NOT NULL,
  change_type     TEXT NOT NULL CHECK (change_type IN ('expand', 'contract')),
  applied_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  checksum        TEXT,
  applied_by      TEXT
);

CREATE TABLE IF NOT EXISTS schema_guardrails (
  key             TEXT PRIMARY KEY,
  value           JSONB NOT NULL,
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO schema_guardrails (key, value)
VALUES ('migration_mode', '{"strategy":"expand_contract","allow_contract":false}'::jsonb)
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = now();

COMMIT;
