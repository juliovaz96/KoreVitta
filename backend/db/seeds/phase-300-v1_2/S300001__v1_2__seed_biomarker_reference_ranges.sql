BEGIN;

CREATE TABLE IF NOT EXISTS seed_biomarker_reference_ranges (
  name          VARCHAR(255) PRIMARY KEY,
  unit          VARCHAR(30) NOT NULL,
  ref_min       DECIMAL(10,3),
  ref_max       DECIMAL(10,3),
  updated_at    TIMESTAMPTZ DEFAULT now()
);

INSERT INTO seed_biomarker_reference_ranges (name, unit, ref_min, ref_max)
VALUES
  ('Glicose em jejum', 'mg/dL', 70, 99),
  ('HDL', 'mg/dL', 40, 200),
  ('LDL', 'mg/dL', 0, 130)
ON CONFLICT (name)
DO UPDATE SET
  unit = EXCLUDED.unit,
  ref_min = EXCLUDED.ref_min,
  ref_max = EXCLUDED.ref_max,
  updated_at = now();

COMMIT;
