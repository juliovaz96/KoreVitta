# Copilot Instructions — KoreVitta

## Scope and current reality
- This workspace is split into `frontend/`, `backend/`, `docs/`, `infra/`.
- Active implementation is in `frontend/` (Next.js App Router). `backend/` currently contains docs only.
- Use `docs/KoreVitta_Frontend_Architecture_v1.md` as product/architecture intent, but follow code in `frontend/src` when they diverge.

## Big-picture architecture (frontend)
- Routes are organized by persona using route groups: `src/app/(auth)`, `src/app/(professional)`, `src/app/(patient)`.
- Persona layouts enforce role access via `RoleGate` (`src/components/auth/role-gate.tsx`) and shells:
  - Professional shell: `src/components/layout/professional-shell.tsx`
  - Patient shell: `src/components/layout/patient-shell.tsx`
- Server state is centralized with TanStack Query in `src/components/providers/query-provider.tsx`.
- Data access goes through `apiClient` in `src/lib/api.ts` with two sources:
  - `mock` (default)
  - `http` when `NEXT_PUBLIC_DATA_SOURCE=http`

## Data and hook conventions
- Prefer domain hooks in `src/hooks` (e.g., `usePatients`, `usePatientProtocols`) instead of calling `fetch` in pages.
- Hooks compose `useResource` (`src/hooks/use-resource.ts`), which standardizes:
  - `queryKey` prefix `['resource', ...]`
  - return shape `{ data, loading, refreshing, error, reload }`
- Keep query keys semantic and stable by domain (examples already used: `['patients', ...]`, `['patient-details', id]`, `['patient-protocols', id]`).

## UI/UX implementation patterns
- Reuse primitives from `src/components/ui/*` and shared states from `src/components/shared/data-states.tsx`.
- Every new screen should account for `loading`, `empty`, `error`, `success`, `permission` states.
- Respect design tokens and utilities in `src/app/globals.css` (`kv-*` utilities, CSS variables, dark/light classes).
- Keep copy in pt-BR and aligned with product language from docs.

## Auth and navigation specifics
- Mock auth is localStorage-based (`src/lib/mock-auth.ts`):
  - `korevitta-role`
  - `korevitta-auth-user`
- Login flow (`src/app/(auth)/login/page.tsx`) requires explicit role selection and redirects by role (`/dashboard` or `/home`).

## Development workflow
- Run commands from `frontend/`.
- Setup and quality gates:
  - `npm install`
  - `npm run lint`
  - `npm run build`
  - `npm run test:e2e`
- Playwright config (`playwright.config.ts`) runs production build on `http://127.0.0.1:3100` via `webServer`.

## Change strategy for agents
- Make focused, minimal edits; keep persona boundaries intact.
- Prefer extending existing hooks/types/fixtures before creating parallel patterns.
- If adding endpoints, first extend `FrontendDataClient` in `src/lib/api.ts`, then expose via a domain hook.
- Validate behavior with targeted E2E updates in `tests/e2e/journeys.spec.ts` when user-visible flows change.