BEGIN;

CREATE TABLE IF NOT EXISTS meal_plans (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  protocol_module_id  UUID NOT NULL REFERENCES protocol_modules(id) ON DELETE CASCADE,
  protocol_id         UUID NOT NULL REFERENCES protocols(id),
  name                VARCHAR(255) NOT NULL,
  target_calories     INT,
  created_at          TIMESTAMPTZ DEFAULT now(),
  updated_at          TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS meals (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  meal_plan_id    UUID NOT NULL REFERENCES meal_plans(id) ON DELETE CASCADE,
  type            VARCHAR(50) NOT NULL,
  scheduled_time  TIME,
  created_at      TIMESTAMPTZ DEFAULT now(),
  updated_at      TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS meal_items (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  meal_id         UUID NOT NULL REFERENCES meals(id) ON DELETE CASCADE,
  name            VARCHAR(255) NOT NULL,
  quantity        DECIMAL(8,1),
  unit            VARCHAR(30),
  calories        INT,
  protein_g       DECIMAL(6,1),
  carbs_g         DECIMAL(6,1),
  fat_g           DECIMAL(6,1),
  alternatives    JSONB DEFAULT '[]'::jsonb,
  created_at      TIMESTAMPTZ DEFAULT now(),
  updated_at      TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS training_plans (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  protocol_module_id  UUID NOT NULL REFERENCES protocol_modules(id) ON DELETE CASCADE,
  protocol_id         UUID NOT NULL REFERENCES protocols(id),
  name                VARCHAR(255) NOT NULL,
  duration_min        SMALLINT,
  created_at          TIMESTAMPTZ DEFAULT now(),
  updated_at          TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS training_exercises (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  training_plan_id UUID NOT NULL REFERENCES training_plans(id) ON DELETE CASCADE,
  name            VARCHAR(255) NOT NULL,
  sets            SMALLINT,
  reps            VARCHAR(30),
  rest_seconds    SMALLINT,
  video_url       TEXT,
  created_at      TIMESTAMPTZ DEFAULT now(),
  updated_at      TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_meal_items_name_trgm ON meal_items USING gin (name gin_trgm_ops);

COMMIT;
