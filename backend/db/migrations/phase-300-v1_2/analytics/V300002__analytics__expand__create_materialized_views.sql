BEGIN;

CREATE MATERIALIZED VIEW IF NOT EXISTS mv_patient_dashboard AS
SELECT
  p.id AS patient_id,
  p.professional_id,
  p.status,
  p.risk_score,
  u.name AS patient_name,
  bc.weight_kg AS current_weight_kg,
  bc.body_fat_pct AS current_body_fat_pct,
  ci.completed_at AS last_checkin_completed
FROM patients p
JOIN users u ON u.id = p.user_id
LEFT JOIN LATERAL (
  SELECT weight_kg, body_fat_pct
  FROM body_compositions
  WHERE patient_id = p.id
  ORDER BY recorded_at DESC
  LIMIT 1
) bc ON true
LEFT JOIN LATERAL (
  SELECT completed_at
  FROM checkins
  WHERE patient_id = p.id
  ORDER BY scheduled_at DESC
  LIMIT 1
) ci ON true
WHERE p.deleted_at IS NULL;

CREATE UNIQUE INDEX IF NOT EXISTS idx_mv_patient_dashboard_pk
  ON mv_patient_dashboard(patient_id);

CREATE MATERIALIZED VIEW IF NOT EXISTS mv_protocol_effectiveness AS
SELECT
  pr.id AS protocol_id,
  pr.professional_id,
  pr.patient_id,
  COUNT(c.id) FILTER (WHERE c.status = 'completed') AS completed_checkins,
  COUNT(c.id) AS total_checkins
FROM protocols pr
LEFT JOIN checkins c ON c.protocol_id = pr.id
GROUP BY pr.id, pr.professional_id, pr.patient_id;

CREATE UNIQUE INDEX IF NOT EXISTS idx_mv_protocol_effectiveness_pk
  ON mv_protocol_effectiveness(protocol_id);

COMMIT;
