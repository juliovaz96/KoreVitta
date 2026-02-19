BEGIN;

ALTER TABLE patients ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_task_completions ENABLE ROW LEVEL SECURITY;
ALTER TABLE checkins ENABLE ROW LEVEL SECURITY;
ALTER TABLE threads ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS patients_self_access ON patients;
CREATE POLICY patients_self_access ON patients
  FOR SELECT
  USING (user_id = current_setting('app.current_user_id', true)::UUID);

DROP POLICY IF EXISTS daily_tasks_patient_read ON daily_tasks;
CREATE POLICY daily_tasks_patient_read ON daily_tasks
  FOR SELECT
  USING (patient_id IN (
    SELECT id FROM patients
    WHERE user_id = current_setting('app.current_user_id', true)::UUID
  ));

DROP POLICY IF EXISTS checkins_patient_read ON checkins;
CREATE POLICY checkins_patient_read ON checkins
  FOR SELECT
  USING (patient_id IN (
    SELECT id FROM patients
    WHERE user_id = current_setting('app.current_user_id', true)::UUID
  ));

COMMIT;
