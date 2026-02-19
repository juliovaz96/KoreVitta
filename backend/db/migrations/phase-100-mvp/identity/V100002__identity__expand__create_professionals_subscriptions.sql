BEGIN;

CREATE TABLE IF NOT EXISTS professionals (
  id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id                 UUID NOT NULL UNIQUE REFERENCES users(id),
  profession              VARCHAR(100) NOT NULL,
  license_number          VARCHAR(50),
  timezone                VARCHAR(50) DEFAULT 'America/Sao_Paulo',
  onboarding_completed    BOOLEAN DEFAULT false,
  created_at              TIMESTAMPTZ DEFAULT now(),
  updated_at              TIMESTAMPTZ DEFAULT now(),
  deleted_at              TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS subscriptions (
  id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  professional_id         UUID NOT NULL REFERENCES professionals(id),
  plan                    VARCHAR(20) NOT NULL DEFAULT 'free',
  status                  VARCHAR(20) NOT NULL DEFAULT 'active',
  patient_limit           INT NOT NULL DEFAULT 5,
  created_at              TIMESTAMPTZ DEFAULT now(),
  updated_at              TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_subscriptions_professional ON subscriptions(professional_id);

COMMIT;
