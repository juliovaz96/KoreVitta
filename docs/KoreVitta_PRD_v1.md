# KoreVitta — Product Requirements Document (PRD)

## v1.0 — Fevereiro 2026

> **Documentos de referência:**
> - [KoreVitta_ProductVision_v1.md](KoreVitta_ProductVision_v1.md)
> - [KoreVitta_DataModel_v2.md](KoreVitta_DataModel_v2.md)

---

## Sumário

1. [Visão Geral](#1-visão-geral)
2. [Objetivos e Métricas de Sucesso](#2-objetivos-e-métricas-de-sucesso)
3. [Stack Tecnológico](#3-stack-tecnológico)
4. [Arquitetura da Solução](#4-arquitetura-da-solução)
5. [Personas e Jornadas](#5-personas-e-jornadas)
6. [Requisitos Funcionais — MVP](#6-requisitos-funcionais--mvp)
7. [Requisitos Funcionais — V1.1](#7-requisitos-funcionais--v11)
8. [Requisitos Funcionais — V1.2](#8-requisitos-funcionais--v12)
9. [Requisitos Funcionais — V2.0 (IA)](#9-requisitos-funcionais--v20-ia)
10. [Requisitos Não-Funcionais](#10-requisitos-não-funcionais)
11. [API Design](#11-api-design)
12. [Estrutura do Frontend](#12-estrutura-do-frontend)
13. [Estrutura do Backend](#13-estrutura-do-backend)
14. [Workers e Jobs Assíncronos](#14-workers-e-jobs-assíncronos)
15. [Infraestrutura Azure](#15-infraestrutura-azure)
16. [Autenticação e Autorização](#16-autenticação-e-autorização)
17. [Segurança e Compliance (LGPD)](#17-segurança-e-compliance-lgpd)
18. [Observabilidade](#18-observabilidade)
19. [Roadmap de Entregas](#19-roadmap-de-entregas)
20. [Riscos e Mitigações](#20-riscos-e-mitigações)
21. [Decisões Arquiteturais (ADRs)](#21-decisões-arquiteturais-adrs)

---

## 1. Visão Geral

**KoreVitta** é a plataforma simples e moderna que organiza o acompanhamento nutricional online no Brasil. Permite que nutricionistas, nutrólogos e preparadores físicos entreguem acompanhamento online organizado, profissional e escalável.

### O que NÃO é:
- Sistema hospitalar / ERP clínico
- Software complexo de cálculo nutricional
- Marketplace / Plataforma de cursos

### Proposta de valor:
- **Para o profissional:** organizar pacientes, automatizar check-ins, acompanhar evolução, reduzir abandono, parecer marca profissional
- **Para o paciente:** app organizado, saber o que fazer hoje, ver evolução, sentir progresso

---

## 2. Objetivos e Métricas de Sucesso

### Ano 1 (MVP → V1.1)
| Métrica | Target |
|---|---|
| Profissionais pagos | 2.000–3.000 |
| Churn mensal | < 5% |
| NPS | > 50 |
| Tempo médio de onboarding | < 10 min |
| Check-ins completados / agendados | > 70% |
| Uptime | 99.5% |

### Ano 2 (V1.2 → V2.0)
| Métrica | Target |
|---|---|
| Profissionais pagos | 5.000–8.000 |
| ARR | R$ 4–6M |
| Retenção 12 meses | > 80% |

### Ano 3
| Métrica | Target |
|---|---|
| Profissionais pagos | 10.000+ |
| ARR | R$ 8M+ |
| Expansão internacional | 1+ país |

---

## 3. Stack Tecnológico

### Frontend
| Tecnologia | Versão | Propósito |
|---|---|---|
| **Next.js** | 15+ (App Router) | Framework React com SSR/SSG, routing, middleware |
| **React** | 19+ | UI library |
| **TypeScript** | 5.x | Tipagem estática |
| **Tailwind CSS** | 4.x | Utility-first CSS |
| **shadcn/ui** | latest | Component library (Radix primitives) |
| **TanStack Query** | 5.x | Server state management, cache, mutations |
| **TanStack Table** | 8.x | Tabelas de dados (CRM) |
| **React Hook Form** | 7.x | Forms + validação |
| **Zod** | 3.x | Schema validation (shared com backend) |
| **Recharts** | 2.x | Gráficos de evolução |
| **next-intl** | 3.x | i18n (pt-BR padrão, en futuro) |
| **next-auth** | 5.x (Auth.js) | Autenticação frontend |
| **nuqs** | 2.x | URL state management para filtros/search |

### Backend
| Tecnologia | Versão | Propósito |
|---|---|---|
| **Python** | 3.12+ | Linguagem principal |
| **Django** | 5.1+ | Framework web, ORM, admin |
| **Django REST Framework** | 3.15+ | REST APIs |
| **django-filter** | 24.x | Filtros para APIs |
| **dj-rest-auth** | 7.x | Auth endpoints (login, register, password reset) |
| **djangorestframework-simplejwt** | 5.x | JWT authentication |
| **Celery** | 5.4+ | Task queue (workers, schedulers) |
| **Redis** | 7.x | Broker Celery + cache |
| **celery-beat** | — | Scheduler periódico |
| **django-storages** | 1.14+ | Azure Blob Storage integration |
| **Gunicorn** | 23.x | WSGI server |
| **psycopg** | 3.x | PostgreSQL adapter (async-ready) |
| **Pillow** | 11.x | Processamento de imagem (thumbnails) |
| **sendgrid-python** | 6.x | SDK SendGrid para e-mails |
| **django-cors-headers** | 4.x | CORS para frontend |
| **django-health-check** | 3.x | Health endpoints |
| **sentry-sdk** | 2.x | Error tracking |
| **whitenoise** | 6.x | Static files (admin) |

### Infraestrutura (Azure)
| Serviço | Propósito |
|---|---|
| **Azure Container Apps** | Hosting de todos os containers (frontend, API, workers, beat) |
| **Azure Database for PostgreSQL Flexible Server** | Banco de dados principal |
| **Azure Blob Storage** | Object storage (fotos, exames, logos) |
| **Azure Cache for Redis** | Cache + Celery broker |
| **Azure Container Registry** | Registry de imagens Docker |
| **Azure Monitor + Log Analytics** | Observabilidade |
| **Azure Key Vault** | Secrets management |

### Serviços Externos
| Serviço | Propósito |
|---|---|
| **SendGrid** | Envio de e-mails transacionais e notificações |
| **Sentry** | Error monitoring (frontend + backend) |

---

## 4. Arquitetura da Solução

### Diagrama de Containers (C4 Level 2)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        Azure Container Apps                              │
│                                                                          │
│  ┌─────────────────┐    ┌─────────────────┐    ┌──────────────────┐     │
│  │   Frontend       │    │   API Backend    │    │  Celery Workers  │     │
│  │   (Next.js)      │───►│   (Django DRF)   │◄──►│   (Python)       │     │
│  │   Container      │    │   Container      │    │   Container      │     │
│  │                   │    │                   │    │                   │    │
│  │  Port: 3000       │    │  Port: 8000       │    │  Concurrency: 4  │    │
│  └─────────────────┘    └────────┬────────┘    └────────┬─────────┘     │
│                                  │                       │               │
│  ┌─────────────────┐             │                       │               │
│  │  Celery Beat     │             │                       │               │
│  │  (Scheduler)     │─────────────┼───────────────────────┘               │
│  │  Container       │             │                                       │
│  └─────────────────┘             │                                       │
└──────────────────────────────────┼───────────────────────────────────────┘
                                   │
                    ┌──────────────┼──────────────┐
                    │              │              │
            ┌───────▼──────┐ ┌────▼────┐ ┌───────▼──────┐
            │ PostgreSQL    │ │  Redis  │ │ Blob Storage │
            │ Flexible      │ │ Cache   │ │ (Images/     │
            │ Server        │ │         │ │  Exams)      │
            └──────────────┘ └─────────┘ └──────────────┘

                    ┌───────────────┐
                    │   SendGrid    │
                    │   (E-mails)   │
                    └───────────────┘
```

### Containers e Responsabilidades

| Container | Imagem | Replicas | Propósito |
|---|---|---|---|
| `korevitta-web` | Next.js standalone | 2+ | Frontend SSR/SSG |
| `korevitta-api` | Django + Gunicorn | 2+ | REST API |
| `korevitta-worker` | Celery worker | 2+ | Tasks assíncronas |
| `korevitta-beat` | Celery beat | 1 (singleton) | Scheduler |

### Comunicação entre containers

| De | Para | Protocolo | Propósito |
|---|---|---|---|
| Frontend → API | HTTPS (REST) | JSON | Todas as operações |
| API → Redis | TCP 6379 | — | Cache + enfileiramento |
| Worker → PostgreSQL | TCP 5432 | — | Processamento de tasks |
| Worker → Blob Storage | HTTPS | — | Upload/download de imagens |
| Worker → SendGrid | HTTPS | API | Envio de e-mails |
| Beat → Redis | TCP 6379 | — | Scheduling de tasks periódicas |

---

## 5. Personas e Jornadas

### Persona 1: Profissional (Nutricionista / Preparador Físico / Nutrólogo)
- 22–35 anos
- Atende online ou híbrido
- 10–60 pacientes ativos
- Instagram ativo
- Quer crescer, reduzir abandono, parecer profissional

### Persona 2: Paciente
- 18–45 anos
- Busca organização e clareza no acompanhamento
- Quer saber o que fazer hoje e ver sua evolução

### Jornada do Profissional (MVP)

```
1. SIGNUP & ONBOARDING
   └── Cadastro (email/Google)
   └── Informar profissão + registro (CRN/CREF/CRM)
   └── Configurar branding básico (nome do método, cor, logo)
   └── Escolher cadência padrão de check-in
   └── [Plano Free ativado automaticamente]

2. GERENCIAR PACIENTES (CRM)
   └── Adicionar paciente (nome, e-mail, objetivo, peso, altura)
   └── Paciente recebe convite por e-mail (SendGrid)
   └── Dashboard: lista com status, risco, próximo check-in
   └── Filtrar por: status, tag, busca por nome
   └── Ver detalhes do paciente (protocolo, evolução, check-ins)

3. CRIAR PROTOCOLO INTEGRADO
   └── Criar novo protocolo para paciente
   └── Adicionar módulos: nutrição, treino, suplementação, hidratação
   └── Nutrição: criar planos alimentares → refeições → itens
   └── Treino: criar planos de treino → exercícios
   └── Suplementação: adicionar suplementos com dosagem/timing
   └── Hidratação: definir meta diária (ml ou ml/kg)
   └── Ativar protocolo → gera daily_tasks para o paciente

4. ACOMPANHAR EVOLUÇÃO
   └── Revisar check-ins completados
   └── Ver gráficos de peso, composição corporal, medidas
   └── Comparar fotos de progresso
   └── Ver aderência ao protocolo (diário + check-ins)
   └── Ver biomarcadores e alertas (V1.2)

5. COMUNICAR
   └── Abrir thread contextual com paciente
   └── Responder dúvidas vinculadas a check-in/protocolo

6. GERENCIAR TEMPLATES (V1.1)
   └── Salvar protocolo como template reutilizável
   └── Aplicar template em novo paciente (1 clique)
   └── Customizar módulos para o indivíduo

7. GERENCIAR CONTA
   └── Upgrade de plano (Free → Core → Pro)
   └── Configurar branding customizado (Pro)
   └── Exportar dados (Pro)
```

### Jornada do Paciente (MVP)

```
1. ONBOARDING
   └── Recebe convite por e-mail
   └── Cria conta (email/Google)
   └── Vê tela inicial com objetivo e protocolo

2. DIA A DIA ("Hoje")
   └── Ver checklist diário
   └── Ver plano alimentar do dia
   └── Ver treino do dia
   └── Ver suplementos do dia
   └── Registrar ingestão de água
   └── Marcar tasks como concluídas

3. CHECK-IN
   └── Recebe lembrete (in-app, e-mail futuro)
   └── Preenche formulário estruturado
   └── Registra peso, fotos, observações
   └── Envia check-in

4. PROGRESSO
   └── Ver evolução de peso e composição corporal
   └── Ver timeline de fotos
   └── Ver histórico de check-ins
   └── Ver detalhes do protocolo ativo

5. COMUNICAÇÃO
   └── Enviar mensagem contextual ao profissional
   └── Receber feedback sobre check-in
```

---

## 6. Requisitos Funcionais — MVP

> **Timeline:** Mês 1–3
> **Escopo:** Core product que prova a tese de retenção

### 6.1 Autenticação e Onboarding

| ID | Requisito | Prioridade | Notas |
|---|---|---|---|
| AUTH-01 | Cadastro por e-mail + senha | P0 | Confirmação via e-mail (SendGrid) |
| AUTH-02 | Login por e-mail + senha | P0 | JWT (access + refresh token) |
| AUTH-03 | Login com Google (OAuth) | P0 | next-auth + dj-rest-auth |
| AUTH-04 | Recuperação de senha | P0 | Fluxo via e-mail (SendGrid) |
| AUTH-05 | Onboarding do profissional (wizard 3 steps) | P0 | Profissão, registro, branding básico |
| AUTH-06 | Onboarding do paciente (convite) | P0 | Fluxo de aceite via e-mail |

**Regras de negócio:**
- Profissional escolhe role no cadastro
- Paciente só cria conta via convite do profissional
- JWT access token: 15 min TTL
- JWT refresh token: 7 dias TTL
- Token refresh automático via interceptor no frontend

### 6.2 CRM de Pacientes (Profissional)

| ID | Requisito | Prioridade |
|---|---|---|
| CRM-01 | Listar pacientes com status, risco, próximo check-in | P0 |
| CRM-02 | Filtrar por status (ativo, em risco, pausado, inativo) | P0 |
| CRM-03 | Busca por nome do paciente | P0 |
| CRM-04 | Adicionar paciente (dados básicos + convite por e-mail) | P0 |
| CRM-05 | Ver detalhes do paciente (timeline integrada) | P0 |
| CRM-06 | Alterar status do paciente | P0 |
| CRM-07 | Adicionar tags ao paciente | P1 |
| CRM-08 | Ordenar por risco, nome, próximo check-in | P1 |
| CRM-09 | Limitar pacientes pelo plano (Free: 5, Core/Pro: ilimitado) | P0 |

**Tela: CRM Dashboard**
```
┌──────────────────────────────────────────────────────────────────┐
│  Meus Pacientes (42 ativos)                    [+ Novo Paciente]│
├──────────────────────────────────────────────────────────────────┤
│  🔍 Buscar...    [Ativo ▼] [Tags ▼] [Ordenar ▼]                │
├──────────────────────────────────────────────────────────────────┤
│  Nome          │ Status   │ Risco │ Protocolo      │ Check-in   │
│  ─────────────────────────────────────────────────────────────── │
│  Ana Silva     │ 🟢 Ativo │  12   │ Cutting 12sem  │ em 2 dias  │
│  Bruno Costa   │ 🟡 Risco │  68   │ Bulking 8sem   │ atrasado   │
│  Carla Souza   │ 🟢 Ativo │   5   │ Manutenção     │ em 5 dias  │
│  Diego Lima    │ 🔴 Pausado│  --   │ --             │ --         │
└──────────────────────────────────────────────────────────────────┘
```

### 6.3 Protocolos Integrados (Profissional)

| ID | Requisito | Prioridade |
|---|---|---|
| PROTO-01 | Criar protocolo com nome, descrição, data início/fim | P0 |
| PROTO-02 | Adicionar módulo de **nutrição** ao protocolo | P0 |
| PROTO-03 | Adicionar módulo de **treino** ao protocolo | P0 |
| PROTO-04 | Ativar/arquivar protocolo | P0 |
| PROTO-05 | Criar plano alimentar (macros, dias da semana) | P0 |
| PROTO-06 | Criar refeições dentro do plano (tipo, horário) | P0 |
| PROTO-07 | Adicionar itens alimentares (nome, qtd, macros, alternativas) | P0 |
| PROTO-08 | Criar plano de treino (nome, grupos musculares, dias) | P0 |
| PROTO-09 | Adicionar exercícios (séries, reps, descanso, vídeo, superset) | P0 |
| PROTO-10 | Visualizar protocolo completo (todos os módulos) | P0 |
| PROTO-11 | Duplicar protocolo de um paciente para outro | P1 |

**Regras de negócio:**
- Apenas 1 protocolo ativo por paciente
- Ao ativar novo protocolo, o anterior é arquivado automaticamente
- Ao ativar protocolo, `patients.active_protocol_id` é atualizado
- `daily_tasks` são geradas automaticamente para o dia corrente e próximos 7 dias via worker

### 6.4 Check-ins (Profissional + Paciente)

| ID | Requisito | Prioridade |
|---|---|---|
| CI-01 | Configurar cadência de check-in (semanal, quinzenal, mensal) | P0 |
| CI-02 | Agendar check-ins automaticamente com base na cadência | P0 |
| CI-03 | Paciente preenche formulário de check-in | P0 |
| CI-04 | Paciente registra peso no check-in | P0 |
| CI-05 | Profissional revisa check-in e adiciona notas | P0 |
| CI-06 | Marcar check-in como revisado | P0 |
| CI-07 | Listar check-ins pendentes de revisão | P0 |
| CI-08 | Atualizar risk_score automaticamente baseado em check-ins | P0 |
| CI-09 | Check-in missed → incrementa risk_score | P0 |

**Regras de negócio do Risk Score:**
| Evento | Impacto no risk_score |
|---|---|
| Check-in completado no prazo | -5 |
| Check-in missed | +15 |
| Check-in atrasado (> 2 dias) | +10 |
| Aderência nutricional < 3/5 | +5 |
| Aderência ao treino < 3/5 | +5 |
| Peso distante da meta (> 20%) | +3 |
| 3 check-ins consecutivos completados | -10 |

**Thresholds de status automático:**
| risk_score | Status sugerido |
|---|---|
| 0–30 | `active` (em dia) |
| 31–60 | `at_risk` (atenção) |
| 61–100 | `at_risk` (urgente - alerta visual no CRM) |

### 6.5 Composição Corporal / Progresso (MVP básico)

| ID | Requisito | Prioridade |
|---|---|---|
| BODY-01 | Registrar peso via check-in ou manualmente | P0 |
| BODY-02 | Registrar % de gordura corporal | P1 |
| BODY-03 | Ver gráfico de evolução de peso (linha do tempo) | P0 |
| BODY-04 | Ver delta de peso vs baseline | P0 |
| BODY-05 | Registrar fotos de progresso (front, back, side) | P1 |
| BODY-06 | Ver timeline de fotos | P1 |

### 6.6 Dia a Dia do Paciente

| ID | Requisito | Prioridade |
|---|---|---|
| DAY-01 | Ver tela "Hoje" com tasklist diária | P0 |
| DAY-02 | Ver plano alimentar do dia (refeições + itens) | P0 |
| DAY-03 | Ver treino do dia (exercícios com detalhes) | P0 |
| DAY-04 | Marcar tasks como concluídas (checklist) | P0 |
| DAY-05 | Tela inicial com objetivo, fase, próximo check-in, status | P0 |
| DAY-06 | Ver detalhes do protocolo ativo | P1 |

**Tela: Hoje (Paciente)**
```
┌──────────────────────────────────────────────────────┐
│  Bom dia, Ana! 👋                                    │
│  Objetivo: Perder 8kg │ Semana 4/12 │ Em dia ✅      │
│  Próximo check-in: Sexta, 14/02                      │
├──────────────────────────────────────────────────────┤
│  📋 Hoje                                             │
│                                                       │
│  🍽️ Alimentação                                      │
│  ☑ Café da manhã (7h)                                │
│  ☐ Lanche da manhã (10h)                             │
│  ☐ Almoço (12h30)                                    │
│  ☐ Lanche da tarde (16h)                             │
│  ☐ Jantar (19h30)                                    │
│                                                       │
│  🏋️ Treino                                           │
│  ☐ Treino A - Superior (60 min)                      │
│                                                       │
│  💊 Suplementação                                     │
│  ☐ Creatina 5g (pós-treino)                          │
│  ☐ Vitamina D 2000UI (manhã)                         │
│                                                       │
│  💧 Água: 1.200ml / 3.000ml ████████░░░░░ 40%        │
└──────────────────────────────────────────────────────┘
```

### 6.7 Comunicação

| ID | Requisito | Prioridade |
|---|---|---|
| COM-01 | Abrir thread de mensagem com paciente | P0 |
| COM-02 | Enviar mensagem de texto | P0 |
| COM-03 | Ver threads com indicador de não-lidas | P0 |
| COM-04 | Thread contextual vinculada a check-in | P1 |
| COM-05 | Thread contextual vinculada a protocolo | P1 |

**Regras de negócio:**
- Sem envio de mídia (MVP) — apenas texto
- Sem notificação push (MVP) — apenas indicador in-app
- Contadores de unread atualizados em real-time via polling (15s)

### 6.8 Branding Leve

| ID | Requisito | Prioridade |
|---|---|---|
| BRAND-01 | Configurar nome do método/marca | P0 |
| BRAND-02 | Upload de logo | P0 |
| BRAND-03 | Escolher cor primária | P0 |
| BRAND-04 | Paciente vê branding do profissional no app | P0 |

### 6.9 Subscription e Billing

| ID | Requisito | Prioridade |
|---|---|---|
| SUB-01 | Plano Free ativado automaticamente no cadastro | P0 |
| SUB-02 | Tela de upgrade com comparativo de planos | P0 |
| SUB-03 | Integração com gateway de pagamento | P0 |
| SUB-04 | Controle de limite de pacientes por plano | P0 |
| SUB-05 | Tela de gerenciamento de assinatura | P1 |

**Planos:**
| Plano | Preço | Pacientes | Templates | Branding | Analytics |
|---|---|---|---|---|---|
| **Free** | R$ 0 | 5 | — | KoreVitta | — |
| **Core** | R$ 79,90/mês | Ilimitados | ✅ | Básico | — |
| **Pro** | R$ 99,90/mês | Ilimitados | ✅ | Customizado | ✅ |

---

## 7. Requisitos Funcionais — V1.1

> **Timeline:** Mês 4–6
> **Escopo:** Templates, suplementação, hidratação, medidas, analytics básico

### 7.1 Protocol Templates

| ID | Requisito |
|---|---|
| TPL-01 | Salvar protocolo ativo como template reutilizável |
| TPL-02 | Listar templates do profissional |
| TPL-03 | Aplicar template em novo paciente (1 clique) — cria protocolo + todos os módulos |
| TPL-04 | Customizar módulos depois de aplicar template |
| TPL-05 | Contador de uso por template |

### 7.2 Módulos Adicionais de Protocolo

| ID | Requisito |
|---|---|
| SUPP-01 | Adicionar módulo de **suplementação** ao protocolo |
| SUPP-02 | Listar suplementos com dosagem, frequência, timing |
| SUPP-03 | Suplementos geram daily_tasks automaticamente |
| HYD-01 | Adicionar módulo de **hidratação** ao protocolo |
| HYD-02 | Definir meta diária (ml absoluto ou ml/kg) |
| HYD-03 | Paciente registra ingestão de água ao longo do dia |
| HYD-04 | Barra de progresso de hidratação na tela "Hoje" |

### 7.3 Body Measurements

| ID | Requisito |
|---|---|
| MEAS-01 | Registrar circunferências por região corporal (18 regiões) |
| MEAS-02 | Ver gráfico de evolução por body_site |
| MEAS-03 | Comparativo antes/depois por região |

### 7.4 Progress Photos

| ID | Requisito |
|---|---|
| PHOTO-01 | Upload de fotos de progresso (front, back, side_left, side_right) |
| PHOTO-02 | Geração automática de thumbnail |
| PHOTO-03 | Timeline visual de fotos com dados de composição lado a lado |
| PHOTO-04 | Comparativo de fotos (selecionar 2 datas) |

### 7.5 Protocol Versioning

| ID | Requisito |
|---|---|
| VER-01 | Cada alteração em protocolo ativo gera nova versão (snapshot imutável) |
| VER-02 | Ver histórico de versões do protocolo |
| VER-03 | Nota de mudança obrigatória ao versionar |

### 7.6 Analytics Dashboard (Profissional)

| ID | Requisito |
|---|---|
| DASH-01 | Dashboard com visão consolidada de todos os pacientes (`mv_patient_dashboard`) |
| DASH-02 | Cards: total ativos, em risco, check-ins pendentes, taxa de adesão |
| DASH-03 | Gráfico: evolução de pacientes ao longo do tempo |
| DASH-04 | Lista: pacientes com maior risco (top 10) |

---

## 8. Requisitos Funcionais — V1.2

> **Timeline:** Mês 7–9
> **Escopo:** Biomarcadores, analytics avançado, partitioning, InBody

### 8.1 Biomarcadores

| ID | Requisito |
|---|---|
| BIO-01 | Criar painel de exames (nome, lab, data da coleta) |
| BIO-02 | Adicionar biomarcadores com valor, unidade e range de referência |
| BIO-03 | Flag automático (normal, low, high, critical) |
| BIO-04 | Ver evolução de biomarcador ao longo do tempo (gráfico) |
| BIO-05 | Alertas visuais para valores fora do range |
| BIO-06 | Upload de PDF do exame (Azure Blob Storage) |
| BIO-07 | Biomarcadores seed data pré-cadastrados (40+ itens) |

### 8.2 Protocol Effectiveness

| ID | Requisito |
|---|---|
| EFF-01 | View de efetividade por template (`mv_protocol_effectiveness`) |
| EFF-02 | Métricas: Δ peso médio, Δ gordura, Δ massa magra, adesão, retenção |
| EFF-03 | Ranking de templates por resultado |

### 8.3 InBody Integration (básico)

| ID | Requisito |
|---|---|
| INBODY-01 | Importar dados de InBody via entrada manual dos campos |
| INBODY-02 | Armazenar dados segmentais (massa magra e gordura por região) |
| INBODY-03 | Visualizar dados InBody integrados com composição corporal |

### 8.4 Audit Log

| ID | Requisito |
|---|---|
| AUDIT-01 | Registrar todas as ações de criação/alteração/exclusão |
| AUDIT-02 | Audit log particionado por mês |
| AUDIT-03 | Consulta de audit por profissional (admin futuro) |

---

## 9. Requisitos Funcionais — V2.0 (IA)

> **Timeline:** Ano 2
> **Escopo:** IA assistiva para profissional

### 9.1 Assistente de Check-in

| ID | Requisito |
|---|---|
| AI-01 | Resumo automático do check-in (NLP) |
| AI-02 | Sugestão de notas para o profissional |
| AI-03 | Detecção de padrões em respostas |

### 9.2 Inteligência de Retenção

| ID | Requisito |
|---|---|
| AI-04 | Previsão de abandono baseada em risk_score + adesão + wellness |
| AI-05 | Sugestão de intervenção (ex: "Enviar mensagem para Bruno, 5 dias sem check-in") |
| AI-06 | Alert automático para pacientes com risco > 60 |

### 9.3 Notificações (SendGrid)

| ID | Requisito |
|---|---|
| NOTIF-01 | E-mail de lembrete de check-in (24h antes) |
| NOTIF-02 | E-mail de resumo semanal para o profissional |
| NOTIF-03 | E-mail de boas-vindas ao paciente |
| NOTIF-04 | E-mail de reset de senha |
| NOTIF-05 | Configuração de preferências de notificação |

---

## 10. Requisitos Não-Funcionais

### Performance
| Requisito | Target |
|---|---|
| Tempo de resposta API (p95) | < 300ms |
| Tempo de resposta API (p99) | < 800ms |
| Time to First Byte (frontend) | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Bundle size (JS) | < 200KB gzipped (initial load) |

### Escalabilidade
| Requisito | Target |
|---|---|
| Concurrent users suportados | 5.000+ |
| Requests/segundo API | 500+ |
| Auto-scaling containers | Min 2, Max 10 (API) |
| Database IOPS | Baseline 4.000+ |

### Disponibilidade
| Requisito | Target |
|---|---|
| Uptime SLA | 99.5% |
| RTO (Recovery Time Objective) | < 4h |
| RPO (Recovery Point Objective) | < 1h |
| Backup automático PostgreSQL | Diário (retenção 30 dias) |

### Segurança
| Requisito | Detalhes |
|---|---|
| HTTPS obrigatório | TLS 1.3 |
| CORS restrito | Apenas domínio do frontend |
| Rate limiting | 100 req/min por IP (auth), 1000 req/min (API) |
| SQL Injection | Prevenido via Django ORM (parameterized queries) |
| XSS | CSP headers + sanitização de input |
| CSRF | Token CSRF em forms (Django built-in) |
| RLS (Row-Level Security) | Isolamento de dados por profissional no nível do banco |
| Senhas | bcrypt/argon2 via Django auth |
| Secrets | Azure Key Vault (nunca em código/env file) |

### Compliance LGPD
| Requisito | Detalhes |
|---|---|
| Consentimento | Termo de uso + política de privacidade no cadastro |
| Soft delete | Dados nunca excluídos fisicamente |
| Exportação de dados | Paciente pode solicitar exportação (Art. 18) |
| Exclusão lógica | Anonimização sob solicitação |
| Logs de acesso | Audit log completo |
| Criptografia em trânsito | HTTPS obrigatório |
| Criptografia em repouso | Azure disk encryption |

---

## 11. API Design

### Convenções
- **Base URL:** `https://api.korevitta.com/v1/`
- **Formato:** JSON
- **Autenticação:** Bearer JWT
- **Paginação:** cursor-based (`?cursor=<uuid>&limit=20`)
- **Filtros:** query params (`?status=active&search=ana`)
- **Erros:** RFC 7807 Problem Details
- **Versionamento:** URL prefix (`/v1/`)

### Endpoints — MVP

#### Auth
```
POST   /v1/auth/register/               # Cadastro profissional
POST   /v1/auth/login/                   # Login (retorna JWT pair)
POST   /v1/auth/token/refresh/           # Refresh token
POST   /v1/auth/password/reset/          # Solicitar reset
POST   /v1/auth/password/reset/confirm/  # Confirmar reset
POST   /v1/auth/google/                  # Login Google OAuth
GET    /v1/auth/me/                      # Perfil do usuário logado
PATCH  /v1/auth/me/                      # Atualizar perfil
```

#### Professional
```
GET    /v1/professional/profile/         # Perfil do profissional
PATCH  /v1/professional/profile/         # Atualizar profissional
POST   /v1/professional/onboarding/      # Completar onboarding
GET    /v1/professional/branding/        # Config branding
PUT    /v1/professional/branding/        # Atualizar branding
GET    /v1/professional/subscription/    # Subscription atual
POST   /v1/professional/subscription/upgrade/  # Upgrade de plano
```

#### Patients
```
GET    /v1/patients/                     # Listar pacientes (CRM)
POST   /v1/patients/                     # Adicionar paciente + convite
GET    /v1/patients/:id/                 # Detalhes do paciente
PATCH  /v1/patients/:id/                 # Atualizar paciente
DELETE /v1/patients/:id/                 # Soft delete
GET    /v1/patients/:id/timeline/        # Timeline integrada
```

#### Protocols
```
GET    /v1/patients/:id/protocols/                   # Listar protocolos do paciente
POST   /v1/patients/:id/protocols/                   # Criar protocolo
GET    /v1/protocols/:id/                             # Detalhes do protocolo
PATCH  /v1/protocols/:id/                             # Atualizar protocolo
POST   /v1/protocols/:id/activate/                    # Ativar protocolo
POST   /v1/protocols/:id/archive/                     # Arquivar protocolo
GET    /v1/protocols/:id/modules/                     # Listar módulos
POST   /v1/protocols/:id/modules/                     # Adicionar módulo
```

#### Nutrition (módulo dentro do protocolo)
```
GET    /v1/protocol-modules/:id/meal-plans/           # Listar planos
POST   /v1/protocol-modules/:id/meal-plans/           # Criar plano
GET    /v1/meal-plans/:id/                             # Detalhes do plano
PATCH  /v1/meal-plans/:id/                             # Atualizar plano
DELETE /v1/meal-plans/:id/                             # Remover plano
GET    /v1/meal-plans/:id/meals/                       # Listar refeições
POST   /v1/meal-plans/:id/meals/                       # Adicionar refeição
PATCH  /v1/meals/:id/                                  # Atualizar refeição
DELETE /v1/meals/:id/                                  # Remover refeição
GET    /v1/meals/:id/items/                            # Listar itens
POST   /v1/meals/:id/items/                            # Adicionar item
PATCH  /v1/meal-items/:id/                             # Atualizar item
DELETE /v1/meal-items/:id/                             # Remover item
```

#### Training (módulo dentro do protocolo)
```
GET    /v1/protocol-modules/:id/training-plans/        # Listar planos
POST   /v1/protocol-modules/:id/training-plans/        # Criar plano
GET    /v1/training-plans/:id/                          # Detalhes
PATCH  /v1/training-plans/:id/                          # Atualizar
DELETE /v1/training-plans/:id/                          # Remover
GET    /v1/training-plans/:id/exercises/                # Listar exercícios
POST   /v1/training-plans/:id/exercises/                # Adicionar exercício
PATCH  /v1/training-exercises/:id/                      # Atualizar exercício
DELETE /v1/training-exercises/:id/                      # Remover exercício
```

#### Check-ins
```
GET    /v1/patients/:id/checkin-schedule/               # Config de check-in
PUT    /v1/patients/:id/checkin-schedule/               # Atualizar config
GET    /v1/patients/:id/checkins/                       # Listar check-ins
GET    /v1/checkins/:id/                                # Detalhes check-in
PATCH  /v1/checkins/:id/                                # Atualizar (paciente submete, pro revisa)
POST   /v1/checkins/:id/complete/                       # Paciente completa
POST   /v1/checkins/:id/review/                         # Profissional revisa
GET    /v1/checkins/pending-review/                     # Check-ins pendentes (pro)
```

#### Body Composition
```
GET    /v1/patients/:id/body-compositions/              # Histórico
POST   /v1/patients/:id/body-compositions/              # Registrar
GET    /v1/patients/:id/body-compositions/chart/        # Dados para gráfico
```

#### Daily Tasks (Paciente)
```
GET    /v1/me/today/                                   # Tela "Hoje" (tasks + plano + treino)
POST   /v1/daily-tasks/:id/complete/                   # Marcar como concluída
GET    /v1/me/progress/                                # Tela "Progresso"
GET    /v1/me/protocol/                                # Protocolo ativo
```

#### Communication
```
GET    /v1/threads/                                    # Listar threads
POST   /v1/threads/                                    # Criar thread
GET    /v1/threads/:id/messages/                       # Listar mensagens
POST   /v1/threads/:id/messages/                       # Enviar mensagem
POST   /v1/threads/:id/read/                           # Marcar como lidas
```

### Response Format

**Success:**
```json
{
  "data": { ... },
  "meta": {
    "cursor": "uuid-next",
    "has_more": true,
    "total": 42
  }
}
```

**Error (RFC 7807):**
```json
{
  "type": "https://api.korevitta.com/errors/validation",
  "title": "Validation Error",
  "status": 422,
  "detail": "O campo 'email' é obrigatório.",
  "errors": [
    { "field": "email", "message": "Este campo é obrigatório." }
  ]
}
```

---

## 12. Estrutura do Frontend

### Arquitetura de pastas (Next.js App Router)

```
src/
├── app/
│   ├── (auth)/                        # Layout de autenticação
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   ├── forgot-password/page.tsx
│   │   └── layout.tsx
│   ├── (professional)/                # Layout do profissional
│   │   ├── dashboard/page.tsx         # CRM Dashboard
│   │   ├── patients/
│   │   │   ├── page.tsx               # Lista de pacientes
│   │   │   └── [id]/
│   │   │       ├── page.tsx           # Detalhes do paciente
│   │   │       ├── protocol/page.tsx  # Protocolo do paciente
│   │   │       ├── checkins/page.tsx  # Histórico check-ins
│   │   │       ├── progress/page.tsx  # Evolução
│   │   │       └── messages/page.tsx  # Comunicação
│   │   ├── protocols/
│   │   │   └── [id]/
│   │   │       ├── page.tsx           # Editor de protocolo
│   │   │       ├── nutrition/page.tsx # Plano alimentar
│   │   │       └── training/page.tsx  # Plano de treino
│   │   ├── templates/page.tsx         # Templates (V1.1)
│   │   ├── analytics/page.tsx         # Dashboard analytics (V1.1)
│   │   ├── settings/
│   │   │   ├── profile/page.tsx
│   │   │   ├── branding/page.tsx
│   │   │   └── subscription/page.tsx
│   │   ├── onboarding/page.tsx
│   │   └── layout.tsx                 # Sidebar + header
│   ├── (patient)/                     # Layout do paciente
│   │   ├── home/page.tsx              # Tela inicial
│   │   ├── today/page.tsx             # Tela "Hoje"
│   │   ├── progress/page.tsx          # Meu progresso
│   │   ├── protocol/page.tsx          # Meu protocolo
│   │   ├── checkin/page.tsx           # Formulário check-in
│   │   ├── messages/page.tsx          # Comunicação
│   │   └── layout.tsx                 # Bottom nav mobile
│   ├── api/                           # API routes (Next.js)
│   │   └── auth/[...nextauth]/route.ts
│   ├── layout.tsx                     # Root layout
│   └── page.tsx                       # Landing page
├── components/
│   ├── ui/                            # shadcn/ui components
│   ├── forms/                         # Form components (React Hook Form)
│   ├── charts/                        # Recharts components
│   ├── layout/                        # Sidebar, Header, BottomNav
│   └── shared/                        # Components compartilhados
├── hooks/                             # Custom hooks
│   ├── use-patients.ts                # TanStack Query hooks
│   ├── use-protocols.ts
│   ├── use-checkins.ts
│   └── use-auth.ts
├── lib/
│   ├── api.ts                         # API client (fetch wrapper)
│   ├── auth.ts                        # next-auth config
│   ├── constants.ts
│   └── utils.ts
├── types/                             # TypeScript types
│   ├── patient.ts
│   ├── protocol.ts
│   ├── checkin.ts
│   └── api.ts
└── styles/
    └── globals.css                    # Tailwind + custom CSS
```

### Princípios de Frontend
1. **Server Components por padrão** — Client Components apenas quando necessário (interatividade)
2. **TanStack Query para server state** — cache, refetch, optimistic updates
3. **React Hook Form + Zod** — validação no frontend e backend com schemas compartilhados
4. **Responsive mobile-first** — Paciente usa mobile, Profissional usa desktop
5. **Skeleton loading** — feedback visual imediato
6. **Branding dinâmico** — CSS variables carregadas do config do profissional
7. **Telas do paciente = PWA-ready** — manifest.json, offline basic

---

## 13. Estrutura do Backend

### Arquitetura de pastas (Django)

```
korevitta/
├── config/
│   ├── settings/
│   │   ├── base.py                    # Settings compartilhados
│   │   ├── development.py
│   │   ├── staging.py
│   │   └── production.py
│   ├── urls.py                        # URL routing principal
│   ├── celery.py                      # Config Celery
│   ├── wsgi.py
│   └── asgi.py
├── apps/
│   ├── accounts/                      # Auth + Users + Professionals
│   │   ├── models.py                  # User, Professional
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── permissions.py             # IsProfessional, IsPatientOwner
│   │   ├── services.py                # Business logic
│   │   └── tests/
│   ├── patients/                      # Patients + CRM
│   │   ├── models.py                  # Patient
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── filters.py                 # django-filter
│   │   ├── services.py
│   │   └── tests/
│   ├── protocols/                     # Protocols + Modules
│   │   ├── models.py                  # Protocol, ProtocolModule, ProtocolVersion
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── services.py               # activate, archive, duplicate
│   │   └── tests/
│   ├── nutrition/                     # Meal Plans + Meals + Items
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   └── tests/
│   ├── training/                      # Training Plans + Exercises
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   └── tests/
│   ├── supplementation/              # Supplementation Plans + Items (V1.1)
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── urls.py
│   ├── hydration/                     # Hydration Plans + Water Logs (V1.1)
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── urls.py
│   ├── checkins/                      # Check-in Schedules + Check-ins
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── services.py               # risk_score calculation
│   │   └── tests/
│   ├── progress/                      # Body Compositions + Measurements + Photos
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   └── tests/
│   ├── biomarkers/                    # Biomarker Panels + Biomarkers (V1.2)
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── urls.py
│   ├── communication/                 # Threads + Messages
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   └── tests/
│   ├── daily/                         # Daily Tasks + Completions
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── services.py               # Task generation from protocol
│   │   └── tests/
│   ├── branding/                      # Branding config
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── urls.py
│   ├── subscriptions/                 # Subscription + Billing
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── services.py               # Plan enforcement
│   │   └── webhooks.py               # Payment gateway webhooks
│   ├── analytics/                     # Materialized Views + Dashboard (V1.1)
│   │   ├── models.py                  # Proxy models for MVs
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── urls.py
│   ├── audit/                         # Audit Log (V1.2)
│   │   ├── models.py
│   │   ├── middleware.py              # Auto-log middleware
│   │   └── services.py
│   └── notifications/                 # SendGrid integration (V2.0)
│       ├── services.py
│       ├── templates/                 # Email templates
│       └── tasks.py                   # Celery tasks for sending
├── core/
│   ├── models.py                      # BaseModel (timestamps, soft delete, UUID)
│   ├── serializers.py                 # Base serializers
│   ├── permissions.py                 # Global permissions
│   ├── pagination.py                  # Cursor pagination
│   ├── exceptions.py                  # Custom exception handler (RFC 7807)
│   ├── middleware.py                  # RLS middleware (set app.current_*)
│   └── storage.py                     # Azure Blob Storage backend
├── workers/
│   ├── tasks/
│   │   ├── daily_tasks.py             # Geração de daily tasks
│   │   ├── checkins.py                # Agendamento + check missed
│   │   ├── risk_score.py              # Recálculo de risk_score
│   │   ├── analytics.py               # Refresh materialized views
│   │   ├── images.py                  # Thumbnail generation
│   │   └── emails.py                  # SendGrid tasks
│   └── schedules.py                   # Celery beat schedule config
├── manage.py
├── requirements/
│   ├── base.txt
│   ├── development.txt
│   ├── production.txt
│   └── test.txt
├── Dockerfile
├── docker-compose.yml                 # Dev environment
├── .env.example
└── pyproject.toml
```

### Princípios de Backend
1. **Fat services, thin views** — Lógica de negócio em `services.py`, views apenas orquestram
2. **BaseModel** — UUID PK, `created_at`, `updated_at`, `deleted_at` herdados por todos os models
3. **Permissions por composição** — `IsProfessional & IsPatientOwner` para endpoints de paciente
4. **Serializers cascading** — Nested serializers para operações atômicas (criar protocolo + módulos)
5. **django-filter** — Filtros declarativos para todos os list endpoints
6. **Cursor pagination** — Performante para grandes listas (vs. offset)
7. **Custom exception handler** — Formato RFC 7807 padronizado
8. **RLS middleware** — Seta `app.current_professional_id` em cada request

---

## 14. Workers e Jobs Assíncronos

### Celery Tasks

| Task | Trigger | Prioridade | Descrição |
|---|---|---|---|
| `generate_daily_tasks` | Celery Beat (00:05 UTC-3) | P0/MVP | Gera daily_tasks para todos os pacientes ativos (próximo dia) |
| `check_missed_checkins` | Celery Beat (cada 2h) | P0/MVP | Marca check-ins atrasados como `missed`, incrementa risk_score |
| `recalculate_risk_score` | Event-driven (pós check-in) | P0/MVP | Recalcula risk_score de um paciente |
| `send_patient_invite` | Event-driven (create patient) | P0/MVP | Envia e-mail de convite via SendGrid |
| `send_password_reset` | Event-driven (forgot password) | P0/MVP | Envia e-mail de reset via SendGrid |
| `generate_thumbnail` | Event-driven (photo upload) | P1/V1.1 | Gera thumbnail de foto de progresso |
| `refresh_patient_dashboard` | Celery Beat (cada 15 min) | P1/V1.1 | `REFRESH MATERIALIZED VIEW CONCURRENTLY mv_patient_dashboard` |
| `refresh_protocol_effectiveness` | Celery Beat (diário 03:00) | P2/V1.2 | `REFRESH MATERIALIZED VIEW CONCURRENTLY mv_protocol_effectiveness` |
| `send_checkin_reminder` | Celery Beat (cada 1h) | P2/V2.0 | Envia lembrete de check-in (24h antes) via SendGrid |
| `send_weekly_summary` | Celery Beat (Segunda 08:00) | P2/V2.0 | Resumo semanal para o profissional via SendGrid |
| `cleanup_expired_tokens` | Celery Beat (diário 04:00) | P1 | Remove JWT refresh tokens expirados |

### Celery Beat Schedule

```python
# workers/schedules.py
CELERY_BEAT_SCHEDULE = {
    'generate-daily-tasks': {
        'task': 'workers.tasks.daily_tasks.generate_daily_tasks',
        'schedule': crontab(hour=0, minute=5),  # 00:05 diário
    },
    'check-missed-checkins': {
        'task': 'workers.tasks.checkins.check_missed_checkins',
        'schedule': crontab(minute=0, hour='*/2'),  # cada 2h
    },
    'refresh-patient-dashboard': {
        'task': 'workers.tasks.analytics.refresh_patient_dashboard',
        'schedule': crontab(minute='*/15'),  # cada 15 min
    },
    'refresh-protocol-effectiveness': {
        'task': 'workers.tasks.analytics.refresh_protocol_effectiveness',
        'schedule': crontab(hour=3, minute=0),  # 03:00 diário
    },
    'cleanup-expired-tokens': {
        'task': 'workers.tasks.auth.cleanup_expired_tokens',
        'schedule': crontab(hour=4, minute=0),  # 04:00 diário
    },
}
```

### Celery Configuration

```python
# config/celery.py
CELERY_BROKER_URL = os.environ['REDIS_URL']
CELERY_RESULT_BACKEND = os.environ['REDIS_URL']
CELERY_ACCEPT_CONTENT = ['json']
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_TIMEZONE = 'America/Sao_Paulo'
CELERY_TASK_TRACK_STARTED = True
CELERY_TASK_TIME_LIMIT = 300  # 5 min max
CELERY_TASK_SOFT_TIME_LIMIT = 240  # 4 min soft limit
CELERY_WORKER_MAX_TASKS_PER_CHILD = 1000  # prevent memory leaks
CELERY_TASK_ACKS_LATE = True  # re-delivery if worker crashes
CELERY_WORKER_PREFETCH_MULTIPLIER = 1  # fair scheduling
```

---

## 15. Infraestrutura Azure

### Resource Group: `rg-korevitta-prod`

### Container Apps Environment

```yaml
# Scaling config
korevitta-api:
  minReplicas: 2
  maxReplicas: 10
  scaling:
    rules:
      - name: http-rule
        http:
          metadata:
            concurrentRequests: "50"
    
korevitta-web:
  minReplicas: 2
  maxReplicas: 6
  scaling:
    rules:
      - name: http-rule
        http:
          metadata:
            concurrentRequests: "100"

korevitta-worker:
  minReplicas: 2
  maxReplicas: 8
  scaling:
    rules:
      - name: queue-rule
        custom:
          type: redis
          metadata:
            listName: celery
            listLength: "10"

korevitta-beat:
  minReplicas: 1
  maxReplicas: 1  # SINGLETON — nunca mais de 1
```

### PostgreSQL Flexible Server

| Config | Valor |
|---|---|
| **SKU** | Burstable B2s (MVP) → General Purpose D4s (escala) |
| **Storage** | 64GB (MVP) → auto-grow |
| **Version** | 16 |
| **Backup** | Geo-redundant, 30 dias retenção |
| **High Availability** | Zone-redundant (produção) |
| **Extensions** | `uuid-ossp`, `pg_partman`, `pg_cron`, `pg_trgm` |
| **Connection pooling** | PgBouncer built-in (transaction mode) |

### Azure Blob Storage

| Container | Propósito | Access |
|---|---|---|
| `logos` | Logos de branding dos profissionais | Public read |
| `progress-photos` | Fotos de progresso dos pacientes | Private (SAS tokens) |
| `thumbnails` | Thumbnails geradas pelo worker | Private (SAS tokens) |
| `exam-files` | PDFs de exames laboratoriais | Private (SAS tokens) |
| `exports` | Exports gerados (Pro) | Private (SAS tokens, 24h TTL) |

### Azure Cache for Redis

| Config | Valor |
|---|---|
| **SKU** | Basic C1 (MVP) → Standard C2 (escala) |
| **Propósito** | Celery broker + cache de session + rate limiting |
| **Eviction** | `allkeys-lru` |
| **Max memory** | 1GB (MVP) |

### Networking

```
┌─────────────────────────────────────────────────────┐
│              Azure Virtual Network                    │
│                                                       │
│  ┌──────────────────────────────────────────────┐    │
│  │  Container Apps Subnet (10.0.0.0/23)          │    │
│  │  - korevitta-web                               │    │
│  │  - korevitta-api                               │    │
│  │  - korevitta-worker                            │    │
│  │  - korevitta-beat                              │    │
│  └──────────────────────────────────────────────┘    │
│                                                       │
│  ┌──────────────────────────────────────────────┐    │
│  │  Database Subnet (10.0.2.0/24)                │    │
│  │  - PostgreSQL Flexible Server                  │    │
│  │  - Redis Cache                                 │    │
│  └──────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────┘
```

### Ambientes

| Ambiente | Propósito | PostgreSQL | Redis | Replicas |
|---|---|---|---|---|
| **dev** | Desenvolvimento local | Docker compose | Docker compose | 1 cada |
| **staging** | QA + testes de integração | Burstable B1ms | Basic C0 | 1 cada |
| **production** | Produção | Burstable B2s → GP D4s | Basic C1 → Standard C2 | Config acima |

---

## 16. Autenticação e Autorização

### Fluxo de Autenticação

```
┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│ Frontend  │────►│ Next.js  │────►│ Django   │────►│PostgreSQL│
│ (Browser) │     │ Auth.js  │     │ DRF+JWT  │     │ (users)  │
└──────────┘     └──────────┘     └──────────┘     └──────────┘
     │                │                 │
     │  1. Login form │                 │
     │───────────────►│                 │
     │                │  2. POST /auth/ │
     │                │────────────────►│
     │                │                 │  3. Validate + JWT
     │                │  4. JWT pair    │◄────────────────
     │                │◄────────────────│
     │  5. Set cookie │                 │
     │◄───────────────│                 │
     │                │                 │
     │  6. API call   │                 │
     │───────────────►│  7. Bearer JWT  │
     │                │────────────────►│
     │                │                 │  8. Verify + RLS
     │                │  9. Response    │◄────────────────
     │  10. Data      │◄────────────────│
     │◄───────────────│                 │
```

### Roles e Permissões

| Recurso | Professional | Patient |
|---|---|---|
| Pacientes (CRUD) | ✅ próprios | ❌ |
| Próprio perfil | — | ✅ read |
| Protocolos (CRUD) | ✅ próprios pacientes | ✅ read próprio |
| Check-ins (criar) | ❌ | ✅ próprio |
| Check-ins (review) | ✅ próprios pacientes | ❌ |
| Body compositions | ✅ CRUD próprios pacientes | ✅ read/create próprio |
| Daily tasks | ❌ (gerado automaticamente) | ✅ read/complete próprio |
| Water intake | ❌ | ✅ CRUD próprio |
| Threads/Messages | ✅ próprios pacientes | ✅ próprias |
| Branding | ✅ próprio | ❌ |
| Subscription | ✅ própria | ❌ |
| Analytics | ✅ próprios dados | ❌ |

### RLS Middleware

```python
# core/middleware.py
class RLSMiddleware:
    """Sets PostgreSQL session vars for Row-Level Security."""
    
    def __call__(self, request):
        if request.user.is_authenticated:
            with connection.cursor() as cursor:
                cursor.execute(
                    "SET app.current_user_id = %s",
                    [str(request.user.id)]
                )
                if hasattr(request.user, 'professional'):
                    cursor.execute(
                        "SET app.current_professional_id = %s",
                        [str(request.user.professional.id)]
                    )
        return self.get_response(request)
```

---

## 17. Segurança e Compliance (LGPD)

### Checklist de Segurança

- [ ] HTTPS obrigatório (redirect HTTP → HTTPS)
- [ ] CORS: apenas `https://app.korevitta.com`
- [ ] CSP headers configurados
- [ ] Rate limiting: 100/min auth, 1000/min API
- [ ] JWT rotation (refresh token rotation)
- [ ] Senhas: Argon2 (Django default)
- [ ] SQL injection: prevenido via ORM
- [ ] XSS: sanitização + CSP
- [ ] CSRF: token em forms
- [ ] File upload: validação de tipo + tamanho (max 10MB imagens, 20MB PDFs)
- [ ] SAS tokens com TTL para acesso a Blob Storage
- [ ] Azure Key Vault para todos os secrets
- [ ] Dependency scanning (dependabot)
- [ ] RLS ativo em todas as tabelas sensíveis

### LGPD Implementation

| Artigo | Implementação |
|---|---|
| Art. 7 (Consentimento) | Checkbox de aceite no cadastro |
| Art. 9 (Transparência) | Política de privacidade acessível |
| Art. 15 (Término) | Soft delete + endpoint de exclusão lógica |
| Art. 18 (Direitos do titular) | Endpoint de exportação de dados (JSON/CSV) |
| Art. 18, V (Portabilidade) | Export em formato aberto |
| Art. 37 (Registro de operações) | Audit log completo |
| Art. 46 (Segurança) | Criptografia em trânsito e repouso |
| Art. 50 (Boas práticas) | Privacy by design, RLS, minimal data collection |

---

## 18. Observabilidade

### Stack de Monitoramento

| Componente | Ferramenta |
|---|---|
| **Error tracking** | Sentry (frontend + backend) |
| **Logs** | Azure Monitor + Log Analytics |
| **Métricas** | Azure Monitor Metrics |
| **Traces** | Azure App Insights (OpenTelemetry) |
| **Health checks** | django-health-check → `/health/` |
| **Uptime** | Azure Monitor Availability Tests |

### Health Endpoints

```
GET /health/          # Liveness (container alive)
GET /health/ready/    # Readiness (DB + Redis connected)
GET /health/startup/  # Startup (migrations applied)
```

### Alertas Críticos

| Alerta | Condição | Canal |
|---|---|---|
| API Error Rate > 1% | 5xx responses > 1% em 5 min | Sentry + Slack |
| API Latency p95 > 500ms | Latência > 500ms em 5 min | Azure Monitor |
| Database CPU > 80% | Sustained 10 min | Azure Alert → e-mail |
| Container restarts | > 3 em 15 min | Azure Alert → e-mail |
| Celery queue backlog | > 100 tasks por 5 min | Redis monitor |
| Disk usage > 80% | PostgreSQL storage | Azure Alert → e-mail |

### Logging Standards

```python
# Structured logging format
{
    "timestamp": "2026-02-14T10:30:00Z",
    "level": "INFO",
    "service": "korevitta-api",
    "request_id": "uuid",
    "user_id": "uuid",
    "professional_id": "uuid",
    "action": "protocol.created",
    "resource_type": "protocol",
    "resource_id": "uuid",
    "duration_ms": 123,
    "status_code": 201
}
```

---

## 19. Roadmap de Entregas

### MVP — Mês 1–3

```
Mês 1: Foundation
├── Week 1-2: Setup
│   ├── Repos (frontend + backend)
│   ├── CI/CD (GitHub Actions → Azure Container Apps)
│   ├── Docker compose (dev environment)
│   ├── Django project structure + BaseModel
│   ├── Next.js project structure + shadcn/ui setup
│   ├── PostgreSQL schema (Identity + Core tables)
│   └── Auth flow (register, login, JWT, Google OAuth)
├── Week 3-4: Auth + Onboarding
│   ├── Backend: Auth endpoints + permissions
│   ├── Frontend: Login, Register, Forgot Password
│   ├── Backend: Professional onboarding
│   ├── Frontend: Onboarding wizard (3 steps)
│   └── SendGrid: Welcome email + password reset

Mês 2: Core Features
├── Week 5-6: CRM + Patients
│   ├── Backend: Patients CRUD + filters
│   ├── Frontend: CRM Dashboard
│   ├── Backend: Patient invite flow (SendGrid)
│   ├── Frontend: Add patient form
│   ├── Backend: Branding CRUD
│   └── Frontend: Branding settings
├── Week 7-8: Protocols + Nutrition
│   ├── Backend: Protocols + Modules CRUD
│   ├── Backend: Meal Plans + Meals + Meal Items CRUD
│   ├── Frontend: Protocol editor
│   ├── Frontend: Meal plan builder
│   ├── Backend: Training Plans + Exercises CRUD
│   └── Frontend: Training plan builder

Mês 3: Check-ins + Patient Experience
├── Week 9-10: Check-ins
│   ├── Backend: Checkin schedules + checkins
│   ├── Backend: Risk score calculation (worker)
│   ├── Frontend: Check-in form (paciente)
│   ├── Frontend: Check-in review (profissional)
│   ├── Backend: Body compositions (básico — peso)
│   └── Frontend: Weight chart (Recharts)
├── Week 11-12: Patient App + Daily
│   ├── Backend: Daily tasks generation (worker)
│   ├── Backend: Daily task completions
│   ├── Frontend: Tela "Hoje" (paciente)
│   ├── Frontend: Tela "Home" (paciente)
│   ├── Backend: Threads + Messages
│   ├── Frontend: Mensagens
│   └── QA + Bug fixes + Deploy staging
```

### V1.1 — Mês 4–6

```
Mês 4: Templates + Suplementação + Hidratação
├── Protocol templates (save + apply)
├── Supplementation module
├── Hydration module + water intake logs
└── Patient: water tracking UI

Mês 5: Measurements + Photos + Versioning
├── Body measurements (18 body sites)
├── Progress photos (upload + thumbnail + timeline)
├── Protocol versioning (snapshots)
└── Charts: body site evolution, photo comparativo

Mês 6: Analytics + Polish
├── mv_patient_dashboard (materialized view)
├── Professional analytics dashboard
├── Subscription upgrade flow (payment gateway)
├── Performance optimization
└── QA + Launch V1.1
```

### V1.2 — Mês 7–9

```
Mês 7-8: Biomarkers + Advanced Analytics
├── Biomarker panels + biomarkers
├── Biomarker charts + flag alerts
├── mv_protocol_effectiveness
├── InBody manual import
└── Audit log

Mês 9: Scale Prep
├── Table partitioning (checkins, messages, water_intake)
├── Full-text search em meal_items
├── Performance testing + optimization
├── Data export (Pro plan)
└── QA + Launch V1.2
```

### V2.0 — Ano 2

```
IA Assistive
├── AI check-in summary (OpenAI/Claude)
├── Retention prediction model
├── Smart alerts & suggestions

Notifications (SendGrid)
├── Check-in reminders (e-mail)
├── Weekly professional summary
├── Notification preferences

Scale
├── Read replicas
├── CDN for static assets
├── TimescaleDB evaluation
└── Internationalization (en)
```

---

## 20. Riscos e Mitigações

| # | Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|---|
| R1 | Escopo creep (features demais no MVP) | Alta | Alto | PRD como contrato, decisões não negociáveis do Product Vision |
| R2 | Performance do PostgreSQL com daily_tasks (40M+/ano 3) | Média | Alto | Partitioning planejado, materialized views, índices otimizados |
| R3 | Segurança de dados de saúde (LGPD) | Média | Crítico | RLS, soft delete, audit log, criptografia, Key Vault |
| R4 | Vendor lock-in Azure | Baixa | Médio | Docker containers, abstrações de storage/cache, Django ORM |
| R5 | Complexidade do protocolo integrado | Média | Médio | Serializers cascading, templates, UI step-by-step |
| R6 | Adoção lenta (cold start) | Média | Alto | Plano Free generoso, referral, conteúdo educacional |
| R7 | Downtime em deploy | Baixa | Médio | Rolling deployment (Container Apps), health checks, zero-downtime migrations |
| R8 | Celery worker crashes | Média | Médio | `acks_late=True`, dead letter queue, retry policy, monitoring |
| R9 | Race conditions em check-in/risk_score | Baixa | Médio | `select_for_update()` em updates críticos, idempotent tasks |
| R10 | Cost overrun Azure | Média | Médio | Burstable SKUs, auto-scaling com max caps, cost alerts |

---

## 21. Decisões Arquiteturais (ADRs)

### ADR-001: Next.js App Router vs. Pages Router
- **Decisão:** App Router
- **Motivo:** Server Components por padrão, layouts aninhados, streaming SSR, melhor DX para projeto novo
- **Trade-off:** Ecossistema ainda em maturação vs. Pages Router

### ADR-002: Django DRF vs. FastAPI
- **Decisão:** Django DRF
- **Motivo:** ORM maduro, admin gratuito, ecossistema de auth enorme, migrations, django-filter, dj-rest-auth — tudo pronto. FastAPI exigiria montar cada peça manualmente.
- **Trade-off:** Performance raw inferior ao FastAPI (irrelevante no volume esperado)

### ADR-003: Celery vs. Azure Functions para Workers
- **Decisão:** Celery + Redis
- **Motivo:** Controle total sobre scheduling, retry policies, dead letter queues. Roda no mesmo Container Apps. Sem vendor lock-in.
- **Trade-off:** Mais infra para gerenciar vs. serverless

### ADR-004: JWT vs. Session Auth
- **Decisão:** JWT (access + refresh token)
- **Motivo:** Stateless, funciona com mobile futuro, padrão de mercado para SPAs
- **Trade-off:** Complexidade de refresh rotation

### ADR-005: Cursor Pagination vs. Offset
- **Decisão:** Cursor-based pagination
- **Motivo:** Performance consistente em grandes datasets (pacientes, check-ins, daily_tasks)
- **Trade-off:** Mais complexo de implementar, sem "ir para página 5"

### ADR-006: Azure Blob Storage vs. S3
- **Decisão:** Azure Blob Storage
- **Motivo:** Consistência com stack Azure, `django-storages` suporta nativamente, SAS tokens para acesso granular
- **Trade-off:** Menos documentação open-source vs. S3

### ADR-007: Monorepo vs. Multi-repo
- **Decisão:** Multi-repo (frontend + backend separados)
- **Motivo:** Deploy independente, times independentes futuro, CI/CD mais simples
- **Trade-off:** Shared types (Zod schemas) precisam de pacote npm/pypi compartilhado ou code gen

### ADR-008: SendGrid vs. Amazon SES
- **Decisão:** SendGrid
- **Motivo:** Simplicidade de setup, templates visuais, analytics de delivery, tier gratuito generoso (100 emails/dia)
- **Trade-off:** Custo por volume > SES em grande escala

### ADR-009: Materialized Views vs. Denormalized Tables
- **Decisão:** Materialized Views com refresh periódico
- **Motivo:** Dados analíticos não precisam ser real-time (15 min delay aceitável), evita complexidade de sync em denormalized tables
- **Trade-off:** Dados levemente stale, refresh é operação pesada

### ADR-010: RLS no PostgreSQL vs. Filtro na Aplicação
- **Decisão:** RLS + filtro na aplicação (defense in depth)
- **Motivo:** Segurança em camadas — mesmo que o código da aplicação tenha bug, o banco não vaza dados
- **Trade-off:** Overhead de `SET` em cada request (~1ms)

---

## Glossário

| Termo | Definição |
|---|---|
| **Protocolo** | Bundle integrado de nutrição + treino + suplementação + hidratação atribuído a um paciente |
| **Módulo** | Componente de um protocolo (nutrition, training, supplementation, hydration) |
| **Template** | Protocolo modelo reutilizável criado pelo profissional |
| **Check-in** | Coleta periódica e estruturada de dados do paciente |
| **Risk Score** | Pontuação 0-100 que indica risco de abandono do paciente |
| **Daily Tasks** | Tarefas diárias geradas automaticamente a partir do protocolo ativo |
| **Body Composition** | Registro de peso, gordura, massa magra e outros dados de composição corporal |
| **Body Site** | Local específico do corpo onde se mede circunferência |
| **Biomarker** | Indicador laboratorial (exame de sangue) com valor e range de referência |
| **Thread** | Conversa contextual entre profissional e paciente |
| **Branding** | Identidade visual personalizada do profissional (logo, cores, nome do método) |
| **ICP** | Ideal Customer Profile — perfil ideal do cliente |
| **Materialized View** | View pré-computada no PostgreSQL, atualizada periodicamente |
| **RLS** | Row-Level Security — isolamento de dados no nível do banco |
| **SAS Token** | Shared Access Signature — URL temporária para acesso a arquivo no Azure Blob Storage |
