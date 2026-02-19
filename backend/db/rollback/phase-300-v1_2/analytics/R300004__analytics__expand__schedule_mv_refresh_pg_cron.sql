BEGIN;
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_extension WHERE extname = 'pg_cron') THEN
    PERFORM cron.unschedule('korevitta-refresh-patient-dashboard');
    PERFORM cron.unschedule('korevitta-refresh-protocol-effectiveness');
  END IF;
END $$;
COMMIT;
