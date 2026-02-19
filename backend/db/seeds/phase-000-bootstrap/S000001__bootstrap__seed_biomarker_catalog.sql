BEGIN;

CREATE TABLE IF NOT EXISTS seed_biomarker_catalog (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category    VARCHAR(50) NOT NULL,
  name        VARCHAR(255) NOT NULL,
  unit        VARCHAR(30) NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT now()
);

INSERT INTO seed_biomarker_catalog (category, name, unit)
VALUES
  ('metabolic', 'Glicose em jejum', 'mg/dL'),
  ('lipid_profile', 'HDL', 'mg/dL'),
  ('lipid_profile', 'LDL', 'mg/dL')
ON CONFLICT DO NOTHING;

COMMIT;
