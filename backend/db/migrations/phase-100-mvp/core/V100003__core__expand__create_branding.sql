BEGIN;

CREATE TABLE IF NOT EXISTS branding (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  professional_id UUID NOT NULL UNIQUE REFERENCES professionals(id),
  brand_name      VARCHAR(100),
  logo_url        TEXT,
  primary_color   VARCHAR(7) DEFAULT '#6C63FF',
  config          JSONB DEFAULT '{}'::jsonb,
  created_at      TIMESTAMPTZ DEFAULT now(),
  updated_at      TIMESTAMPTZ DEFAULT now()
);

COMMIT;
