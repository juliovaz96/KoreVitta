BEGIN;

CREATE TABLE IF NOT EXISTS checkin_schedules (
  id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id              UUID NOT NULL REFERENCES patients(id),
  professional_id         UUID NOT NULL REFERENCES professionals(id),
  cadence                 VARCHAR(20) NOT NULL DEFAULT 'weekly',
  form_schema             JSONB NOT NULL DEFAULT '{}'::jsonb,
  is_active               BOOLEAN DEFAULT true,
  created_at              TIMESTAMPTZ DEFAULT now(),
  updated_at              TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS checkins (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id          UUID NOT NULL REFERENCES patients(id),
  professional_id     UUID NOT NULL REFERENCES professionals(id),
  schedule_id         UUID REFERENCES checkin_schedules(id),
  protocol_id         UUID REFERENCES protocols(id),
  status              VARCHAR(20) NOT NULL DEFAULT 'scheduled',
  scheduled_at        TIMESTAMPTZ NOT NULL,
  completed_at        TIMESTAMPTZ,
  responses           JSONB DEFAULT '{}'::jsonb,
  professional_notes  TEXT,
  reviewed_at         TIMESTAMPTZ,
  created_at          TIMESTAMPTZ DEFAULT now(),
  updated_at          TIMESTAMPTZ DEFAULT now()
) PARTITION BY RANGE (scheduled_at);

CREATE TABLE IF NOT EXISTS checkins_default PARTITION OF checkins DEFAULT;

CREATE INDEX IF NOT EXISTS idx_checkins_patient ON checkins(patient_id, scheduled_at DESC);
CREATE INDEX IF NOT EXISTS idx_checkins_pending ON checkins(professional_id, status)
  WHERE status IN ('scheduled', 'pending');

COMMIT;
