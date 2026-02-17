# KoreVitta App

Frontend oficial da KoreVitta, orientado a duas jornadas principais:
- Profissional (CRM, pacientes, protocolos, revisões, análises)
- Paciente (início, rotina diária, check-ins, progresso e mensagens)

Este README descreve a visão arquitetural e operacional do projeto, com foco em escalabilidade, consistência de UX e qualidade de entrega.

---

## 1) Arquitetura em alto nível

### Princípios técnicos
- Organização por persona e domínio para reduzir acoplamento.
- Contratos tipados e hooks de domínio para centralizar regras de dados.
- Estado de servidor com TanStack Query (cache e retry padronizados).
- Design system e tokens visuais como fonte única de verdade de UI.
- Qualidade contínua por gates de lint, build e E2E.

### Stack
- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- TanStack Query 5
- React Hook Form + Zod
- Playwright (E2E)

---

## 2) Estrutura do projeto

```text
src/
	app/
		(auth)/
		(professional)/
		(patient)/
		globals.css
		layout.tsx
		page.tsx
	components/
		auth/
		layout/
		providers/
		shared/
		ui/
	hooks/
	lib/
		fixtures/
		mock-auth.ts
	types/

docs/
	KoreVitta_Frontend_Architecture_v1.md
	KoreVitta_UX_Writing_Glossary_v1.md
	KoreVitta_PRD_v1.md
	KoreVitta_ProductVision_v1.md
	KoreVitta_Screens_Wireframes_DevReady_v1.md
```

---

## 3) Padrões de implementação

### Data layer
- Provider global em `src/components/providers/query-provider.tsx`.
- Padrões de query:
	- `staleTime`: 30s
	- `gcTime`: 5min
	- `refetchOnWindowFocus`: `false`
	- `retry`: `1`

### UX e copy
- Idioma oficial: pt-BR.
- Terminologia centralizada em `docs/KoreVitta_UX_Writing_Glossary_v1.md`.
- Estados mínimos por tela: carregamento, sem dados, erro, sucesso e permissão.

### Segurança de navegação por perfil
- Segregação de áreas por persona em rotas `(professional)` e `(patient)`.
- Guardas de acesso por role via componentes de layout/rota.

---

## 4) Setup local

### Pré-requisitos
- Node.js 20+
- npm 10+

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```

App disponível em `http://localhost:3000`.

---

## 5) Credenciais de acesso (mock)

O ambiente local usa autenticação mock para QA e validação de jornadas:

- Profissional
	- Email: `profissional@korevitta.com`
	- Senha: `Teste@123`
- Paciente
	- Email: `paciente@korevitta.com`
	- Senha: `Teste@123`

Fonte: `src/lib/mock-auth.ts`.

---

## 6) Scripts principais

```bash
npm run dev            # desenvolvimento local
npm run lint           # validação estática
npm run build          # build de produção
npm run start          # start em produção
npm run test:e2e       # E2E headless
npm run test:e2e:headed
npm run test:e2e:ui
```

---

## 7) Qualidade e gates de entrega

Antes de abrir PR, execute:

```bash
npm run lint
npm run build
npm run test:e2e
```

### Observação sobre E2E
- O Playwright está configurado para usar `http://127.0.0.1:3100`.
- O `webServer` do Playwright executa build + start automaticamente na porta `3100`.

---

## 8) Documentação de referência

- Arquitetura frontend: `docs/KoreVitta_Frontend_Architecture_v1.md`
- UX Writing (glossário): `docs/KoreVitta_UX_Writing_Glossary_v1.md`
- Produto e escopo:
	- `docs/KoreVitta_ProductVision_v1.md`
	- `docs/KoreVitta_PRD_v1.md`
	- `docs/KoreVitta_Screens_Wireframes_DevReady_v1.md`

---

## 9) Diretrizes para contribuição

- Manter consistência com design system e tokens existentes.
- Não introduzir hardcode visual fora dos padrões globais.
- Evitar lógica de domínio dentro de componentes de UI genéricos.
- Preservar nomenclatura e microcopy do glossário oficial.
- Priorizar mudanças pequenas, tipadas e verificáveis.
