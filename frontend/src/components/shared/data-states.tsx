import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle2, ShieldAlert, Sparkles } from "lucide-react";

export function LoadingState({ label = "Carregamento em andamento..." }: { label?: string }) {
  return (
    <section className="kv-surface rounded-2xl p-5" aria-live="polite" aria-busy="true">
      <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold">
        <Sparkles className="size-4 text-primary" />
        {label}
      </p>
      <div className="space-y-3">
        <div className="h-4 w-40 animate-pulse rounded bg-muted" />
        <div className="h-4 w-full animate-pulse rounded bg-muted" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
        <div className="h-16 w-full animate-pulse rounded bg-muted" />
      </div>
    </section>
  );
}

export function EmptyState({
  title,
  description,
  ctaLabel,
  onCta,
}: {
  title: string;
  description: string;
  ctaLabel?: string;
  onCta?: () => void;
}) {
  return (
    <section className="kv-surface rounded-2xl p-5" aria-live="polite">
      <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight">
        <Sparkles className="size-4 text-chart-2" />
        {title}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      {ctaLabel && onCta ? (
        <Button className="mt-4" variant="outline" onClick={onCta}>
          {ctaLabel}
        </Button>
      ) : null}
    </section>
  );
}

export function ErrorState({
  description,
  onRetry,
}: {
  description: string;
  onRetry?: () => void;
}) {
  return (
    <section className="kv-surface rounded-2xl border-destructive/35 bg-destructive/5 p-5" aria-live="assertive" role="alert">
      <p className="inline-flex items-center gap-2 text-sm font-semibold text-destructive">
        <AlertCircle className="size-4" />
        Erro
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      {onRetry ? (
        <Button className="mt-4" onClick={onRetry}>
          Tentar novamente
        </Button>
      ) : null}
    </section>
  );
}

export function SuccessState({
  message = "Ação concluída com sucesso.",
}: {
  message?: string;
}) {
  return (
    <section className="kv-surface rounded-2xl p-5" aria-live="polite">
      <p className="inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-primary/10 px-3 py-2 text-sm font-medium text-foreground">
        <CheckCircle2 className="size-4 text-primary" />
        {message}
      </p>
    </section>
  );
}

export function PermissionState({
  title = "Sem permissão",
  description = "Você não tem acesso a esta área.",
  ctaLabel,
  onCta,
}: {
  title?: string;
  description?: string;
  ctaLabel?: string;
  onCta?: () => void;
}) {
  return (
    <section className="kv-surface rounded-2xl p-5" aria-live="assertive">
      <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight">
        <ShieldAlert className="size-4 text-chart-4" />
        {title}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      {ctaLabel && onCta ? (
        <Button className="mt-4" variant="outline" onClick={onCta}>
          {ctaLabel}
        </Button>
      ) : null}
    </section>
  );
}
