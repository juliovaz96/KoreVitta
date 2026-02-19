BEGIN;

CREATE TABLE IF NOT EXISTS body_compositions (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id          UUID NOT NULL REFERENCES patients(id),
  professional_id     UUID NOT NULL REFERENCES professionals(id),
  checkin_id          UUID REFERENCES checkins(id),
  recorded_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
  source              VARCHAR(30) DEFAULT 'manual',
  weight_kg           DECIMAL(5,1),
  body_fat_pct        DECIMAL(4,1),
  lean_mass_kg        DECIMAL(5,1),
  bmi                 DECIMAL(4,1),
  inbody_score        SMALLINT,
  segmental_lean      JSONB,
  segmental_fat       JSONB,
  raw_import_data     JSONB,
  created_at          TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS biomarker_panels (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id      UUID NOT NULL REFERENCES patients(id),
  professional_id UUID NOT NULL REFERENCES professionals(id),
  name            VARCHAR(255) NOT NULL,
  collected_at    DATE NOT NULL,
  file_url        TEXT,
  created_at      TIMESTAMPTZ DEFAULT now(),
  updated_at      TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS biomarkers (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  panel_id        UUID NOT NULL REFERENCES biomarker_panels(id) ON DELETE CASCADE,
  patient_id      UUID NOT NULL REFERENCES patients(id),
  category        VARCHAR(50) NOT NULL,
  name            VARCHAR(255) NOT NULL,
  value           DECIMAL(10,3) NOT NULL,
  unit            VARCHAR(30) NOT NULL,
  ref_min         DECIMAL(10,3),
  ref_max         DECIMAL(10,3),
  flag            VARCHAR(20),
  created_at      TIMESTAMPTZ DEFAULT now()
);

COMMIT;
