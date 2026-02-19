BEGIN;

CREATE TABLE IF NOT EXISTS threads (
  id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id              UUID NOT NULL REFERENCES patients(id),
  professional_id         UUID NOT NULL REFERENCES professionals(id),
  subject                 VARCHAR(255),
  context_type            VARCHAR(50),
  context_id              UUID,
  is_archived             BOOLEAN DEFAULT false,
  last_message_at         TIMESTAMPTZ,
  unread_by_professional  SMALLINT DEFAULT 0,
  unread_by_patient       SMALLINT DEFAULT 0,
  created_at              TIMESTAMPTZ DEFAULT now(),
  updated_at              TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS messages (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  thread_id       UUID NOT NULL REFERENCES threads(id),
  sender_type     VARCHAR(20) NOT NULL,
  sender_id       UUID NOT NULL,
  content         TEXT NOT NULL,
  attachments     JSONB DEFAULT '[]'::jsonb,
  is_read         BOOLEAN DEFAULT false,
  created_at      TIMESTAMPTZ DEFAULT now()
) PARTITION BY RANGE (created_at);

CREATE TABLE IF NOT EXISTS messages_default PARTITION OF messages DEFAULT;

CREATE INDEX IF NOT EXISTS idx_messages_thread ON messages(thread_id, created_at DESC);

COMMIT;
