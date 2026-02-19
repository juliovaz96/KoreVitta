BEGIN;
DROP POLICY IF EXISTS checkins_patient_read ON checkins;
DROP POLICY IF EXISTS daily_tasks_patient_read ON daily_tasks;
DROP POLICY IF EXISTS patients_self_access ON patients;
COMMIT;
