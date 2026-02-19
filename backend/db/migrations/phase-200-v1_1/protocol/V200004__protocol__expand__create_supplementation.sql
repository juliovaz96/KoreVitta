BEGIN;

CREATE TABLE IF NOT EXISTS supplementation_plans (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  protocol_module_id  UUID NOT NULL REFERENCES protocol_modules(id) ON DELETE CASCADE,
  protocol_id         UUID NOT NULL REFERENCES protocols(id),
  notes               TEXT,
  created_at          TIMESTAMPTZ DEFAULT now(),
  updated_at          TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS supplement_items (
  id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  supplementation_plan_id UUID NOT NULL REFERENCES supplementation_plans(id) ON DELETE CASCADE,
  name                    VARCHAR(255) NOT NULL,
  dosage                  DECIMAL(8,2) NOT NULL,
  unit                    VARCHAR(30) NOT NULL,
  frequency               VARCHAR(100) NOT NULL,
  timing                  VARCHAR(100),
  created_at              TIMESTAMPTZ DEFAULT now(),
  updated_at              TIMESTAMPTZ DEFAULT now()
);

COMMIT;
