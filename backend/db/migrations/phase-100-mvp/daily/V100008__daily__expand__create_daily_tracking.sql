BEGIN;

CREATE TABLE IF NOT EXISTS daily_tasks (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id      UUID NOT NULL REFERENCES patients(id),
  protocol_id     UUID REFERENCES protocols(id),
  module_type     VARCHAR(40),
  task_date       DATE NOT NULL,
  type            VARCHAR(50) NOT NULL,
  title           VARCHAR(255) NOT NULL,
  reference_id    UUID,
  scheduled_time  TIME,
  created_at      TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS daily_task_completions (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  task_id         UUID NOT NULL REFERENCES daily_tasks(id) ON DELETE CASCADE,
  patient_id      UUID NOT NULL REFERENCES patients(id),
  completed       BOOLEAN NOT NULL DEFAULT true,
  completed_at    TIMESTAMPTZ DEFAULT now(),
  UNIQUE(task_id)
);

CREATE INDEX IF NOT EXISTS idx_daily_tasks_patient_date ON daily_tasks(patient_id, task_date);

COMMIT;
