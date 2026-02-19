BEGIN;

UPDATE checkin_schedules
SET form_schema = '{
  "sections": [
    {
      "key": "adherence",
      "label": "Adesão",
      "fields": [
        {"key": "nutrition_adherence", "type": "scale_1_5", "required": true},
        {"key": "training_adherence", "type": "scale_1_5", "required": true}
      ]
    }
  ]
}'::jsonb
WHERE (form_schema = '{}'::jsonb OR form_schema IS NULL);

COMMIT;
