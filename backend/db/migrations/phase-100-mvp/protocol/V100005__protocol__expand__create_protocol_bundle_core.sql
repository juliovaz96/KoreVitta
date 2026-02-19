BEGIN;

CREATE TABLE IF NOT EXISTS protocols (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id      UUID NOT NULL REFERENCES patients(id),
  professional_id UUID NOT NULL REFERENCES professionals(id),
  name            VARCHAR(255) NOT NULL,
  status          VARCHAR(20) NOT NULL DEFAULT 'active',
  current_version INT NOT NULL DEFAULT 1,
  starts_at       DATE NOT NULL,
  ends_at         DATE,
  created_at      TIMESTAMPTZ DEFAULT now(),
  updated_at      TIMESTAMPTZ DEFAULT now(),
  deleted_at      TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS protocol_modules (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  protocol_id     UUID NOT NULL REFERENCES protocols(id) ON DELETE CASCADE,
  module_type     VARCHAR(40) NOT NULL,
  name            VARCHAR(255) NOT NULL,
  config          JSONB DEFAULT '{}'::jsonb,
  is_active       BOOLEAN DEFAULT true,
  created_at      TIMESTAMPTZ DEFAULT now(),
  updated_at      TIMESTAMPTZ DEFAULT now(),
  UNIQUE(protocol_id, module_type)
);

ALTER TABLE patients
  ADD CONSTRAINT fk_patients_active_protocol
  FOREIGN KEY (active_protocol_id)
  REFERENCES protocols(id);

COMMIT;
