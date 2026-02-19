BEGIN;

CREATE TABLE IF NOT EXISTS hydration_plans (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  protocol_module_id  UUID NOT NULL REFERENCES protocol_modules(id) ON DELETE CASCADE,
  protocol_id         UUID NOT NULL REFERENCES protocols(id),
  daily_target_ml     INT NOT NULL,
  per_kg_ml           DECIMAL(4,1),
  reminders_enabled   BOOLEAN DEFAULT true,
  created_at          TIMESTAMPTZ DEFAULT now(),
  updated_at          TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS water_intake_logs (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id      UUID NOT NULL REFERENCES patients(id),
  intake_date     DATE NOT NULL,
  amount_ml       INT NOT NULL,
  logged_at       TIMESTAMPTZ DEFAULT now(),
  source          VARCHAR(30) DEFAULT 'manual',
  created_at      TIMESTAMPTZ DEFAULT now()
) PARTITION BY RANGE (intake_date);

CREATE TABLE IF NOT EXISTS water_intake_logs_default PARTITION OF water_intake_logs DEFAULT;
CREATE INDEX IF NOT EXISTS idx_water_patient_date ON water_intake_logs(patient_id, intake_date);

COMMIT;
