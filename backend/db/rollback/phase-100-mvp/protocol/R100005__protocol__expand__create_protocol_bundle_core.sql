BEGIN;
ALTER TABLE patients DROP CONSTRAINT IF EXISTS fk_patients_active_protocol;
DROP TABLE IF EXISTS protocol_modules;
DROP TABLE IF EXISTS protocols;
COMMIT;
