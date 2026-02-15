# KoreVitta — Screens & Wireframes Dev-Ready

## v1.0 — FrontEnd Lead + UX/UI Lead Blueprint

> Baseado em:
> - `KoreVitta_ProductVision_v1.md`
> - `KoreVitta_PRD_v1.md`
> - `KoreVitta_DataModel_v2.md`

---

## 1. Objetivo do Documento

Este documento define **todas as telas da aplicação KoreVitta** com foco em:
- Arquitetura de navegação e experiência (UX)
- Padrões de UI SaaS moderno (UI)
- Especificação funcional development-ready (FE + API contracts)
- Backlog prático por sprint para execução do time

Escopo coberto:
1. Landing e autenticação
2. Área do profissional (CRM, protocolos, check-ins, evolução, mensagens, configurações)
3. Área do paciente (home, hoje, check-in, progresso, protocolo, mensagens)
4. Telas V1.1 e V1.2 (hidratação, biomarcadores, analytics, templates avançados)
5. Wireframes de referência (ASCII + composição de blocos)

---

## 2. Princípios de Design (Não Negociáveis)

### 2.1 Produto (Product Vision)
1. Simplicidade acima de tudo
2. Fluxo orientado a retenção (não complexidade clínica)
3. Clareza diária para paciente (“o que fazer hoje”)
4. Eficiência operacional para profissional (menos trabalho repetitivo)

### 2.2 UX
1. **One primary action per screen**
2. Feedback imediato em ações críticas (salvar, ativar protocolo, concluir check-in)
3. Estados explícitos: loading, empty, erro, sucesso
4. Navegação consistente por role

### 2.3 UI SaaS moderna
1. Densidade informacional progressiva (overview → detalhe)
2. Blocos em cards com hierarquia visual clara
3. Sistema de tokens (Tailwind + design system) sem hardcode
4. Comportamento responsivo mobile-first no paciente e desktop-first no profissional

### 2.4 Engenharia Frontend
1. Contratos tipados por feature
2. Skeletons em páginas de alto tráfego
3. Formulários com validação schema-first
4. Estrutura de componentes com separação: page → feature sections → reusable UI

---

## 3. Mapa de Navegação (Information Architecture)

## 3.1 Rotas públicas
- `/` Landing
- `/login`
- `/register`
- `/forgot-password`

## 3.2 Rotas profissional
- `/dashboard`
- `/onboarding`
- `/patients`
- `/patients/[id]`
- `/patients/[id]/protocol`
- `/patients/[id]/checkins`
- `/patients/[id]/progress`
- `/patients/[id]/messages`
- `/protocols/[id]`
- `/templates`
- `/analytics`
- `/settings/profile`
- `/settings/branding`
- `/settings/subscription`

## 3.3 Rotas paciente
- `/home`
- `/today`
- `/checkin`
- `/progress`
- `/protocol`
- `/messages`

---

## 4. Inventário Completo de Telas

Legenda:
- **P0** = MVP obrigatório
- **P1** = V1.1
- **P2** = V1.2+

| Código | Tela | Persona | Prioridade | Fase |
|---|---|---|---|---|
| PUB-01 | Landing | Público | P0 | MVP |
| AUTH-01 | Login | Público | P0 | MVP |
| AUTH-02 | Cadastro Profissional | Público | P0 | MVP |
| AUTH-03 | Aceite de Convite (Paciente) | Paciente | P0 | MVP |
| AUTH-04 | Recuperar Senha | Público | P0 | MVP |
| ONB-01 | Onboarding Profissional (Wizard) | Profissional | P0 | MVP |
| PRO-01 | Dashboard CRM | Profissional | P0 | MVP |
| PRO-02 | Lista de Pacientes | Profissional | P0 | MVP |
| PRO-03 | Novo Paciente + Convite | Profissional | P0 | MVP |
| PRO-04 | Perfil do Paciente (Overview) | Profissional | P0 | MVP |
| PRO-05 | Check-ins do Paciente | Profissional | P0 | MVP |
| PRO-06 | Revisão de Check-in | Profissional | P0 | MVP |
| PRO-07 | Protocolo Integrado (Editor) | Profissional | P0 | MVP |
| PRO-08 | Módulo Nutrição (Plano/Refeições/Itens) | Profissional | P0 | MVP |
| PRO-09 | Módulo Treino (Planos/Exercícios) | Profissional | P0 | MVP |
| PRO-10 | Mensagens (Thread list + chat) | Profissional | P0 | MVP |
| PRO-11 | Branding Settings | Profissional | P0 | MVP |
| PRO-12 | Subscription/Upgrade | Profissional | P0 | MVP |
| PAT-01 | Home Paciente | Paciente | P0 | MVP |
| PAT-02 | Hoje (Checklist diário) | Paciente | P0 | MVP |
| PAT-03 | Meu Check-in (Formulário) | Paciente | P0 | MVP |
| PAT-04 | Meu Progresso | Paciente | P0 | MVP |
| PAT-05 | Meu Protocolo | Paciente | P0 | MVP |
| PAT-06 | Mensagens | Paciente | P0 | MVP |
| PRO-13 | Templates de Protocolo | Profissional | P1 | V1.1 |
| PRO-14 | Aplicar Template | Profissional | P1 | V1.1 |
| PRO-15 | Hidratação (meta + histórico) | Profissional | P1 | V1.1 |
| PAT-07 | Hidratação (log de água) | Paciente | P1 | V1.1 |
| PRO-16 | Body Measurements | Profissional | P1 | V1.1 |
| PRO-17 | Progress Photos | Profissional | P1 | V1.1 |
| PRO-18 | Analytics Dashboard | Profissional | P1 | V1.1 |
| PRO-19 | Biomarcadores / Exames | Profissional | P2 | V1.2 |
| PRO-20 | Efetividade de Protocolos | Profissional | P2 | V1.2 |
| PRO-21 | Audit Trail Viewer (interno) | Profissional/Admin | P2 | V1.2 |

---

## 5. Especificação por Tela (Development-Ready)

## 5.1 Pública & Auth

### PUB-01 — Landing
**Objetivo:** conversão para cadastro (Free/Core/Pro).  
**Layout:** Hero + Problema + Solução + Jornada + Preços + CTA final.  
**Componentes-chave:** pricing cards, prova social, FAQ curto.  
**CTA primária:** “Começar grátis”.  
**Eventos:** `landing_view`, `pricing_cta_click`, `signup_start_click`.

### AUTH-01 — Login
**Campos:** email, senha, entrar com Google.  
**Estados:** credenciais inválidas, conta não verificada, loading.  
**Ações:** login, ir para reset, ir para cadastro.

### AUTH-02 — Cadastro Profissional
**Campos:** nome, email, senha, profissão, aceite termos.  
**Validação:** senha forte, email único.  
**Pós-sucesso:** redireciona para ONB-01.

### AUTH-03 — Aceite de Convite Paciente
**Entradas:** token de convite + criação de conta.  
**Resultado:** vínculo com profissional + acesso ao home paciente.

### AUTH-04 — Recuperar Senha
**Passos:** solicitar email → confirmar token → definir nova senha.

---

## 5.2 Onboarding Profissional

### ONB-01 — Wizard (3 Steps)
**Step 1:** Profissão + registro (CRN/CREF/CRM)  
**Step 2:** Branding básico (nome método, cor, logo)  
**Step 3:** Preferências (cadência default check-in)

**Critérios:**
- Progresso visual persistente
- Salvamento por etapa
- Finalização obrigatória para liberar dashboard

---

## 5.3 Profissional — Core MVP

### PRO-01 — Dashboard CRM
**Objetivo:** visão operacional diária.  
**Blocos:**
1. KPIs (ativos, em risco, pendentes review, adesão)
2. Lista de pacientes com busca/filtro/ordenação
3. Alertas de risco

**Dados principais (API):**
- `GET /v1/patients`
- `GET /v1/checkins/pending-review`
- `GET /v1/analytics/dashboard` (ou view equivalente)

**Estados vazios:**
- “Nenhum paciente ainda” + CTA “Adicionar paciente”
- “Nenhum check-in pendente”

### PRO-02 — Lista de Pacientes
**Tabela:** Nome | Status | Risk | Protocolo Ativo | Próximo Check-in | Ações.  
**Filtros:** status, tags, texto livre.  
**Ações rápidas:** abrir perfil, mensagem, arquivar.

### PRO-03 — Novo Paciente + Convite
**Campos:** nome, email, telefone, objetivo inicial, peso/altura opcional.  
**Ação final:** cria paciente + dispara convite por email.

### PRO-04 — Perfil do Paciente (Overview)
**Seções:**
1. Header (nome, status, risco, CTA ações)
2. Snapshot (objetivo, protocolo, próximo check-in)
3. Timeline resumida (check-ins, mudanças de protocolo, mensagens)
4. Tabs: Overview | Protocol | Check-ins | Progress | Messages

### PRO-05 — Check-ins do Paciente
**Lista cronológica:** scheduled/pending/completed/missed.  
**Ações:** revisar, comparar, abrir detalhes.

### PRO-06 — Revisão de Check-in
**Conteúdo:** respostas do check-in + fotos + campos de aderência + notas do profissional.  
**Ação:** marcar como revisado.  
**Regra:** atualizar `risk_score` após revisão/evento.

### PRO-07 — Protocolo Integrado (Editor)
**Objetivo:** montar bundle único de nutrição + treino (+ supl/hidratação em V1.1).  
**Blocos:** header do protocolo, módulos ativados, versão atual, publish/activate.

### PRO-08 — Módulo Nutrição
**Estrutura:** Meal Plans → Meals → Meal Items.  
**UX:** edição em painel lateral + drag/sort opcional (futuro).  
**MVP:** CRUD completo sem sobrecarga visual.

### PRO-09 — Módulo Treino
**Estrutura:** Training Plans → Exercises (séries, reps, descanso, vídeo).  
**UX:** biblioteca de exercícios + inserção rápida.

### PRO-10 — Mensagens Profissional
**Layout 2 colunas:** lista de threads + chat ativo.  
**Meta:** comunicação contextual sem virar WhatsApp completo.

### PRO-11 — Branding Settings
**Campos:** logo, cor primária, nome do método.  
**Preview:** mini preview do app paciente com tema aplicado.

### PRO-12 — Subscription/Upgrade
**Conteúdo:** comparação Free/Core/Pro + limite de pacientes + CTA upgrade.

---

## 5.4 Paciente — Core MVP

### PAT-01 — Home Paciente
**Objetivo:** orientação clara de status e progresso.  
**Blocos:** objetivo, fase/protocolo, próximo check-in, status (em dia/atrasado).

### PAT-02 — Hoje (Tela principal diária)
**Blocos:**
1. Checklist de tarefas
2. Plano alimentar do dia
3. Treino do dia
4. Suplementação (V1.1 completo)
5. Água (V1.1 completo)

**Ação primária:** marcar conclusão de tarefas.

### PAT-03 — Meu Check-in
**Formulário dinâmico por schema:** humor, energia, sono, aderência, peso, fotos.  
**Ação:** enviar check-in.  
**Pós-ação:** feedback + tela de sucesso.

### PAT-04 — Meu Progresso
**MVP:** gráfico peso + histórico check-ins + timeline de fotos básica.  
**V1.1+:** composição corporal, medidas por região, comparativos.

### PAT-05 — Meu Protocolo
**Visualização simplificada:** módulos ativos + instruções + rotina da semana.

### PAT-06 — Mensagens Paciente
**Layout single column (mobile-first)** com thread ativa e composer.

---

## 5.5 V1.1 / V1.2 (Telas Avançadas)

### PRO-13 — Templates de Protocolo
Lista com nome, uso, tags, data atualização, ações (editar/aplicar).

### PRO-14 — Aplicar Template
Fluxo: selecionar template → paciente → ajustar módulos → confirmar criação.

### PRO-15 / PAT-07 — Hidratação
- Profissional define meta diária (ml ou ml/kg)
- Paciente registra ingestões rápidas (+200ml, +300ml, custom)
- Barra de progresso diária

### PRO-16 — Body Measurements
Registro e gráficos por `body_site` (cintura, braço, coxa etc.)

### PRO-17 — Progress Photos
Timeline visual + comparativo de duas datas lado a lado.

### PRO-18 — Analytics Dashboard
Cards e ranking com base em `mv_patient_dashboard`.

### PRO-19 — Biomarcadores / Exames
Painéis de exame, flags fora de range, gráfico temporal por biomarcador.

### PRO-20 — Efetividade de Protocolos
Ranking de templates por resultado e retenção (`mv_protocol_effectiveness`).

### PRO-21 — Audit Trail
Consulta de eventos críticos para compliance e suporte.

---

## 6. Wireframes (Textuais) — Referência de Implementação

## 6.1 PRO-01 Dashboard CRM

```text
┌────────────────────────────────────────────────────────────────────────────┐
│ Sidebar                     Dashboard CRM                                  │
│                              [ + Novo Paciente ]                           │
├────────────────────────────────────────────────────────────────────────────┤
│ [Ativos: 42] [Em Risco: 9] [Pendentes Review: 6] [Adesão 7d: 74%]        │
├────────────────────────────────────────────────────────────────────────────┤
│ 🔍 Buscar paciente...  [Status ▼] [Tag ▼] [Ordenar ▼]                    │
├────────────────────────────────────────────────────────────────────────────┤
│ Nome        Status      Risco   Protocolo         Próx Check-in   Ações   │
│ Ana Silva   Ativo       12      Cutting 12s       em 2 dias       ...     │
│ Bruno       Em risco    68      Recomp 8s         atrasado        ...     │
└────────────────────────────────────────────────────────────────────────────┘
```

## 6.2 PRO-07 Protocolo Integrado (Editor)

```text
┌────────────────────────────────────────────────────────────────────────────┐
│ Protocolo: Cutting 12 semanas          [Salvar rascunho] [Ativar]         │
│ Paciente: Ana Silva    Versão: v3                                       │
├────────────────────────────────────────────────────────────────────────────┤
│ Módulos: [Nutrição ✓] [Treino ✓] [Suplementação +] [Hidratação +]         │
├────────────────────────────────────────────────────────────────────────────┤
│ Área módulo ativo (Nutrição)                                               │
│  - Meal Plans                                                              │
│  - Meals                                                                   │
│  - Meal Items                                                              │
│  - Macro resumo                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

## 6.3 PAT-02 Hoje

```text
┌───────────────────────────────────────────────┐
│ Bom dia, Ana                                  │
│ Objetivo: -8kg | Semana 4/12 | Em dia ✅       │
│ Próximo check-in: Sex 14/02                   │
├───────────────────────────────────────────────┤
│ HOJE                                           │
│ [ ] Café da manhã                              │
│ [ ] Almoço                                     │
│ [ ] Treino A                                   │
│ [ ] Creatina 5g                                │
│ Água: 1200 / 3000 ml  ████████░░░░░            │
├───────────────────────────────────────────────┤
│ [Adicionar água]  [Abrir check-in]             │
└───────────────────────────────────────────────┘
```

## 6.4 PRO-19 Biomarcadores (V1.2)

```text
┌────────────────────────────────────────────────────────────────────────────┐
│ Exames - Ana Silva                                  [Novo painel]         │
├────────────────────────────────────────────────────────────────────────────┤
│ Painel 14/02/2026  Lab X  [PDF]                                          │
│ Glicose 101 mg/dL   (High)   gráfico                                     │
│ HDL 54 mg/dL        (Normal) gráfico                                     │
│ Vitamina D 21 ng/mL (Low)    gráfico                                     │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 7. Estados de UI Obrigatórios por Tela

Cada tela deve contemplar:
1. **Loading** (skeleton)
2. **Empty** (mensagem + CTA)
3. **Error** (retry + feedback)
4. **Success feedback** (toast ou inline)
5. **Permission state** (sem acesso)

Padrões:
- Tabelas: skeleton row + empty row com CTA
- Formulários: validação inline + summary de erro
- Gráficos: fallback “dados insuficientes”

---

## 8. Contratos de Integração FE (por domínio)

## 8.1 Auth
- `POST /v1/auth/register`
- `POST /v1/auth/login`
- `POST /v1/auth/password/reset`

## 8.2 Pacientes / CRM
- `GET /v1/patients`
- `POST /v1/patients`
- `GET /v1/patients/:id`

## 8.3 Protocolos
- `GET /v1/patients/:id/protocols`
- `POST /v1/patients/:id/protocols`
- `GET /v1/protocols/:id/modules`

## 8.4 Check-ins
- `GET /v1/patients/:id/checkins`
- `POST /v1/checkins/:id/complete`
- `POST /v1/checkins/:id/review`

## 8.5 Progress
- `GET /v1/patients/:id/body-compositions`
- `GET /v1/me/progress`

## 8.6 Communication
- `GET /v1/threads`
- `GET /v1/threads/:id/messages`
- `POST /v1/threads/:id/messages`

## 8.7 Analytics (V1.1+)
- `GET /v1/analytics/dashboard`
- `GET /v1/analytics/protocol-effectiveness`

---

## 9. Acessibilidade e Qualidade Visual

Checklist obrigatório por PR:
- Contraste AA mínimo
- Navegação por teclado
- Focus visible em componentes interativos
- Labels em todos campos
- `aria-live` para feedback crítico
- Touch targets mobile ≥ 44px

---

## 10. Sprint Plan (Development-Ready)

## Sprint 1 — Foundation + Auth + Onboarding
**Objetivo:** fundação de layout e entrada no produto.

Tarefas FE/UX:
- Implementar layouts base (public/auth/pro/patient)
- PUB-01 Landing (seções + pricing)
- AUTH-01/02/04
- ONB-01 wizard
- Design tokens e UI kit base (botões, form controls, cards, table, skeleton, toast)

Critérios de aceite:
- Usuário profissional consegue cadastrar, logar e concluir onboarding
- Estados loading/error implementados

---

## Sprint 2 — CRM Profissional
**Objetivo:** operação diária do profissional.

Tarefas:
- PRO-01 Dashboard CRM
- PRO-02 Lista de Pacientes
- PRO-03 Novo Paciente + convite
- PRO-04 Perfil do paciente (overview)

Critérios:
- CRUD básico de paciente
- Filtros/busca funcionais
- Tabela responsiva desktop/tablet

---

## Sprint 3 — Protocolos Integrados MVP
**Objetivo:** criação e ativação de protocolo bundle.

Tarefas:
- PRO-07 editor de protocolo
- PRO-08 módulo nutrição
- PRO-09 módulo treino
- PRO-13 templates (básico salvar/listar)

Critérios:
- Protocolo completo pode ser criado e ativado
- Versionamento mínimo exibido

---

## Sprint 4 — Check-ins + Paciente Core
**Objetivo:** ciclo de acompanhamento completo.

Tarefas:
- PRO-05/06 check-ins (lista + revisão)
- PAT-01 home
- PAT-02 hoje
- PAT-03 check-in
- PAT-05 protocolo

Critérios:
- Paciente envia check-in
- Profissional revisa e vê histórico
- Tela Hoje operacional

---

## Sprint 5 — Progresso + Mensagens + Branding/Billing
**Objetivo:** retenção e monetização MVP.

Tarefas:
- PAT-04 progresso
- PRO-10 + PAT-06 mensagens
- PRO-11 branding
- PRO-12 upgrade/subscription

Critérios:
- Timeline de progresso funcional
- Mensageria contextual funcional
- Upgrade de plano disponível

---

## Sprint 6 — V1.1 (Hidratação + Analytics + Photos/Measurements)
**Objetivo:** ampliar valor percebido com analytics e evolução visual.

Tarefas:
- PRO-15/PAT-07 hidratação
- PRO-16 medidas corporais
- PRO-17 progress photos
- PRO-18 analytics dashboard
- PRO-14 aplicar template com ajustes

Critérios:
- Métricas consolidadas no dashboard
- Fluxo de hidratação completo

---

## Sprint 7 — V1.2 (Biomarcadores + Efetividade)
**Objetivo:** camada analítica avançada.

Tarefas:
- PRO-19 biomarcadores
- PRO-20 efetividade de protocolos
- PRO-21 audit viewer (interno)

Critérios:
- Visualização temporal de biomarcadores
- Ranking de templates por resultado

---

## 11. Matriz de Entrega por Time

| Stream | Responsável | Entregáveis |
|---|---|---|
| UX | UX/UI Lead | fluxos, wireframes de baixa/média, specs de interação |
| UI | Frontend Design Engineer | design system, componentes base, tokens |
| FE Feature | FrontEnd Lead + Squad | páginas, integrações API, estados, eventos |
| QA | QA Engineer | testes funcionais e regressão visual |
| Produto | PM/Founder | priorização, critérios de aceite, validação de ICP |

---

## 12. Definição de Pronto (DoD)

Uma tela só é considerada pronta quando:
1. Critérios funcionais atendidos
2. Estados de loading/empty/error implementados
3. Acessibilidade validada
4. Telemetria mínima adicionada
5. Testes de fluxo crítico aprovados
6. Design review aprovado

---

## 13. Backlog Técnico Transversal (Recomendado)

1. Biblioteca de componentes compartilhados (forms, tables, layout shells)
2. Camada de dados com hooks por domínio
3. Feature flags para V1.1/V1.2
4. Contratos API versionados
5. Storybook para componentes críticos
6. Testes E2E nos fluxos P0 (auth, paciente hoje, check-in, revisão)

---

## 14. Decisão de Sequenciamento (Resumo Executivo)

Para maximizar retenção no ICP do Product Vision:
1. Entrar rápido no valor (CRM + Hoje + Check-in)
2. Evitar complexidade prematura de analytics avançado
3. Construir módulos integrados de protocolo antes de IA
4. Escalar visual de progresso e evidência de resultado (fotos + gráficos)

---

## 15. Próximos Passos Imediatos

1. Aprovar este documento como baseline de UX/FE
2. Quebrar Sprint 1 em tickets (Jira/Linear)
3. Produzir wireframes high-fidelity das telas P0
4. Iniciar implementação foundation + auth + onboarding
