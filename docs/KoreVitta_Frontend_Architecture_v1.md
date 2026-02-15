# KoreVitta — Frontend Architecture

## v1.0 — Baseline de Engenharia Frontend, UI e UX

> Baseado em:
> - `KoreVitta_ProductVision_v1.md`
> - `KoreVitta_PRD_v1.md`
> - `KoreVitta_Screens_Wireframes_DevReady_v1.md`

---

## 1. Objetivo do Documento

Este documento define a arquitetura frontend oficial da KoreVitta para guiar:
- decisões de engenharia (escalabilidade, qualidade e velocidade)
- consistência de UI e UX para o ICP do produto
- padronização de implementação por squads
- evolução faseada do MVP até V1.2 sem retrabalho estrutural

Ele é o contrato técnico-produto do frontend.

---

## 2. Princípios Não Negociáveis

### 2.1 Princípios de Produto
1. Simplicidade acima de tudo.
2. Clareza diária para paciente.
3. Eficiência operacional para profissional.
4. Foco em retenção, não em complexidade clínica.

### 2.2 Princípios de Engenharia
1. Contratos tipados por domínio.
2. Server state centralizado com TanStack Query.
3. UI states obrigatórios por tela (`loading`, `empty`, `error`, `success`, `permission`).
4. Acessibilidade e responsividade como requisitos de aceite, não pós-ajustes.
5. Sem hardcode visual fora do design system/tokens.

### 2.3 Princípios de UI/UX Moderna
1. Uma ação primária por tela.
2. Densidade progressiva: overview → detalhe.
3. Feedback imediato para ações críticas.
4. Mobile-first no paciente, desktop-first no profissional.
5. Linguagem visual consistente com proposta “SaaS moderno + bem-estar” (clareza, foco, calma, precisão).

---

## 3. Stack Frontend Oficial

- Framework: Next.js (App Router)
- UI: React + TypeScript + Tailwind CSS + shadcn/ui (primitivos reutilizáveis)
- Data layer: TanStack Query
- Forms: React Hook Form + Zod
- Gráficos: Recharts
- Tabelas CRM: TanStack Table
- i18n: next-intl (pt-BR padrão, en futuro)
- URL state (filtros): nuqs
- Testes E2E: Playwright

---

## 4. Arquitetura de Aplicação

## 4.1 Estrutura por Domínio e Persona

```text
src/
  app/
    (auth)/
    (professional)/
    (patient)/
  components/
    ui/
    shared/
    layout/
    auth/
    providers/
  hooks/
    use-auth.ts
    use-patients.ts
    use-protocols.ts
    use-checkins.ts
    use-today.ts
    use-messages.ts
    ...
  lib/
    api.ts
    mock-auth.ts
    fixtures/
  types/
```

### Regras
1. Rotas agrupadas por persona (`(auth)`, `(professional)`, `(patient)`).
2. Páginas não concentram lógica de fetch complexa; isso vive em hooks de domínio.
3. `components/ui` contém apenas blocos genéricos e sem regra de negócio.
4. `components/shared` contém estados e padrões transversais de UX.

---

## 5. Data Architecture (Server State)

## 5.1 Modelo
- `apiClient` é a porta única de dados (mock/http).
- Hooks de domínio encapsulam `queryKey`, `queryFn`, transformação e reload.
- `QueryProvider` global no layout raiz.

## 5.2 Convenções de Query Key
- Estrutura semântica por domínio:
  - `['patients', ...]`
  - `['patient-details', patientId]`
  - `['patient-checkins', patientId]`
  - `['patient-today']`
  - `['threads']`
  - `['thread-messages', threadId]`

## 5.3 Estratégia de Cache
- `staleTime` padrão: 30s
- `gcTime` padrão: 5min
- `refetchOnWindowFocus`: false (evita flicker)
- `retry`: 1

## 5.4 Mutations
- Toda ação de escrita deve usar mutation dedicada.
- Após sucesso, invalidar queries relacionadas por domínio.
- Sempre retornar feedback de sucesso/erro para o usuário.

---

## 6. Auth, Role e Navegação Segura

## 6.1 Modelo de Acesso
- Profissional e paciente possuem áreas separadas por layout.
- `RoleGate` controla acesso inline por rota de persona.

## 6.2 Fluxo de Login (MVP atual)
- Seleção explícita de perfil no login: profissional/paciente.
- Credenciais fictícias para QA/demo.
- Redirecionamento automático por role:
  - profissional → `/dashboard`
  - paciente → `/home`

## 6.3 Evolução
- Migrar de mock auth para Auth.js + backend JWT mantendo mesma UX.
- Preservar guardas de rota por role no nível de layout + middleware.

---

## 7. Design System e UI Governance

## 7.1 Tokens e Estilo
- Uso obrigatório de tokens em `globals.css` e classes utilitárias padronizadas.
- Proibido hardcode de cor/sombra/fonte fora dos tokens.

## 7.2 Biblioteca de Componentes
- Base em `components/ui` (`button`, `input`, `label`, `card`, etc.).
- Componentes de alto nível por contexto em `components/layout`, `components/auth`, `components/shared`.

## 7.3 Estados de Tela
Todas as telas devem ter:
1. Loading (skeleton)
2. Empty (mensagem + CTA)
3. Error (retry + feedback)
4. Success (toast/inline)
5. Permission state

---

## 8. UX Architecture por Jornada

## 8.1 Profissional (P0)
- Entrada: login → dashboard
- Operação: pacientes → overview → check-ins → revisão → protocolo
- Comunicação: mensagens contextuais por paciente

## 8.2 Paciente (P0)
- Entrada: convite → login → home
- Diário: home → today → check-in
- Retenção: progresso + protocolo + mensagens

## 8.3 Heurísticas de UX
- Uma CTA principal por página.
- Mensagens de erro acionáveis.
- Navegação previsível entre telas irmãs.
- Time-to-value curto nas primeiras interações.

---

## 9. Acessibilidade (A11y) por Padrão

Checklist obrigatório por PR:
- `label` em todos os campos
- `aria-invalid` e `aria-describedby` em validação
- `role="alert"` para erros críticos
- foco no primeiro campo inválido
- contraste mínimo AA
- navegação por teclado
- touch target mobile >= 44px

Sem esse checklist, a tela não está pronta.

---

## 10. Performance e Qualidade Técnica

## 10.1 Metas Frontend
- LCP < 2.5s
- TTFB < 1.5s
- bundle inicial controlado por rota

## 10.2 Estratégias
- Server Components por padrão
- Client Components somente quando necessário
- split por rota e lazy em blocos pesados
- evitar overfetch com query keys granulares

## 10.3 Budgets
- toda rota nova deve justificar dependências adicionais
- gráficos/tabelas só em telas que exigem densidade de dados

---

## 11. Telemetria e Observabilidade Frontend

Eventos mínimos por fluxo crítico:
- `landing_view`, `signup_start_click`
- `login_submit`, `login_success`, `login_error`
- `onboarding_step_complete`, `onboarding_complete`
- `checkin_submit_success`
- `checkin_review_success`
- `protocol_activate_success`

Erros devem ser rastreados com contexto de rota/persona.

---

## 12. Estratégia de Testes

## 12.1 Pirâmide
1. Unitário: utilitários/schemas/hooks críticos
2. Integração: formulários e seções por feature
3. E2E: jornadas P0 (Playwright)

## 12.2 Fluxos E2E mínimos
- login por role (profissional/paciente)
- jornada profissional: dashboard → pacientes → mensagens
- jornada paciente: home/today/check-in/mensagens
- persistência de tema

## 12.3 Gates de Qualidade
- `npm run lint`
- `npm run build`
- `npm run test:e2e`

---

## 13. Fluxo de Entrega (Definition of Done Frontend)

Uma feature só é considerada pronta quando:
1. Requisito funcional entregue
2. Estados obrigatórios de UI implementados
3. A11y checklist validado
4. Telemetria mínima implementada
5. E2E da jornada crítica passando
6. Design review aprovado (consistência visual e UX)

---

## 14. Roadmap Técnico Frontend (Faseado)

## Fase A — Foundation (concluída/parcial)
- layouts por persona
- estados compartilhados
- tema dark/light
- auth mock com role routing

## Fase B — P0 funcional (em execução)
- substituir scaffolds P0 por fluxos reais com hooks de domínio
- consolidar jornadas completas profissional/paciente

## Fase C — V1.1
- templates aplicáveis
- hidratação profissional/paciente
- measurements/photos
- analytics dashboard

## Fase D — V1.2
- biomarcadores
- efetividade de protocolos
- audit viewer

---

## 15. ADRs Frontend (Decisões Arquiteturais)

Registrar ADR sempre que houver mudança estrutural em:
- stack/core libs
- estratégia de auth
- padrão de data fetching/cache
- design system/tokenização
- abordagem de testes e quality gates

Formato recomendado:
1. Contexto
2. Decisão
3. Consequências
4. Alternativas rejeitadas

---

## 16. Regras de Governança para Escalar o Frontend

1. Evitar componentes “one-off” fora do design system.
2. Evitar lógica de domínio dentro de componente visual.
3. Toda rota nova já nasce com estados obrigatórios.
4. Toda integração externa passa por `lib/api.ts` e hooks de domínio.
5. Toda mudança de UX relevante deve atualizar este documento.

---

## 17. Declaração Final

A arquitetura frontend da KoreVitta existe para sustentar um produto simples, moderno e escalável, com execução rápida e qualidade previsível.

Se o profissional opera com mais clareza e o paciente entende exatamente o que fazer hoje, a arquitetura está cumprindo seu papel.
