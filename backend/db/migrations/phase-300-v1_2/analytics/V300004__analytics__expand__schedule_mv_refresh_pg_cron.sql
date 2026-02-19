BEGIN;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_extension WHERE extname = 'pg_cron') THEN
    PERFORM cron.schedule(
      'korevitta-refresh-patient-dashboard',
      '*/15 * * * *',
      'REFRESH MATERIALIZED VIEW CONCURRENTLY mv_patient_dashboard;'
    );

    PERFORM cron.schedule(
      'korevitta-refresh-protocol-effectiveness',
      '*/30 * * * *',
      'REFRESH MATERIALIZED VIEW CONCURRENTLY mv_protocol_effectiveness;'
    );
  END IF;
END $$;

COMMIT;
