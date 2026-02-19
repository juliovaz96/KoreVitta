BEGIN;

CREATE TABLE IF NOT EXISTS body_measurements (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id      UUID NOT NULL REFERENCES patients(id),
  professional_id UUID NOT NULL REFERENCES professionals(id),
  checkin_id      UUID REFERENCES checkins(id),
  recorded_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  body_site       VARCHAR(50) NOT NULL,
  value_cm        DECIMAL(5,1) NOT NULL,
  created_at      TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS progress_photos (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id      UUID NOT NULL REFERENCES patients(id),
  professional_id UUID NOT NULL REFERENCES professionals(id),
  checkin_id      UUID REFERENCES checkins(id),
  storage_key     TEXT NOT NULL,
  thumbnail_key   TEXT,
  position        VARCHAR(40) NOT NULL,
  taken_at        TIMESTAMPTZ DEFAULT now(),
  created_at      TIMESTAMPTZ DEFAULT now()
);

COMMIT;
