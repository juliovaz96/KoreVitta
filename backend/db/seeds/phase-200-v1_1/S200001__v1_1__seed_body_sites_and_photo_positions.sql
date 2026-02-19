BEGIN;

CREATE TABLE IF NOT EXISTS seed_body_sites (
  code VARCHAR(60) PRIMARY KEY,
  label VARCHAR(120) NOT NULL
);

INSERT INTO seed_body_sites (code, label)
VALUES
  ('waist', 'Cintura'),
  ('hip', 'Quadril'),
  ('arm_right', 'Braço Direito'),
  ('thigh_right', 'Coxa Direita')
ON CONFLICT DO NOTHING;

COMMIT;
