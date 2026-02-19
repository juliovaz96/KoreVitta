BEGIN;

CREATE TABLE IF NOT EXISTS patients (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id             UUID NOT NULL REFERENCES users(id),
  professional_id     UUID NOT NULL REFERENCES professionals(id),
  status              VARCHAR(20) NOT NULL DEFAULT 'active',
  primary_goal        VARCHAR(255),
  target_weight_kg    DECIMAL(5,1),
  risk_score          SMALLINT DEFAULT 0,
  last_checkin_at     TIMESTAMPTZ,
  next_checkin_at     TIMESTAMPTZ,
  active_protocol_id  UUID,
  created_at          TIMESTAMPTZ DEFAULT now(),
  updated_at          TIMESTAMPTZ DEFAULT now(),
  deleted_at          TIMESTAMPTZ,
  UNIQUE(user_id, professional_id)
);

CREATE INDEX IF NOT EXISTS idx_patients_status ON patients(professional_id, status) WHERE deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_patients_risk ON patients(professional_id, risk_score DESC) WHERE deleted_at IS NULL;

COMMIT;
