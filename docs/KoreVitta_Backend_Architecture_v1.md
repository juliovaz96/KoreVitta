# KoreVitta — Backend Architecture

## v1.0 — Baseline de Engenharia Backend, Dados, Segurança e Operações

> Baseado em:
> - `KoreVitta_ProductVision_v1.md`
> - `KoreVitta_PRD_v1.md`
> - `KoreVitta_DataModel_v2.md`
> - `KoreVitta_Frontend_Architecture_v1.md`

---

## 1. Objetivo do Documento

Este documento define a arquitetura backend oficial da KoreVitta para guiar:
- decisões de engenharia (escalabilidade, segurança e velocidade de entrega)
- consistência de domínio entre API, banco e processamento assíncrono
- padronização de implementação por squads backend
- evolução faseada do MVP até V1.2 e V2.0 (IA) sem retrabalho estrutural

Ele é o contrato técnico-produto do backend.

---

## 2. Princípios Não Negociáveis

### 2.1 Princípios de Produto
1. Simplicidade acima de tudo.
2. Clareza operacional para o profissional.
3. Evolução diária objetiva para o paciente.
4. Foco em retenção e acompanhamento, não em complexidade clínica infinita.

### 2.2 Princípios de Arquitetura Backend
1. **Domínio antes de framework**: modelagem por contextos de negócio.
2. **Fat services, thin views/controllers**: regra de negócio vive em serviços de aplicação.
3. **Contrato estável de API**: versionamento explícito e sem breaking changes silenciosos.
4. **Segurança por padrão**: RLS, least privilege, validação e auditoria em camadas.
5. **Escalabilidade pragmática**: otimizar para p95 real de uso, não para overengineering.
6. **Observabilidade obrigatória**: logs, métricas e traces desde o MVP.
7. **Idempotência em operações críticas**: evitar efeitos duplicados em retries/webhooks/jobs.
8. **Dados como ativo estratégico**: schemas analíticos orientados a séries temporais.

### 2.3 Princípios de Engenharia Moderna
1. API-first com OpenAPI e schemas tipados.
2. Padrões de resiliência (timeouts, retries exponenciais, circuit breaker por integração externa).
3. Jobs assíncronos para toda carga não interativa.
4. Qualidade contínua com gates de lint/test/security/build.
5. Deploy seguro com rollback rápido e migrações backward-compatible.

---

## 3. Stack Backend Oficial

### 3.1 Runtime e Framework
- **Python 3.12+**
- **Django 5.1+**
- **Django REST Framework 3.15+**
- **django-filter 24.x**
- **dj-rest-auth 7.x**
- **djangorestframework-simplejwt 5.x**

### 3.2 Processamento Assíncrono
- **Celery 5.4+**
- **Redis 7.x** (broker + cache)
- **Celery Beat** (scheduler)

### 3.3 Dados e Storage
- **PostgreSQL 16+**
- **Azure Blob Storage** (logos, fotos, exames, exports)
- **django-storages**

### 3.4 Operação e Segurança
- **Gunicorn 23.x**
- **Sentry SDK 2.x**
- **django-health-check 3.x**
- **django-cors-headers 4.x**
- **Whitenoise 6.x**

### 3.5 Infraestrutura (Azure)
- **Azure Container Apps**
- **Azure Database for PostgreSQL Flexible Server**
- **Azure Cache for Redis**
- **Azure Blob Storage**
- **Azure Key Vault**
- **Azure Monitor + Log Analytics**
- **Azure Container Registry**

---

## 4. Arquitetura da Solução (Visão Lógica)

## 4.1 Componentes de Runtime

```text
Client (Next.js)
   |
   v
Backend API (Django + DRF)
   |\
   | \__ PostgreSQL (dados transacionais + RLS + MVs)
   |
   \____ Redis (cache + broker)
         |
         +--> Celery Workers (jobs assíncronos)
         +--> Celery Beat (agendador)

Backend API/Workers --> Blob Storage (arquivos)
Backend API/Workers --> SendGrid (e-mail)
Backend API/Workers --> Sentry/Monitor (telemetria)
```

## 4.2 Boundarys Arquiteturais
1. **API Layer**: autenticação, autorização, validação de input, serialização.
2. **Application Layer**: regras de negócio e casos de uso (`services.py`).
3. **Domain/Data Layer**: entidades, repositórios ORM, políticas de acesso (RLS).
4. **Async Layer**: tarefas demoradas e agendadas.
5. **Integration Layer**: gateways externos (billing, e-mail, storage).

---

## 5. Estrutura de Código e Organização por Domínio

## 5.1 Estrutura Oficial

```text
korevitta/
  config/
    settings/
      base.py
      development.py
      staging.py
      production.py
    urls.py
    celery.py
    asgi.py
    wsgi.py
  apps/
    accounts/
    patients/
    protocols/
    nutrition/
    training/
    supplementation/
    hydration/
    checkins/
    progress/
    biomarkers/
    communication/
    daily/
    branding/
    subscriptions/
    analytics/
    audit/
    notifications/
  core/
    models.py
    permissions.py
    pagination.py
    exceptions.py
    middleware.py
    storage.py
  workers/
    tasks/
    schedules.py
```

## 5.2 Regras de Organização
1. Cada app de domínio deve conter `models`, `serializers`, `views`, `urls`, `services`, `tests`.
2. Lógica compartilhada somente em `core/` (sem acoplamento de negócio específico).
3. Fluxos transversais devem orquestrar serviços de domínio (não chamar model diretamente nas views).
4. Integrações externas passam por adapters dedicados (`notifications/services.py`, `subscriptions/services.py`).

---

## 6. Domain-Driven Design (Pragmático) e Bounded Contexts

### 6.1 Contextos
- **Identity & Access**: `accounts`, autenticação, sessão, roles.
- **Professional Operations**: `patients`, `branding`, `subscriptions`.
- **Protocol Engine**: `protocols`, `nutrition`, `training`, `supplementation`, `hydration`.
- **Engagement & Retention**: `checkins`, `daily`, `communication`.
- **Progress Intelligence**: `progress`, `biomarkers`, `analytics`.
- **Governance & Compliance**: `audit`, `notifications`.

### 6.2 Agregados Prioritários (MVP)
1. `Patient` (estado operacional + risco + protocolo ativo).
2. `Protocol` (bundle integrado + versionamento).
3. `Checkin` (cadência + submissão + revisão + impacto em risco).
4. `DailyTask` (materialização executável do protocolo).
5. `Thread` (comunicação contextual).

---

## 7. Data Architecture e Persistência

## 7.1 Base de Modelagem
- PostgreSQL como fonte primária de verdade.
- UUID como chave primária em todas as entidades.
- Soft delete (`deleted_at`) para entidades sensíveis de negócio.
- Timestamps padrão (`created_at`, `updated_at`) universalizados.
- JSONB apenas para estruturas variáveis (`responses`, `form_schema`, snapshots).
- Colunas tipadas para métricas analíticas (peso, gordura, biomarcadores, adesão).

## 7.2 Estratégia de Performance
- Índices compostos por padrão de query real (CRM, check-ins, tarefas, mensagens).
- Partial indexes para reduzir custo de escrita.
- Materialized Views para dashboards e inteligência de retenção.
- Partitioning por mês em tabelas de alto volume:
  - `checkins`
  - `messages`
  - `water_intake_logs`
  - `audit_log`

## 7.3 Governança de Migrações
1. Migration backward-compatible por padrão.
2. Evitar lock longo em produção (`CONCURRENTLY`, batches, janelas controladas).
3. Estratégia expand/contract para alterações de schema em produção.
4. Seeds versionadas para enums e catálogos (biomarkers, defaults).

---

## 8. Segurança, Autorização e Compliance (LGPD)

## 8.1 Modelo de Autenticação e Sessão
- JWT access token (TTL curto) + refresh token (TTL maior).
- Refresh controlado via endpoint dedicado e rotação de token.
- Revogação lógica de sessão em logout/reset crítico.

## 8.2 Autorização em Camadas
1. **Aplicação (DRF permissions)**: role e ownership.
2. **Banco (RLS)**: isolamento efetivo por `professional_id` e `patient` owner.
3. **Domínio**: validações de transição de estado e escopo de recurso.

## 8.3 Segurança de API
- HTTPS obrigatório (TLS 1.3).
- CORS restrito ao domínio frontend.
- Rate limiting por classe de endpoint:
  - Auth: mais restrito.
  - APIs de leitura/escrita: limiares maiores.
- Proteção contra injection/XSS com validação + escaping + ORM parameterizado.
- Headers de segurança (CSP, HSTS, X-Content-Type-Options, Referrer-Policy).

## 8.4 Gestão de Segredos e Criptografia
- Segredos centralizados no Azure Key Vault.
- Nada sensível em repositório ou `.env` de produção.
- Criptografia em trânsito e em repouso nos serviços gerenciados.

## 8.5 LGPD by Design
- Auditoria de ações críticas (`audit_log`).
- Exportação de dados sob solicitação (Art. 18).
- Soft delete + anonimização sob critérios legais.
- Trilha de acesso e alterações para accountability.

---

## 9. API Architecture e Padrões de Contrato

## 9.1 Convenções
- Base path versionado: `/v1/`.
- Payloads JSON.
- Paginação cursor-based para listas.
- Filtros declarativos por query params.
- Erros padronizados no formato RFC 7807.

## 9.2 Padrões de Endpoint
1. Endpoints de leitura devem ser cache-friendly quando aplicável.
2. Endpoints de escrita devem ter validação transacional explícita.
3. Endpoints críticos externos (webhooks, billing) devem aceitar idempotency key.
4. Toda mutação relevante deve produzir evento de auditoria.

## 9.3 Versionamento e Compatibilidade
- Breaking changes entram em `/v2/`.
- Em `/v1/`, apenas mudanças backward-compatible.
- Depreciações com janela e comunicação antecipada.

## 9.4 Documentação de API
- OpenAPI gerado e publicado por ambiente.
- Exemplos reais de request/response para fluxos P0.
- Contratos sincronizados com tipos frontend.

---

## 10. Regras de Negócio Críticas (Engine do Produto)

## 10.1 Protocol Engine
1. Um paciente possui no máximo um protocolo ativo.
2. Ativar novo protocolo arquiva o anterior automaticamente.
3. Mudanças em protocolo ativo geram snapshot imutável (`protocol_versions`).
4. Ativação dispara materialização de tarefas diárias.

## 10.2 Check-in Engine
1. Cadência configurável (weekly/biweekly/monthly/custom).
2. Jobs agendam check-ins futuros.
3. Check-ins atrasados/missed atualizam risco automaticamente.
4. Revisão do profissional altera estado e gera trilha de auditoria.

## 10.3 Risk Score Engine
- Cálculo orientado a eventos com recálculo assíncrono:
  - completude no prazo
  - atrasos
  - missed
  - adesão ao protocolo
  - consistência de sequência
- Atualização reflete status operacional (`active` / `at_risk`).

## 10.4 Daily Execution Engine
1. `daily_tasks` derivadas do protocolo e da data.
2. `daily_task_completions` consolida adesão diária.
3. Hidratação integra `water_intake_logs` para meta diária.

---

## 11. Processamento Assíncrono (Celery) e Resiliência

## 11.1 Jobs P0/P1
- `generate_daily_tasks`
- `check_missed_checkins`
- `recalculate_risk_score`
- `send_patient_invite`
- `send_password_reset`
- `generate_thumbnail`
- `refresh_patient_dashboard`
- `refresh_protocol_effectiveness`

## 11.2 Padrões Operacionais dos Jobs
1. Tarefas idempotentes por design.
2. Retry com backoff exponencial e limite de tentativas.
3. Dead-letter strategy para falhas recorrentes.
4. Time limits e soft time limits para evitar workers presos.
5. Instrumentação de duração, taxa de erro e filas pendentes.

## 11.3 Estratégia de Filas
- Separar filas por criticidade:
  - `critical` (auth, billing webhook, risco)
  - `default` (operações padrão)
  - `bulk` (refresh analítico, imports)
- Evita starvation e melhora previsibilidade de SLA interno.

---

## 12. Caching, Consistência e Estratégia de Leitura

## 12.1 Caching
- Redis para cache de leitura curta (lookup frequente, configs leves).
- Evitar cache em dados de alta mutação com necessidade de consistência imediata.
- TTL curto e invalidação orientada a domínio após mutações.

## 12.2 Consistência
- Banco relacional como source of truth.
- Materialized views para leitura agregada eventual-consistente.
- Evitar dupla escrita transacional sem outbox/evento.

## 12.3 Outbox Pattern (Evolução Recomendada)
- Para integrações críticas (billing/notificações), introduzir `event_outbox` para garantir entrega e rastreabilidade entre transação DB e processamento assíncrono.

---

## 13. Observabilidade e Operação

## 13.1 Logs
- Estruturados em JSON com `request_id`, `user_id`, `professional_id`, `route`, `status_code`, `latency_ms`.
- Níveis padronizados (`INFO`, `WARN`, `ERROR`).
- Redação de dados sensíveis (PII) antes do envio.

## 13.2 Métricas
- API: p50/p95/p99, taxa de erro, throughput, saturação.
- Banco: latência por query, locks, conexões ativas.
- Filas: tempo de fila, tempo de execução, retries, falhas.
- Produto: checkins completed rate, adesão diária, pacientes em risco.

## 13.3 Tracing
- Traces distribuídos entre API, worker e integrações externas.
- Correlação por `trace_id` + `request_id`.

## 13.4 Alertas Mínimos de Produção
1. API error rate acima do threshold.
2. p95 de endpoints críticos acima da meta.
3. Fila com backlog crescente sustentado.
4. Falha recorrente de refresh analítico.
5. Falha em envio de e-mails transacionais.

---

## 14. Infraestrutura e Deploy

## 14.1 Containers e Escala
- `korevitta-api`: escalonamento por concorrência HTTP.
- `korevitta-worker`: escalonamento por profundidade de fila.
- `korevitta-beat`: singleton obrigatório.

## 14.2 Ambientes
- `dev`: docker compose local.
- `staging`: integração/QA.
- `production`: HA, monitoramento completo, backups e política de rollback.

## 14.3 CI/CD (baseline)
1. Lint + type checks + testes.
2. Build de imagem + scan de vulnerabilidade.
3. Migrações validadas em staging.
4. Deploy progressivo (rolling/canary).
5. Verificação pós-deploy (`/health`, métricas, erro p95).

## 14.4 Estratégia de Rollback
- Rollback de aplicação independente de schema quando possível.
- Migrações reversíveis para mudanças críticas.
- Feature flags para desativar fluxos sem rollback total.

---

## 15. Performance e SLOs Backend

### 15.1 SLOs Operacionais
- API p95 < 300ms (endpoints comuns).
- API p99 < 800ms.
- Uptime mensal >= 99.5%.
- Jobs críticos com sucesso >= 99%.

### 15.2 Práticas de Otimização
1. Cursor pagination em listas grandes.
2. Select related/prefetch controlado para evitar N+1.
3. Query plans monitorados para endpoints críticos.
4. MVs para agregações pesadas.
5. Limite de payload e compressão de resposta.

---

## 16. Estratégia de Testes Backend

## 16.1 Pirâmide de Testes
1. **Unitários**: regras de domínio e services.
2. **Integração**: API + DB + permissões + RLS.
3. **Contract tests**: consistência com OpenAPI.
4. **E2E críticos**: autenticação, check-in, protocolo, mensagens.

## 16.2 Cobertura Prioritária
- cálculo de risk score
- ativação/versionamento de protocolo
- geração de tarefas diárias
- isolamento entre profissionais (RLS)
- webhooks de assinatura e idempotência

## 16.3 Gates de Qualidade
- `lint`
- `test`
- `security scan`
- `build`
- migrações aplicáveis em banco limpo

---

## 17. Estrutura de Segurança de Código e Supply Chain

1. Dependabot/Renovate para atualização de dependências.
2. SAST e scanner de dependências no CI.
3. Assinatura e rastreabilidade de imagens de container.
4. Política de secrets scanning no repositório.
5. Harden de runtime (usuário não-root, filesystem restrito quando possível).

---

## 18. Roadmap Técnico Backend (Faseado)

## Fase A — Foundation (MVP, Mês 1–3)
- autenticação + autorização base
- domínios P0 (`patients`, `protocols`, `checkins`, `daily`, `communication`)
- workers críticos e trilha mínima de auditoria
- observabilidade base (logs + erros)

## Fase B — V1.1 (Mês 4–6)
- templates compostos de protocolo
- hidratação e suplementação completas
- fotos e medidas corporais
- `mv_patient_dashboard`

## Fase C — V1.2 (Mês 7–9)
- biomarcadores e painel laboratorial
- `mv_protocol_effectiveness`
- audit log avançado e tuning de partitioning

## Fase D — V2.0 (Ano 2)
- assistente IA (sumários e insights)
- engine de retenção preditiva
- notificações avançadas e preferências

---

## 19. ADRs de Backend (Decisões Arquiteturais)

Registrar ADR para qualquer mudança estrutural em:
- stack principal backend
- estratégia de autenticação/autorização
- modelo de dados e partitioning
- política de filas e jobs críticos
- observabilidade e SLOs
- estratégia de deploy/rollback

Formato obrigatório:
1. Contexto
2. Decisão
3. Consequências
4. Alternativas rejeitadas
5. Plano de migração

---

## 20. Definition of Done Backend

Uma feature backend só é considerada pronta quando:
1. Requisito funcional entregue com regras de negócio completas.
2. Permissões e isolamento de dados validados (incluindo RLS quando aplicável).
3. Logs estruturados e eventos de auditoria implementados.
4. Testes essenciais passando (unit + integração relevante).
5. Telemetria mínima e alertas da feature instrumentados.
6. Documentação de API e mudanças arquiteturais atualizadas.

---

## 21. Declaração Final

A arquitetura backend da KoreVitta existe para sustentar um produto simples para o usuário e robusto para operar em escala.

Se o profissional consegue acompanhar melhor seus pacientes e o paciente percebe progresso diário com clareza, o backend está cumprindo seu papel.
