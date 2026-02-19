BEGIN;

CREATE TABLE IF NOT EXISTS protocol_templates (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  professional_id UUID NOT NULL REFERENCES professionals(id),
  name            VARCHAR(255) NOT NULL,
  description     TEXT,
  tags            TEXT[],
  usage_count     INT DEFAULT 0,
  created_at      TIMESTAMPTZ DEFAULT now(),
  updated_at      TIMESTAMPTZ DEFAULT now(),
  deleted_at      TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS protocol_template_modules (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_id     UUID NOT NULL REFERENCES protocol_templates(id) ON DELETE CASCADE,
  module_type     VARCHAR(40) NOT NULL,
  name            VARCHAR(255) NOT NULL,
  content         JSONB NOT NULL DEFAULT '{}'::jsonb,
  sort_order      SMALLINT DEFAULT 0,
  created_at      TIMESTAMPTZ DEFAULT now(),
  updated_at      TIMESTAMPTZ DEFAULT now(),
  UNIQUE(template_id, module_type)
);

CREATE TABLE IF NOT EXISTS protocol_versions (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  protocol_id UUID NOT NULL REFERENCES protocols(id),
  version     INT NOT NULL,
  snapshot    JSONB NOT NULL,
  change_note TEXT,
  changed_by  UUID NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT now(),
  UNIQUE(protocol_id, version)
);

COMMIT;
