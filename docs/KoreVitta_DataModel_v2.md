# KoreVitta — Modelo de Dados v2

## Documento de Arquitetura — CTO / Architect

> **Changelog v1 → v2:**
> - Protocolos redesenhados como **bundles integrados** (nutrição + treino + suplementação + hidratação)
> - Novo domínio **Body Composition** com suporte a InBody, biomarques e medições por região corporal
> - Novo domínio **Hydration** com metas e tracking diário
> - **Analytics Layer** com materialized views para dashboards e IA
> - Modelo normalizado e orientado a **séries temporais** para evolução do paciente
> - Templates de protocolo agora são compostos — replicáveis com 1 clique

---

## 📐 Premissas Arquiteturais

| Decisão | Justificativa |
|---|---|
| **PostgreSQL 16+** | JSONB nativo, indexação avançada (GIN/GiST), partitioning, Row-Level Security, excelente ecossistema |
| **UUIDs v7 como PK** | Ordenáveis por tempo (time-sortable), distribuídos, sem colisão em cenário multi-região futuro |
| **Soft Delete** (`deleted_at`) | Auditoria, compliance LGPD, recuperação de dados — nunca apagar registro de paciente |
| **Timestamps padrão** | `created_at`, `updated_at` em todas as tabelas |
| **JSONB para dados semi-estruturados** | Respostas de check-in, config de branding, exercícios — flexibilidade sem migration hell |
| **Colunas tipadas para dados analíticos** | Peso, medidas, biomarcadores = colunas reais (não JSONB) — permite agregação, range queries, analytics |
| **Row-Level Security (RLS)** | Isolamento de dados por profissional no nível do banco — segurança by design |
| **Enums como tipos PostgreSQL** | Performance e integridade vs. strings livres |
| **Índices compostos otimizados** | Queries mais frequentes pré-otimizadas com partial indexes |
| **Partitioning por tempo** | Tabelas de alto volume particionadas por mês (check-ins, mensagens, intake logs, audit) |
| **Modelo orientado a séries temporais** | Dados de evolução (peso, medidas, biomarkers) armazenados em tabelas append-only com `recorded_at` — perfeito para gráficos de evolução e IA |

---

## 🏗️ Visão Geral da Arquitetura de Dados

```
┌──────────────────────────────────────────────────────────────────────────┐
│                           IDENTITY LAYER                                 │
│  ┌──────────┐  ┌──────────────┐  ┌──────────────┐                       │
│  │  users    │  │ professionals│  │ subscriptions│                       │
│  └──────────┘  └──────────────┘  └──────────────┘                       │
├──────────────────────────────────────────────────────────────────────────┤
│                           CORE DOMAIN                                    │
│  ┌──────────┐  ┌──────────────┐                                          │
│  │ patients  │  │  branding    │                                          │
│  └──────────┘  └──────────────┘                                          │
├──────────────────────────────────────────────────────────────────────────┤
│                    INTEGRATED PROTOCOL DOMAIN                            │
│  ┌────────────────────┐  ┌────────────────────────┐                      │
│  │ protocol_templates  │  │ protocol_template_modules│                    │
│  └────────────────────┘  └────────────────────────┘                      │
│  ┌──────────┐  ┌────────────────┐  ┌──────────────────┐                  │
│  │protocols │  │protocol_modules│  │protocol_versions │                  │
│  └──────────┘  └────────────────┘  └──────────────────┘                  │
│  ┌───────────┐ ┌───────┐ ┌────────────┐                                  │
│  │meal_plans │ │meals  │ │meal_items  │                                  │
│  └───────────┘ └───────┘ └────────────┘                                  │
│  ┌────────────────┐  ┌──────────────────────┐  ┌─────────────────┐       │
│  │training_plans  │  │training_exercises    │  │hydration_plans  │       │
│  └────────────────┘  └──────────────────────┘  └─────────────────┘       │
│  ┌───────────────────────┐                                                │
│  │supplementation_plans  │                                                │
│  └───────────────────────┘                                                │
├──────────────────────────────────────────────────────────────────────────┤
│                        CHECK-IN DOMAIN                                   │
│  ┌──────────────────┐  ┌──────────┐                                      │
│  │checkin_schedules  │  │ checkins │                                      │
│  └──────────────────┘  └──────────┘                                      │
├──────────────────────────────────────────────────────────────────────────┤
│                BODY COMPOSITION & PROGRESS DOMAIN                        │
│  ┌──────────────────────┐  ┌──────────────────────┐                      │
│  │body_compositions     │  │body_measurements     │                      │
│  └──────────────────────┘  └──────────────────────┘                      │
│  ┌──────────────────┐  ┌──────────────┐  ┌────────────────┐              │
│  │biomarker_panels  │  │biomarkers    │  │progress_photos │              │
│  └──────────────────┘  └──────────────┘  └────────────────┘              │
├──────────────────────────────────────────────────────────────────────────┤
│                      DAILY TRACKING DOMAIN                               │
│  ┌──────────────────┐  ┌──────────────────────────┐                      │
│  │daily_tasks       │  │daily_task_completions    │                      │
│  └──────────────────┘  └──────────────────────────┘                      │
│  ┌──────────────────────┐                                                │
│  │water_intake_logs     │                                                │
│  └──────────────────────┘                                                │
├──────────────────────────────────────────────────────────────────────────┤
│                    COMMUNICATION DOMAIN                                  │
│  ┌──────────┐  ┌──────────┐                                              │
│  │ threads  │  │ messages │                                              │
│  └──────────┘  └──────────┘                                              │
├──────────────────────────────────────────────────────────────────────────┤
│                    ANALYTICS LAYER                                        │
│  ┌──────────────────────────┐  ┌──────────────────────────────┐          │
│  │mv_patient_dashboard     │  │mv_protocol_effectiveness     │          │
│  └──────────────────────────┘  └──────────────────────────────┘          │
│  ┌──────────────────────────┐                                            │
│  │audit_log                │                                            │
│  └──────────────────────────┘                                            │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 🔖 Enums (PostgreSQL Types)

```sql
-- Identity
CREATE TYPE user_role AS ENUM ('professional', 'patient');
CREATE TYPE subscription_plan AS ENUM ('free', 'core', 'pro');
CREATE TYPE subscription_status AS ENUM ('active', 'past_due', 'canceled', 'trialing');

-- Core
CREATE TYPE patient_status AS ENUM ('active', 'at_risk', 'paused', 'inactive');
CREATE TYPE patient_gender AS ENUM ('male', 'female', 'other', 'prefer_not_to_say');

-- Protocol
CREATE TYPE protocol_module_type AS ENUM ('nutrition', 'training', 'supplementation', 'hydration');
CREATE TYPE protocol_status AS ENUM ('draft', 'active', 'archived');
CREATE TYPE meal_type AS ENUM (
    'breakfast', 'morning_snack', 'lunch', 'afternoon_snack',
    'dinner', 'supper', 'pre_workout', 'post_workout', 'custom'
);
CREATE TYPE day_of_week AS ENUM ('mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun');
CREATE TYPE muscle_group AS ENUM (
    'chest', 'back', 'shoulders', 'biceps', 'triceps', 'forearms',
    'abs', 'quadriceps', 'hamstrings', 'glutes', 'calves', 'full_body', 'cardio', 'other'
);
CREATE TYPE exercise_type AS ENUM ('strength', 'cardio', 'flexibility', 'functional', 'other');

-- Check-in
CREATE TYPE checkin_cadence AS ENUM ('weekly', 'biweekly', 'monthly', 'custom');
CREATE TYPE checkin_status AS ENUM ('scheduled', 'pending', 'completed', 'missed');

-- Progress & Body
CREATE TYPE body_site AS ENUM (
    'neck', 'chest', 'waist', 'abdomen', 'hip',
    'arm_left', 'arm_right', 'arm_left_contracted', 'arm_right_contracted',
    'forearm_left', 'forearm_right',
    'thigh_left', 'thigh_right', 'thigh_proximal_left', 'thigh_proximal_right',
    'calf_left', 'calf_right',
    'shoulder_width'
);
CREATE TYPE biomarker_category AS ENUM (
    'metabolic', 'lipid_profile', 'hormonal', 'vitamin_mineral',
    'hepatic', 'renal', 'inflammatory', 'thyroid', 'hematologic', 'other'
);
CREATE TYPE photo_position AS ENUM ('front', 'back', 'side_left', 'side_right', 'custom');

-- Communication
CREATE TYPE message_sender AS ENUM ('professional', 'patient', 'system');

-- Measurement source
CREATE TYPE measurement_source AS ENUM ('manual', 'inbody', 'scale_smart', 'import', 'other');
```

---

## 📊 Schemas Detalhados

---

### Identity Layer

#### `users`
Autenticação unificada — profissionais e pacientes.

```sql
CREATE TABLE users (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email           VARCHAR(255) NOT NULL UNIQUE,
    phone           VARCHAR(20),
    name            VARCHAR(255) NOT NULL,
    avatar_url      TEXT,
    role            user_role NOT NULL,
    auth_provider   VARCHAR(50) DEFAULT 'email',    -- email, google, apple
    auth_id         VARCHAR(255),                    -- ID externo (Firebase/Supabase Auth)
    is_active       BOOLEAN DEFAULT true,
    last_login      TIMESTAMPTZ,
    created_at      TIMESTAMPTZ DEFAULT now(),
    updated_at      TIMESTAMPTZ DEFAULT now(),
    deleted_at      TIMESTAMPTZ
);

CREATE INDEX idx_users_email ON users (email) WHERE deleted_at IS NULL;
CREATE INDEX idx_users_auth ON users (auth_provider, auth_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_users_role ON users (role) WHERE deleted_at IS NULL;
```

#### `professionals`
Extensão do usuário para o profissional.

```sql
CREATE TABLE professionals (
    id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id                 UUID NOT NULL UNIQUE REFERENCES users(id),
    profession              VARCHAR(100) NOT NULL,    -- nutricionista, preparador físico, nutrólogo
    license_number          VARCHAR(50),              -- CRN, CREF, CRM
    license_type            VARCHAR(20),              -- 'CRN', 'CREF', 'CRM'
    bio                     TEXT,
    instagram               VARCHAR(100),
    website                 VARCHAR(255),
    timezone                VARCHAR(50) DEFAULT 'America/Sao_Paulo',
    onboarding_completed    BOOLEAN DEFAULT false,
    default_checkin_cadence checkin_cadence DEFAULT 'weekly',
    created_at              TIMESTAMPTZ DEFAULT now(),
    updated_at              TIMESTAMPTZ DEFAULT now(),
    deleted_at              TIMESTAMPTZ
);

CREATE INDEX idx_professionals_user ON professionals (user_id) WHERE deleted_at IS NULL;
```

#### `subscriptions`
Controle de plano e billing.

```sql
CREATE TABLE subscriptions (
    id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    professional_id         UUID NOT NULL REFERENCES professionals(id),
    plan                    subscription_plan NOT NULL DEFAULT 'free',
    status                  subscription_status NOT NULL DEFAULT 'active',
    billing_provider        VARCHAR(50),            -- stripe, asaas, manual
    billing_external_id     VARCHAR(255),           -- ID no gateway
    current_period_start    TIMESTAMPTZ,
    current_period_end      TIMESTAMPTZ,
    patient_limit           INT NOT NULL DEFAULT 5,
    created_at              TIMESTAMPTZ DEFAULT now(),
    updated_at              TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_subscriptions_professional ON subscriptions (professional_id);
CREATE INDEX idx_subscriptions_active ON subscriptions (status) WHERE status = 'active';
```

---

### Core Domain

#### `branding`
Identidade visual do profissional (marca própria leve).

```sql
CREATE TABLE branding (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    professional_id UUID NOT NULL UNIQUE REFERENCES professionals(id),
    brand_name      VARCHAR(100),                   -- Nome do método
    logo_url        TEXT,
    primary_color   VARCHAR(7) DEFAULT '#6C63FF',
    secondary_color VARCHAR(7) DEFAULT '#F5F5F5',
    accent_color    VARCHAR(7),
    custom_domain   VARCHAR(255),                   -- futuro: PRO
    config          JSONB DEFAULT '{}',             -- extensível: fontes, estilos
    created_at      TIMESTAMPTZ DEFAULT now(),
    updated_at      TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_branding_professional ON branding (professional_id);
```

#### `patients`
Paciente vinculado a um profissional.

```sql
CREATE TABLE patients (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id             UUID NOT NULL REFERENCES users(id),
    professional_id     UUID NOT NULL REFERENCES professionals(id),
    status              patient_status NOT NULL DEFAULT 'active',

    -- Objetivo e contexto
    primary_goal        VARCHAR(255),           -- "Perder 8kg", "Ganhar massa"
    target_weight_kg    DECIMAL(5,1),           -- peso-alvo
    notes               TEXT,
    tags                TEXT[],                 -- tags livres para organização

    -- Dados clínicos básicos (imutáveis/raramente alterados)
    birth_date          DATE,
    gender              patient_gender,
    height_cm           DECIMAL(5,1),

    -- Snapshot de entrada (baseline)
    initial_weight_kg   DECIMAL(5,1),
    initial_body_fat_pct DECIMAL(4,1),
    initial_lean_mass_kg DECIMAL(5,1),

    -- Controle operacional
    started_at          TIMESTAMPTZ DEFAULT now(),
    last_checkin_at     TIMESTAMPTZ,
    next_checkin_at     TIMESTAMPTZ,
    risk_score          SMALLINT DEFAULT 0,     -- 0-100, calculado via trigger/job

    -- Protocolo ativo (desnormalizado para performance no CRM)
    active_protocol_id  UUID,                   -- FK adicionada após criação de protocols

    created_at          TIMESTAMPTZ DEFAULT now(),
    updated_at          TIMESTAMPTZ DEFAULT now(),
    deleted_at          TIMESTAMPTZ,

    UNIQUE(user_id, professional_id)
);

CREATE INDEX idx_patients_professional ON patients (professional_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_patients_status ON patients (professional_id, status) WHERE deleted_at IS NULL;
CREATE INDEX idx_patients_next_checkin ON patients (professional_id, next_checkin_at) WHERE deleted_at IS NULL;
CREATE INDEX idx_patients_risk ON patients (professional_id, risk_score DESC)
    WHERE deleted_at IS NULL AND status = 'active';
CREATE INDEX idx_patients_goal ON patients (professional_id, primary_goal) WHERE deleted_at IS NULL;
```

---

### Integrated Protocol Domain

> **Decisão de arquitetura:** Um protocolo é um **bundle integrado**. Contém módulos de nutrição, treino, suplementação e hidratação como componentes do mesmo protocolo. Isso garante que o profissional crie, versione e replique protocolos completos de forma atômica.

#### `protocol_templates`
Templates compostos reutilizáveis — o profissional cria 1 vez e aplica em N pacientes.

```sql
CREATE TABLE protocol_templates (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    professional_id UUID NOT NULL REFERENCES professionals(id),
    name            VARCHAR(255) NOT NULL,          -- "Protocolo Cutting 12sem"
    description     TEXT,
    duration_weeks  SMALLINT,                       -- duração padrão
    tags            TEXT[],
    is_public       BOOLEAN DEFAULT false,          -- futuro: marketplace
    usage_count     INT DEFAULT 0,
    created_at      TIMESTAMPTZ DEFAULT now(),
    updated_at      TIMESTAMPTZ DEFAULT now(),
    deleted_at      TIMESTAMPTZ
);

CREATE INDEX idx_templates_professional ON protocol_templates (professional_id) WHERE deleted_at IS NULL;
```

#### `protocol_template_modules`
Módulos que compõem o template — define quais pilares estão incluídos e seu conteúdo base.

```sql
CREATE TABLE protocol_template_modules (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    template_id     UUID NOT NULL REFERENCES protocol_templates(id) ON DELETE CASCADE,
    module_type     protocol_module_type NOT NULL,   -- nutrition, training, supplementation, hydration
    name            VARCHAR(255) NOT NULL,
    content         JSONB NOT NULL DEFAULT '{}',     -- conteúdo estruturado do módulo template
    sort_order      SMALLINT DEFAULT 0,
    created_at      TIMESTAMPTZ DEFAULT now(),
    updated_at      TIMESTAMPTZ DEFAULT now(),

    UNIQUE(template_id, module_type)                 -- 1 módulo por tipo por template
);

CREATE INDEX idx_template_modules_template ON protocol_template_modules (template_id);
```

**Exemplo de `content` para módulo `nutrition`:**
```json
{
  "target_calories": 2200,
  "target_protein_g": 180,
  "target_carbs_g": 220,
  "target_fat_g": 70,
  "target_fiber_g": 30,
  "notes": "Base para cutting com preservação de massa magra"
}
```

#### `protocols`
Protocolo ativo atribuído a um paciente — **bundle integrado**.

```sql
CREATE TABLE protocols (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id      UUID NOT NULL REFERENCES patients(id),
    professional_id UUID NOT NULL REFERENCES professionals(id),
    template_id     UUID REFERENCES protocol_templates(id),     -- origem (opcional)
    name            VARCHAR(255) NOT NULL,
    description     TEXT,
    status          protocol_status NOT NULL DEFAULT 'active',
    current_version INT NOT NULL DEFAULT 1,
    starts_at       DATE NOT NULL,
    ends_at         DATE,
    duration_weeks  SMALLINT,
    created_at      TIMESTAMPTZ DEFAULT now(),
    updated_at      TIMESTAMPTZ DEFAULT now(),
    deleted_at      TIMESTAMPTZ
);

-- FK circular: patients.active_protocol_id → protocols.id
ALTER TABLE patients ADD CONSTRAINT fk_patients_active_protocol
    FOREIGN KEY (active_protocol_id) REFERENCES protocols(id);

CREATE INDEX idx_protocols_patient ON protocols (patient_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_protocols_professional ON protocols (professional_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_protocols_active ON protocols (patient_id, status)
    WHERE deleted_at IS NULL AND status = 'active';
CREATE INDEX idx_protocols_template ON protocols (template_id) WHERE template_id IS NOT NULL;
```

#### `protocol_modules`
Módulos ativos dentro do protocolo do paciente — cada pilar é um módulo.

```sql
CREATE TABLE protocol_modules (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    protocol_id     UUID NOT NULL REFERENCES protocols(id) ON DELETE CASCADE,
    module_type     protocol_module_type NOT NULL,
    name            VARCHAR(255) NOT NULL,
    is_active       BOOLEAN DEFAULT true,
    config          JSONB DEFAULT '{}',              -- config específica do módulo
    sort_order      SMALLINT DEFAULT 0,
    created_at      TIMESTAMPTZ DEFAULT now(),
    updated_at      TIMESTAMPTZ DEFAULT now(),

    UNIQUE(protocol_id, module_type)
);

CREATE INDEX idx_protocol_modules_protocol ON protocol_modules (protocol_id);
CREATE INDEX idx_protocol_modules_type ON protocol_modules (protocol_id, module_type);
```

#### `protocol_versions`
Versionamento imutável — cada alteração do protocolo gera novo snapshot.

```sql
CREATE TABLE protocol_versions (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    protocol_id UUID NOT NULL REFERENCES protocols(id),
    version     INT NOT NULL,
    snapshot    JSONB NOT NULL,              -- snapshot completo (todos os módulos) nesta versão
    change_note TEXT,
    changed_by  UUID NOT NULL,              -- professional user_id
    created_at  TIMESTAMPTZ DEFAULT now(),

    UNIQUE(protocol_id, version)
);

CREATE INDEX idx_protocol_versions ON protocol_versions (protocol_id, version DESC);
```

---

#### Módulo: Nutrição

##### `meal_plans`
Plano alimentar — vinculado ao módulo de nutrição do protocolo.

```sql
CREATE TABLE meal_plans (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    protocol_module_id  UUID NOT NULL REFERENCES protocol_modules(id) ON DELETE CASCADE,
    protocol_id         UUID NOT NULL REFERENCES protocols(id),     -- desnormalizado para query
    name                VARCHAR(255) NOT NULL,      -- "Dia de Treino", "Dia de Descanso"
    description         TEXT,
    target_calories     INT,
    target_protein_g    DECIMAL(6,1),
    target_carbs_g      DECIMAL(6,1),
    target_fat_g        DECIMAL(6,1),
    target_fiber_g      DECIMAL(6,1),
    target_water_ml     INT,                        -- meta de água para este dia
    applicable_days     day_of_week[],
    sort_order          SMALLINT DEFAULT 0,
    created_at          TIMESTAMPTZ DEFAULT now(),
    updated_at          TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_meal_plans_module ON meal_plans (protocol_module_id);
CREATE INDEX idx_meal_plans_protocol ON meal_plans (protocol_id);
```

##### `meals`
Refeições individuais dentro do plano alimentar.

```sql
CREATE TABLE meals (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    meal_plan_id    UUID NOT NULL REFERENCES meal_plans(id) ON DELETE CASCADE,
    type            meal_type NOT NULL,
    custom_name     VARCHAR(100),
    scheduled_time  TIME,
    notes           TEXT,
    sort_order      SMALLINT DEFAULT 0,
    created_at      TIMESTAMPTZ DEFAULT now(),
    updated_at      TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_meals_plan ON meals (meal_plan_id, sort_order);
```

##### `meal_items`
Itens alimentares dentro de uma refeição.

```sql
CREATE TABLE meal_items (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    meal_id         UUID NOT NULL REFERENCES meals(id) ON DELETE CASCADE,
    name            VARCHAR(255) NOT NULL,          -- "Arroz integral"
    quantity        DECIMAL(8,1),
    unit            VARCHAR(30),                    -- "g", "ml", "unidade", "colher de sopa"
    calories        INT,
    protein_g       DECIMAL(6,1),
    carbs_g         DECIMAL(6,1),
    fat_g           DECIMAL(6,1),
    fiber_g         DECIMAL(6,1),
    sodium_mg       DECIMAL(7,1),
    sugar_g         DECIMAL(6,1),
    notes           TEXT,
    is_optional     BOOLEAN DEFAULT false,
    alternatives    JSONB DEFAULT '[]',             -- [{name, quantity, unit, calories, protein_g, ...}]
    sort_order      SMALLINT DEFAULT 0,
    created_at      TIMESTAMPTZ DEFAULT now(),
    updated_at      TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_meal_items_meal ON meal_items (meal_id, sort_order);
CREATE INDEX idx_meal_items_name ON meal_items USING gin (to_tsvector('portuguese', name));
```

---

#### Módulo: Treino

##### `training_plans`
Plano de treino — vinculado ao módulo de treino do protocolo.

```sql
CREATE TABLE training_plans (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    protocol_module_id  UUID NOT NULL REFERENCES protocol_modules(id) ON DELETE CASCADE,
    protocol_id         UUID NOT NULL REFERENCES protocols(id),
    name                VARCHAR(255) NOT NULL,          -- "Treino A - Superior"
    description         TEXT,
    applicable_days     day_of_week[],
    target_muscle_groups muscle_group[],                -- grupos musculares alvo
    duration_min        SMALLINT,
    sort_order          SMALLINT DEFAULT 0,
    created_at          TIMESTAMPTZ DEFAULT now(),
    updated_at          TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_training_plans_module ON training_plans (protocol_module_id);
CREATE INDEX idx_training_plans_protocol ON training_plans (protocol_id);
```

##### `training_exercises`
Exercícios normalizados dentro do treino — permite analytics por exercício.

```sql
CREATE TABLE training_exercises (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    training_plan_id UUID NOT NULL REFERENCES training_plans(id) ON DELETE CASCADE,
    name            VARCHAR(255) NOT NULL,          -- "Supino reto com barra"
    exercise_type   exercise_type DEFAULT 'strength',
    muscle_group    muscle_group,
    sets            SMALLINT,
    reps            VARCHAR(30),                    -- "8-12", "15", "até falha"
    rest_seconds    SMALLINT,
    load_suggestion VARCHAR(100),                   -- "70% 1RM", "20kg"
    tempo           VARCHAR(20),                    -- "3-1-2-0" (excêntrico-isométrico-concêntrico-início)
    notes           TEXT,
    video_url       TEXT,
    is_superset     BOOLEAN DEFAULT false,
    superset_group  SMALLINT,                       -- agrupar exercícios em supersets
    sort_order      SMALLINT DEFAULT 0,
    created_at      TIMESTAMPTZ DEFAULT now(),
    updated_at      TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_exercises_training ON training_exercises (training_plan_id, sort_order);
CREATE INDEX idx_exercises_muscle ON training_exercises (muscle_group);
```

---

#### Módulo: Suplementação

##### `supplementation_plans`
Plano de suplementação — normalizado com itens individuais.

```sql
CREATE TABLE supplementation_plans (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    protocol_module_id  UUID NOT NULL REFERENCES protocol_modules(id) ON DELETE CASCADE,
    protocol_id         UUID NOT NULL REFERENCES protocols(id),
    notes               TEXT,
    created_at          TIMESTAMPTZ DEFAULT now(),
    updated_at          TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_supplementation_module ON supplementation_plans (protocol_module_id);
```

##### `supplement_items`
Suplementos individuais — normalizados para analytics e replicação.

```sql
CREATE TABLE supplement_items (
    id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    supplementation_plan_id UUID NOT NULL REFERENCES supplementation_plans(id) ON DELETE CASCADE,
    name                    VARCHAR(255) NOT NULL,      -- "Creatina monohidratada"
    dosage                  DECIMAL(8,2) NOT NULL,      -- 5
    unit                    VARCHAR(30) NOT NULL,        -- "g", "mg", "UI", "mcg", "ml"
    frequency               VARCHAR(100) NOT NULL,       -- "1x ao dia", "2x ao dia"
    timing                  VARCHAR(100),                -- "Pós-treino", "Em jejum", "Antes de dormir"
    applicable_days         day_of_week[],               -- NULL = todos os dias
    notes                   TEXT,
    brand_suggestion        VARCHAR(100),                -- marca sugerida (opcional)
    sort_order              SMALLINT DEFAULT 0,
    created_at              TIMESTAMPTZ DEFAULT now(),
    updated_at              TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_supplement_items_plan ON supplement_items (supplementation_plan_id, sort_order);
```

---

#### Módulo: Hidratação

##### `hydration_plans`
Meta de hidratação diária — vinculada ao módulo de hidratação do protocolo.

```sql
CREATE TABLE hydration_plans (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    protocol_module_id  UUID NOT NULL REFERENCES protocol_modules(id) ON DELETE CASCADE,
    protocol_id         UUID NOT NULL REFERENCES protocols(id),
    daily_target_ml     INT NOT NULL,                   -- meta diária em ml (ex: 3000)
    per_kg_ml           DECIMAL(4,1),                   -- ml por kg de peso corporal (ex: 35.0)
    reminders_enabled   BOOLEAN DEFAULT true,
    reminder_interval_min INT DEFAULT 60,               -- lembrete a cada X minutos
    notes               TEXT,
    created_at          TIMESTAMPTZ DEFAULT now(),
    updated_at          TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_hydration_plans_module ON hydration_plans (protocol_module_id);
```

---

### Check-in Domain

#### `checkin_schedules`
Configuração de cadência de check-in por paciente.

```sql
CREATE TABLE checkin_schedules (
    id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id              UUID NOT NULL REFERENCES patients(id),
    professional_id         UUID NOT NULL REFERENCES professionals(id),
    cadence                 checkin_cadence NOT NULL DEFAULT 'weekly',
    custom_days             INT,                    -- se cadence = 'custom'
    preferred_day           day_of_week,
    preferred_time          TIME,
    reminder_hours_before   INT DEFAULT 24,
    form_schema             JSONB NOT NULL DEFAULT '{}',
    collect_body_composition BOOLEAN DEFAULT true,   -- pedir dados de composição corporal
    collect_measurements    BOOLEAN DEFAULT false,   -- pedir medidas corporais
    collect_photos          BOOLEAN DEFAULT true,    -- pedir fotos de progresso
    collect_water_intake    BOOLEAN DEFAULT true,    -- pedir info de hidratação
    is_active               BOOLEAN DEFAULT true,
    created_at              TIMESTAMPTZ DEFAULT now(),
    updated_at              TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_checkin_schedules_patient ON checkin_schedules (patient_id) WHERE is_active = true;
```

**Exemplo de `form_schema`:**
```json
{
  "sections": [
    {
      "key": "adherence",
      "label": "Adesão ao Protocolo",
      "fields": [
        { "key": "nutrition_adherence", "label": "Seguiu o plano alimentar?", "type": "scale_1_5", "required": true },
        { "key": "training_adherence", "label": "Seguiu o treino?", "type": "scale_1_5", "required": true },
        { "key": "supplement_adherence", "label": "Tomou os suplementos?", "type": "scale_1_5", "required": true },
        { "key": "water_adherence", "label": "Atingiu a meta de água?", "type": "scale_1_5", "required": true }
      ]
    },
    {
      "key": "wellness",
      "label": "Bem-estar",
      "fields": [
        { "key": "energy_level", "label": "Nível de energia", "type": "scale_1_5", "required": true },
        { "key": "sleep_quality", "label": "Qualidade do sono", "type": "scale_1_5", "required": true },
        { "key": "stress_level", "label": "Nível de estresse", "type": "scale_1_5", "required": false },
        { "key": "digestion", "label": "Digestão", "type": "scale_1_5", "required": false },
        { "key": "mood", "label": "Humor geral", "type": "scale_1_5", "required": false }
      ]
    },
    {
      "key": "open",
      "label": "Observações",
      "fields": [
        { "key": "observations", "label": "Como foi a semana?", "type": "text", "required": false },
        { "key": "difficulties", "label": "Dificuldades encontradas?", "type": "text", "required": false }
      ]
    }
  ]
}
```

#### `checkins`
Check-ins realizados (particionado por mês).

```sql
CREATE TABLE checkins (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id          UUID NOT NULL REFERENCES patients(id),
    professional_id     UUID NOT NULL REFERENCES professionals(id),
    schedule_id         UUID REFERENCES checkin_schedules(id),
    protocol_id         UUID REFERENCES protocols(id),          -- protocolo vigente no momento
    status              checkin_status NOT NULL DEFAULT 'scheduled',
    scheduled_at        TIMESTAMPTZ NOT NULL,
    completed_at        TIMESTAMPTZ,
    responses           JSONB DEFAULT '{}',
    professional_notes  TEXT,
    risk_delta          SMALLINT DEFAULT 0,     -- impacto no risk_score
    reviewed_at         TIMESTAMPTZ,
    reviewed_by         UUID,                   -- professional user_id
    created_at          TIMESTAMPTZ DEFAULT now(),
    updated_at          TIMESTAMPTZ DEFAULT now()
) PARTITION BY RANGE (scheduled_at);

CREATE INDEX idx_checkins_patient ON checkins (patient_id, scheduled_at DESC);
CREATE INDEX idx_checkins_professional ON checkins (professional_id, scheduled_at DESC);
CREATE INDEX idx_checkins_pending ON checkins (professional_id, status)
    WHERE status IN ('scheduled', 'pending');
CREATE INDEX idx_checkins_review ON checkins (professional_id, completed_at)
    WHERE status = 'completed' AND reviewed_at IS NULL;
CREATE INDEX idx_checkins_protocol ON checkins (protocol_id, scheduled_at DESC);
```

---

### Body Composition & Progress Domain

> **Princípio:** Dados de evolução corporal são **séries temporais append-only**. Cada medição é um ponto no tempo. Isso permite gráficos de evolução, cálculo de deltas, e alimenta modelos de IA.

#### `body_compositions`
Composição corporal — peso, gordura, massa magra, dados InBody-ready.

```sql
CREATE TABLE body_compositions (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id      UUID NOT NULL REFERENCES patients(id),
    professional_id UUID NOT NULL REFERENCES professionals(id),
    checkin_id      UUID REFERENCES checkins(id),           -- vinculado ao check-in (opcional)
    recorded_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    source          measurement_source NOT NULL DEFAULT 'manual',

    -- Peso e composição
    weight_kg           DECIMAL(5,1),
    body_fat_pct        DECIMAL(4,1),
    lean_mass_kg        DECIMAL(5,1),
    skeletal_muscle_kg  DECIMAL(5,1),       -- massa muscular esquelética (InBody)
    bone_mass_kg        DECIMAL(4,1),       -- massa óssea
    body_water_pct      DECIMAL(4,1),       -- percentual de água corporal
    body_water_l        DECIMAL(5,2),       -- litros de água corporal total

    -- Metabolismo
    bmr_kcal            INT,                -- taxa metabólica basal (kcal/dia)
    visceral_fat_level  SMALLINT,           -- nível de gordura visceral (1–59, InBody/Omron)
    metabolic_age       SMALLINT,           -- idade metabólica estimada

    -- Índices
    bmi                 DECIMAL(4,1),       -- IMC calculado
    muscle_fat_ratio    DECIMAL(5,2),       -- razão massa magra / gordura

    -- InBody-specific (futuro)
    inbody_score        SMALLINT,           -- InBody Score (0–100)
    segmental_lean      JSONB,              -- {"right_arm": 3.2, "left_arm": 3.1, "trunk": 25.4, ...}
    segmental_fat       JSONB,              -- {"right_arm": 1.1, "left_arm": 1.0, "trunk": 8.5, ...}

    -- Importação
    raw_import_data     JSONB,              -- dados brutos importados (InBody PDF, balança inteligente)
    device_model        VARCHAR(100),       -- "InBody 270", "Xiaomi Scale 2"

    notes               TEXT,
    created_at          TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_body_comp_patient ON body_compositions (patient_id, recorded_at DESC);
CREATE INDEX idx_body_comp_professional ON body_compositions (professional_id, recorded_at DESC);
CREATE INDEX idx_body_comp_checkin ON body_compositions (checkin_id) WHERE checkin_id IS NOT NULL;
CREATE INDEX idx_body_comp_source ON body_compositions (patient_id, source);
CREATE INDEX idx_body_comp_weight_ts ON body_compositions (patient_id, recorded_at, weight_kg);
```

#### `body_measurements`
Medidas corporais por região — modelo **EAV normalizado** por body site.

```sql
CREATE TABLE body_measurements (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id      UUID NOT NULL REFERENCES patients(id),
    professional_id UUID NOT NULL REFERENCES professionals(id),
    checkin_id      UUID REFERENCES checkins(id),
    recorded_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    source          measurement_source NOT NULL DEFAULT 'manual',

    -- Medida específica
    body_site       body_site NOT NULL,             -- qual parte do corpo
    value_cm        DECIMAL(5,1) NOT NULL,          -- circunferência em cm

    notes           TEXT,
    created_at      TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_measurements_patient ON body_measurements (patient_id, recorded_at DESC);
CREATE INDEX idx_measurements_site ON body_measurements (patient_id, body_site, recorded_at DESC);
CREATE INDEX idx_measurements_checkin ON body_measurements (checkin_id) WHERE checkin_id IS NOT NULL;
```

> **Por que normalizar por body_site?** Permite queries como "evolução do braço direito nos últimos 6 meses", gráficos comparativos por região, e analytics sem alterar schema ao adicionar novas regiões.

#### `biomarker_panels`
Painéis de exames — agrupam biomarcadores de uma mesma coleta/exame.

```sql
CREATE TABLE biomarker_panels (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id      UUID NOT NULL REFERENCES patients(id),
    professional_id UUID NOT NULL REFERENCES professionals(id),
    name            VARCHAR(255) NOT NULL,          -- "Hemograma 15/01/2026", "Perfil lipídico"
    lab_name        VARCHAR(255),                   -- "Laboratório Fleury"
    collected_at    DATE NOT NULL,                  -- data da coleta
    file_url        TEXT,                           -- PDF do exame (S3/R2)
    notes           TEXT,
    created_at      TIMESTAMPTZ DEFAULT now(),
    updated_at      TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_panels_patient ON biomarker_panels (patient_id, collected_at DESC);
```

#### `biomarkers`
Biomarcadores individuais — dados laboratoriais com range de referência.

```sql
CREATE TABLE biomarkers (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    panel_id        UUID NOT NULL REFERENCES biomarker_panels(id) ON DELETE CASCADE,
    patient_id      UUID NOT NULL REFERENCES patients(id),     -- desnormalizado para query
    category        biomarker_category NOT NULL,

    name            VARCHAR(255) NOT NULL,          -- "Glicose em jejum", "Colesterol Total"
    code            VARCHAR(50),                    -- código padronizado (LOINC futuro)
    value           DECIMAL(10,3) NOT NULL,         -- valor numérico
    unit            VARCHAR(30) NOT NULL,           -- "mg/dL", "ng/mL", "UI/L", "mmol/L"

    -- Faixa de referência (do laboratório)
    ref_min         DECIMAL(10,3),
    ref_max         DECIMAL(10,3),
    is_within_range BOOLEAN,                        -- calculado: value BETWEEN ref_min AND ref_max

    -- Flags clínicos
    flag            VARCHAR(20),                    -- 'normal', 'low', 'high', 'critical_low', 'critical_high'

    notes           TEXT,
    created_at      TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_biomarkers_panel ON biomarkers (panel_id);
CREATE INDEX idx_biomarkers_patient ON biomarkers (patient_id, name, created_at DESC);
CREATE INDEX idx_biomarkers_category ON biomarkers (patient_id, category, created_at DESC);
CREATE INDEX idx_biomarkers_flag ON biomarkers (patient_id, flag)
    WHERE flag IN ('high', 'low', 'critical_high', 'critical_low');
```

**Biomarcadores comuns pré-cadastrados (seed data):**

| Categoria | Biomarcadores |
|---|---|
| **Metabólico** | Glicose em jejum, Hemoglobina glicada (HbA1c), Insulina em jejum, HOMA-IR |
| **Perfil Lipídico** | Colesterol Total, HDL, LDL, VLDL, Triglicerídeos |
| **Hormonal** | Testosterona Total, Testosterona Livre, Estradiol, Cortisol, IGF-1, TSH, T3 Livre, T4 Livre |
| **Vitaminas/Minerais** | Vitamina D (25-OH), Vitamina B12, Ferro sérico, Ferritina, Zinco, Magnésio |
| **Hepático** | TGO (AST), TGP (ALT), GGT, Bilirrubina Total |
| **Renal** | Creatinina, Ureia, Ácido Úrico, TFG estimada |
| **Inflamatório** | PCR ultrassensível, Homocisteína |
| **Hematológico** | Hemoglobina, Hematócrito, Leucócitos, Plaquetas |

#### `progress_photos`
Fotos de progresso (referências — storage externo S3/R2).

```sql
CREATE TABLE progress_photos (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id      UUID NOT NULL REFERENCES patients(id),
    professional_id UUID NOT NULL REFERENCES professionals(id),
    checkin_id      UUID REFERENCES checkins(id),
    body_comp_id    UUID REFERENCES body_compositions(id),  -- vinculado à composição corporal
    storage_key     TEXT NOT NULL,
    thumbnail_key   TEXT,
    position        photo_position NOT NULL,
    taken_at        TIMESTAMPTZ DEFAULT now(),
    notes           TEXT,
    created_at      TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_photos_patient ON progress_photos (patient_id, taken_at DESC);
CREATE INDEX idx_photos_checkin ON progress_photos (checkin_id) WHERE checkin_id IS NOT NULL;
CREATE INDEX idx_photos_position ON progress_photos (patient_id, position, taken_at DESC);
```

---

### Daily Tracking Domain

#### `daily_tasks`
Tarefas diárias materializadas a partir do protocolo ativo.

```sql
CREATE TABLE daily_tasks (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id      UUID NOT NULL REFERENCES patients(id),
    protocol_id     UUID REFERENCES protocols(id),
    module_type     protocol_module_type,           -- qual módulo gerou esta task
    task_date       DATE NOT NULL,
    type            VARCHAR(50) NOT NULL,           -- 'meal', 'training', 'supplement', 'water', 'custom'
    title           VARCHAR(255) NOT NULL,
    description     TEXT,
    reference_id    UUID,                           -- ID da refeição/treino/suplemento de origem
    scheduled_time  TIME,
    sort_order      SMALLINT DEFAULT 0,
    created_at      TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_daily_tasks_patient_date ON daily_tasks (patient_id, task_date);
CREATE INDEX idx_daily_tasks_lookup ON daily_tasks (patient_id, task_date, type);
CREATE INDEX idx_daily_tasks_module ON daily_tasks (patient_id, task_date, module_type);
```

#### `daily_task_completions`
Registro de conclusão das tarefas diárias (checklist do paciente).

```sql
CREATE TABLE daily_task_completions (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    task_id         UUID NOT NULL REFERENCES daily_tasks(id) ON DELETE CASCADE,
    patient_id      UUID NOT NULL REFERENCES patients(id),
    completed       BOOLEAN NOT NULL DEFAULT true,
    completed_at    TIMESTAMPTZ DEFAULT now(),
    notes           TEXT,

    UNIQUE(task_id)
);

CREATE INDEX idx_completions_patient ON daily_task_completions (patient_id, completed_at DESC);
```

#### `water_intake_logs`
Registro de ingestão de água — série temporal granular.

```sql
CREATE TABLE water_intake_logs (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id      UUID NOT NULL REFERENCES patients(id),
    intake_date     DATE NOT NULL,
    amount_ml       INT NOT NULL,                   -- quantidade ingerida neste registro
    logged_at       TIMESTAMPTZ DEFAULT now(),
    source          VARCHAR(30) DEFAULT 'manual',   -- 'manual', 'reminder', 'smart_bottle'
    created_at      TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_water_patient_date ON water_intake_logs (patient_id, intake_date);
CREATE INDEX idx_water_daily_total ON water_intake_logs (patient_id, intake_date, amount_ml);
```

> **Nota:** O total diário é calculado via `SUM(amount_ml) WHERE intake_date = X`. Para dashboards, usar a materialized view `mv_patient_dashboard`.

---

### Communication Domain

#### `threads`
Threads contextuais (vinculadas a paciente, check-in, protocolo).

```sql
CREATE TABLE threads (
    id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id              UUID NOT NULL REFERENCES patients(id),
    professional_id         UUID NOT NULL REFERENCES professionals(id),
    subject                 VARCHAR(255),
    context_type            VARCHAR(50),            -- 'checkin', 'protocol', 'biomarker', 'general'
    context_id              UUID,
    is_archived             BOOLEAN DEFAULT false,
    last_message_at         TIMESTAMPTZ,
    unread_by_professional  SMALLINT DEFAULT 0,
    unread_by_patient       SMALLINT DEFAULT 0,
    created_at              TIMESTAMPTZ DEFAULT now(),
    updated_at              TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_threads_patient ON threads (patient_id) WHERE is_archived = false;
CREATE INDEX idx_threads_professional ON threads (professional_id, last_message_at DESC)
    WHERE is_archived = false;
CREATE INDEX idx_threads_unread ON threads (professional_id)
    WHERE unread_by_professional > 0 AND is_archived = false;
```

#### `messages`
Mensagens dentro de threads (particionada para escala).

```sql
CREATE TABLE messages (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    thread_id       UUID NOT NULL REFERENCES threads(id),
    sender_type     message_sender NOT NULL,
    sender_id       UUID NOT NULL,
    content         TEXT NOT NULL,
    attachments     JSONB DEFAULT '[]',
    is_read         BOOLEAN DEFAULT false,
    created_at      TIMESTAMPTZ DEFAULT now()
) PARTITION BY RANGE (created_at);

CREATE INDEX idx_messages_thread ON messages (thread_id, created_at DESC);
CREATE INDEX idx_messages_unread ON messages (thread_id) WHERE is_read = false;
```

---

### Analytics Layer

> **Princípio:** Materialized views pré-computam métricas para dashboards. Refresh periódico via `pg_cron` ou job da aplicação. Evita queries complexas em tempo real.

#### `mv_patient_dashboard`
Snapshot analítico para o CRM do profissional — **uma linha por paciente**.

```sql
CREATE MATERIALIZED VIEW mv_patient_dashboard AS
SELECT
    p.id AS patient_id,
    p.professional_id,
    p.status,
    p.primary_goal,
    p.risk_score,
    p.started_at,
    u.name AS patient_name,

    -- Último peso e composição
    bc_latest.weight_kg AS current_weight_kg,
    bc_latest.body_fat_pct AS current_body_fat_pct,
    bc_latest.lean_mass_kg AS current_lean_mass_kg,
    bc_latest.bmi AS current_bmi,
    bc_latest.recorded_at AS last_weigh_in,

    -- Delta de peso (vs baseline)
    bc_latest.weight_kg - p.initial_weight_kg AS weight_delta_kg,

    -- Delta de gordura (vs baseline)
    bc_latest.body_fat_pct - p.initial_body_fat_pct AS body_fat_delta_pct,

    -- Último check-in
    ci_latest.completed_at AS last_checkin_completed,
    ci_latest.status AS last_checkin_status,

    -- Adesão ao check-in (últimos 30 dias)
    ci_stats.total_checkins_30d,
    ci_stats.completed_checkins_30d,
    CASE WHEN ci_stats.total_checkins_30d > 0
        THEN ROUND(ci_stats.completed_checkins_30d::DECIMAL / ci_stats.total_checkins_30d * 100, 1)
        ELSE 0
    END AS checkin_adherence_pct,

    -- Adesão diária (últimos 7 dias)
    dt_stats.total_tasks_7d,
    dt_stats.completed_tasks_7d,
    CASE WHEN dt_stats.total_tasks_7d > 0
        THEN ROUND(dt_stats.completed_tasks_7d::DECIMAL / dt_stats.total_tasks_7d * 100, 1)
        ELSE 0
    END AS daily_adherence_pct,

    -- Hidratação (média últimos 7 dias)
    water_stats.avg_water_ml_7d,

    -- Protocolo ativo
    proto.name AS active_protocol_name,
    proto.starts_at AS protocol_start,

    -- Dias desde último contato
    EXTRACT(DAY FROM now() - GREATEST(ci_latest.completed_at, p.last_checkin_at, p.started_at)) AS days_since_contact

FROM patients p
JOIN users u ON u.id = p.user_id
LEFT JOIN protocols proto ON proto.id = p.active_protocol_id

-- Última composição corporal
LEFT JOIN LATERAL (
    SELECT weight_kg, body_fat_pct, lean_mass_kg, bmi, recorded_at
    FROM body_compositions
    WHERE patient_id = p.id
    ORDER BY recorded_at DESC LIMIT 1
) bc_latest ON true

-- Último check-in
LEFT JOIN LATERAL (
    SELECT completed_at, status
    FROM checkins
    WHERE patient_id = p.id
    ORDER BY scheduled_at DESC LIMIT 1
) ci_latest ON true

-- Stats de check-in 30d
LEFT JOIN LATERAL (
    SELECT
        COUNT(*) AS total_checkins_30d,
        COUNT(*) FILTER (WHERE status = 'completed') AS completed_checkins_30d
    FROM checkins
    WHERE patient_id = p.id AND scheduled_at >= now() - INTERVAL '30 days'
) ci_stats ON true

-- Stats de tasks 7d
LEFT JOIN LATERAL (
    SELECT
        COUNT(*) AS total_tasks_7d,
        COUNT(dtc.id) AS completed_tasks_7d
    FROM daily_tasks dt
    LEFT JOIN daily_task_completions dtc ON dtc.task_id = dt.id
    WHERE dt.patient_id = p.id AND dt.task_date >= CURRENT_DATE - 7
) dt_stats ON true

-- Média de água 7d
LEFT JOIN LATERAL (
    SELECT COALESCE(AVG(daily_total), 0)::INT AS avg_water_ml_7d
    FROM (
        SELECT SUM(amount_ml) AS daily_total
        FROM water_intake_logs
        WHERE patient_id = p.id AND intake_date >= CURRENT_DATE - 7
        GROUP BY intake_date
    ) sub
) water_stats ON true

WHERE p.deleted_at IS NULL;

CREATE UNIQUE INDEX idx_mv_patient_dash_id ON mv_patient_dashboard (patient_id);
CREATE INDEX idx_mv_patient_dash_professional ON mv_patient_dashboard (professional_id, risk_score DESC);
CREATE INDEX idx_mv_patient_dash_status ON mv_patient_dashboard (professional_id, status);

-- Refresh a cada 15 minutos via pg_cron
-- SELECT cron.schedule('refresh-patient-dashboard', '*/15 * * * *', 'REFRESH MATERIALIZED VIEW CONCURRENTLY mv_patient_dashboard');
```

#### `mv_protocol_effectiveness`
Efetividade dos protocols — correlaciona templates com resultados.

```sql
CREATE MATERIALIZED VIEW mv_protocol_effectiveness AS
SELECT
    pt.id AS template_id,
    pt.professional_id,
    pt.name AS template_name,
    pt.usage_count,

    -- Quantos pacientes usaram
    COUNT(DISTINCT pr.patient_id) AS total_patients,

    -- Resultados médios
    AVG(bc_end.weight_kg - bc_start.weight_kg) AS avg_weight_change_kg,
    AVG(bc_end.body_fat_pct - bc_start.body_fat_pct) AS avg_body_fat_change_pct,
    AVG(bc_end.lean_mass_kg - bc_start.lean_mass_kg) AS avg_lean_mass_change_kg,

    -- Adesão média
    AVG(ci_adherence.adherence_pct) AS avg_checkin_adherence_pct,

    -- Retenção
    COUNT(*) FILTER (WHERE p.status = 'active')::DECIMAL / NULLIF(COUNT(*), 0) * 100 AS retention_pct

FROM protocol_templates pt
JOIN protocols pr ON pr.template_id = pt.id
JOIN patients p ON p.id = pr.patient_id

-- Composição corporal no início do protocolo
LEFT JOIN LATERAL (
    SELECT weight_kg, body_fat_pct, lean_mass_kg
    FROM body_compositions
    WHERE patient_id = pr.patient_id AND recorded_at >= pr.starts_at
    ORDER BY recorded_at ASC LIMIT 1
) bc_start ON true

-- Composição corporal mais recente
LEFT JOIN LATERAL (
    SELECT weight_kg, body_fat_pct, lean_mass_kg
    FROM body_compositions
    WHERE patient_id = pr.patient_id
    ORDER BY recorded_at DESC LIMIT 1
) bc_end ON true

-- Adesão de check-in por protocolo
LEFT JOIN LATERAL (
    SELECT
        CASE WHEN COUNT(*) > 0
            THEN COUNT(*) FILTER (WHERE status = 'completed')::DECIMAL / COUNT(*) * 100
            ELSE 0
        END AS adherence_pct
    FROM checkins
    WHERE patient_id = pr.patient_id AND protocol_id = pr.id
) ci_adherence ON true

WHERE pt.deleted_at IS NULL
GROUP BY pt.id, pt.professional_id, pt.name, pt.usage_count;

CREATE UNIQUE INDEX idx_mv_proto_eff_id ON mv_protocol_effectiveness (template_id);
CREATE INDEX idx_mv_proto_eff_professional ON mv_protocol_effectiveness (professional_id);
```

#### `audit_log`
Log de ações para compliance e analytics.

```sql
CREATE TABLE audit_log (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    actor_id        UUID NOT NULL,
    actor_role      user_role NOT NULL,
    action          VARCHAR(100) NOT NULL,       -- 'protocol.created', 'checkin.completed', etc.
    resource_type   VARCHAR(100) NOT NULL,
    resource_id     UUID NOT NULL,
    metadata        JSONB DEFAULT '{}',
    ip_address      INET,
    created_at      TIMESTAMPTZ DEFAULT now()
) PARTITION BY RANGE (created_at);

CREATE INDEX idx_audit_actor ON audit_log (actor_id, created_at DESC);
CREATE INDEX idx_audit_resource ON audit_log (resource_type, resource_id, created_at DESC);
```

---

## 🔐 Row-Level Security (RLS)

```sql
-- Profissional acessa apenas seus dados
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;
CREATE POLICY patients_pro_isolation ON patients
    USING (professional_id = current_setting('app.current_professional_id')::UUID);

ALTER TABLE protocols ENABLE ROW LEVEL SECURITY;
CREATE POLICY protocols_pro_isolation ON protocols
    USING (professional_id = current_setting('app.current_professional_id')::UUID);

ALTER TABLE checkins ENABLE ROW LEVEL SECURITY;
CREATE POLICY checkins_pro_isolation ON checkins
    USING (professional_id = current_setting('app.current_professional_id')::UUID);

ALTER TABLE body_compositions ENABLE ROW LEVEL SECURITY;
CREATE POLICY body_comp_pro_isolation ON body_compositions
    USING (professional_id = current_setting('app.current_professional_id')::UUID);

ALTER TABLE body_measurements ENABLE ROW LEVEL SECURITY;
CREATE POLICY measurements_pro_isolation ON body_measurements
    USING (professional_id = current_setting('app.current_professional_id')::UUID);

ALTER TABLE biomarker_panels ENABLE ROW LEVEL SECURITY;
CREATE POLICY panels_pro_isolation ON biomarker_panels
    USING (professional_id = current_setting('app.current_professional_id')::UUID);

-- Paciente acessa apenas seus próprios dados
CREATE POLICY patients_self_access ON patients
    FOR SELECT USING (user_id = current_setting('app.current_user_id')::UUID);

CREATE POLICY body_comp_patient_access ON body_compositions
    FOR SELECT USING (patient_id IN (
        SELECT id FROM patients WHERE user_id = current_setting('app.current_user_id')::UUID
    ));

CREATE POLICY water_patient_access ON water_intake_logs
    FOR ALL USING (patient_id IN (
        SELECT id FROM patients WHERE user_id = current_setting('app.current_user_id')::UUID
    ));
```

---

## 🗂️ Estratégia de Indexação

### Queries mais frequentes

| Query | Índice |
|---|---|
| CRM: listar pacientes do profissional | `idx_patients_professional` |
| CRM: filtrar por status | `idx_patients_status` |
| CRM: pacientes em risco | `idx_patients_risk` |
| CRM: próximos check-ins | `idx_patients_next_checkin` |
| Check-ins pendentes de review | `idx_checkins_review` |
| Histórico de check-ins | `idx_checkins_patient` |
| Tarefas do dia | `idx_daily_tasks_patient_date` |
| Evolução de peso (gráfico) | `idx_body_comp_weight_ts` |
| Evolução por região corporal | `idx_measurements_site` |
| Biomarcadores fora do range | `idx_biomarkers_flag` |
| Histórico de biomarcador | `idx_biomarkers_patient` |
| Total de água do dia | `idx_water_patient_date` |
| Mensagens não lidas | `idx_threads_unread` |
| Busca de alimentos | `idx_meal_items_name` (GIN/tsvector) |
| Efetividade de protocolo | `mv_protocol_effectiveness` |
| Dashboard do paciente | `mv_patient_dashboard` |

---

## 📈 Estimativas de Volume (Ano 1–3)

| Tabela | Ano 1 (3k pros) | Ano 2 (8k pros) | Ano 3 (10k+ pros) |
|---|---|---|---|
| `users` | ~60k | ~200k | ~300k+ |
| `patients` | ~90k | ~300k | ~500k+ |
| `protocols` | ~100k | ~400k | ~700k+ |
| `protocol_modules` | ~300k | ~1.2M | ~2M+ |
| `meal_items` | ~2M | ~8M | ~15M+ |
| `training_exercises` | ~500k | ~2M | ~4M+ |
| `checkins` | ~500k | ~2M | ~5M+ |
| `body_compositions` | ~500k | ~2M | ~5M+ |
| `body_measurements` | ~2M | ~8M | ~20M+ |
| `biomarkers` | ~200k | ~1M | ~3M+ |
| `water_intake_logs` | ~5M | ~25M | ~70M+ |
| `daily_tasks` | ~3M | ~15M | ~40M+ |
| `messages` | ~1M | ~5M | ~15M+ |

> **Partitioning obrigatório:** `checkins`, `messages`, `water_intake_logs`, `audit_log`
> **Partitioning recomendado (Ano 2+):** `body_compositions`, `body_measurements`, `daily_tasks`

---

## 🔄 Diagrama de Relacionamentos (ER)

```
users 1──1 professionals
users 1──N patients (via user_id)
professionals 1──N patients
professionals 1──1 branding
professionals 1──1 subscriptions

professionals 1──N protocol_templates
protocol_templates 1──N protocol_template_modules

patients 1──N protocols
protocols N──1 protocol_templates (opcional)
protocols 1──N protocol_modules
protocols 1──N protocol_versions

protocol_modules[nutrition] 1──N meal_plans
meal_plans 1──N meals
meals 1──N meal_items

protocol_modules[training] 1──N training_plans
training_plans 1──N training_exercises

protocol_modules[supplementation] 1──N supplementation_plans
supplementation_plans 1──N supplement_items

protocol_modules[hydration] 1──1 hydration_plans

patients 1──1 checkin_schedules (ativo)
patients 1──N checkins
checkins N──1 protocols (vigente)

patients 1──N body_compositions
patients 1──N body_measurements
patients 1──N biomarker_panels
biomarker_panels 1──N biomarkers
patients 1──N progress_photos
patients 1──N water_intake_logs

patients 1──N daily_tasks
daily_tasks 1──0..1 daily_task_completions

patients 1──N threads
threads 1──N messages
```

---

## 🧬 Fluxo: Replicar Protocolo Integrado

```
1. Profissional cria Protocol Template
   └── Template Module: nutrition  (macros base, notas)
   └── Template Module: training   (split semanal base)
   └── Template Module: supplementation (suplementos padrão)
   └── Template Module: hydration  (meta base ml/kg)

2. Aplicar template no Paciente X:
   └── Cria Protocol (linked to template)
       └── Module: nutrition → meal_plans → meals → meal_items
       │   (customizado para peso/meta do paciente)
       └── Module: training → training_plans → training_exercises
       │   (customizado para nível/objetivo)
       └── Module: supplementation → supplementation_plans → supplement_items
       │   (customizado para necessidades individuais)
       └── Module: hydration → hydration_plan
           (daily_target_ml = per_kg_ml × peso do paciente)

3. Qualquer alteração:
   └── protocol_versions registra snapshot imutável
   └── current_version incrementa
```

---

## 📊 Fluxo: Evolução Integrada do Paciente

```
Dados coletados ao longo do tempo (time series):

body_compositions ──► Peso, % gordura, massa magra, IMC, InBody score
                      → Gráfico: curva de peso, composição corporal, segmental
                      → Delta: Δ peso, Δ gordura, Δ massa magra desde baseline

body_measurements ──► Circunferências por região
                      → Gráfico: evolução de cintura, braço, coxa
                      → Visão: comparativo antes/depois por body_site

biomarker_panels  ──► Exames laboratoriais
+ biomarkers         → Gráfico: evolução de glicose, colesterol, testosterona
                      → Alertas: valores fora do range
                      → Correlação: dieta ↔ biomarcadores

water_intake_logs ──► Hidratação diária
                      → Gráfico: aderência à meta diária
                      → Média semanal vs meta

checkins          ──► Dados subjetivos (energia, sono, adesão, humor)
                      → Score de wellness ao longo do tempo

daily_task_completions ──► Aderência ao protocolo
                          → % refeições feitas, treinos feitos, suplementos tomados

progress_photos   ──► Registro visual vinculado a composição corporal
                      → Timeline: fotos + dados lado a lado

═══════════════════════════════════════════════════
mv_patient_dashboard ──► Todas as métricas consolidadas
                        → 1 query = visão completa do paciente
                        → Alimenta: CRM, alertas, IA de retenção
```

---

## 🚀 Roadmap de Implementação

### MVP (Mês 1–3)
- `users`, `professionals`, `subscriptions`, `branding`
- `patients` (sem analytics views)
- `protocols`, `protocol_modules` (nutrition + training mínimo)
- `meal_plans`, `meals`, `meal_items`
- `training_plans`, `training_exercises`
- `checkin_schedules`, `checkins`
- `body_compositions` (peso + gordura básico)
- `daily_tasks`, `daily_task_completions`
- `threads`, `messages`

### V1.1 (Mês 4–6)
- `protocol_templates`, `protocol_template_modules` (replicação)
- `supplementation_plans`, `supplement_items`
- `hydration_plans`, `water_intake_logs`
- `body_measurements` (circunferências por região)
- `progress_photos`
- `protocol_versions`
- `mv_patient_dashboard` (analytics)

### V1.2 (Mês 7–9)
- `biomarker_panels`, `biomarkers`
- `mv_protocol_effectiveness`
- `audit_log`
- Partitioning em tabelas de alto volume
- InBody import (raw_import_data parser)
- Full-text search em alimentos

### V2.0 (Ano 2 — IA)
- Tabela `ai_insights` (outputs de IA por paciente)
- Tabela `notifications` (push/email/SMS)
- Embeddings de check-ins para detecção de padrões
- Previsão de abandono baseada em `mv_patient_dashboard`
- TimescaleDB para séries temporais de alto volume
- Read replicas para queries analíticas

---

## ✅ Checklist de Qualidade v2

- [x] UUIDs v7 (time-sortable) em todas as PKs
- [x] Soft delete em entidades de negócio
- [x] Timestamps padrão em todas as tabelas
- [x] JSONB apenas para dados verdadeiramente semi-estruturados (exercícios, import, schema de form)
- [x] **Colunas tipadas para dados analíticos** (peso, medidas, biomarkers = colunas reais, não JSONB)
- [x] Índices otimizados para as 16+ queries mais frequentes
- [x] Partial indexes para reduzir overhead
- [x] RLS para isolamento (profissional e paciente)
- [x] Partitioning planejado para 7+ tabelas de alto volume
- [x] Enums PostgreSQL para integridade
- [x] **Protocolos integrados** — bundle atômico de nutrição + treino + suplementação + hidratação
- [x] **Templates compostos** — replicáveis com 1 clique
- [x] **Body compositions** — InBody-ready com dados segmentais
- [x] **Body measurements normalizados** — por body_site, análise por região
- [x] **Biomarkers estruturados** — com range de referência e flags
- [x] **Water intake tracking** — série temporal granular
- [x] **Materialized views** — dashboards sem queries complexas em tempo real
- [x] **Modelo orientado a séries temporais** — append-only para evolução
- [x] Roadmap de implementação faseado e realista
- [x] Alinhado 100% com Product Vision v1
