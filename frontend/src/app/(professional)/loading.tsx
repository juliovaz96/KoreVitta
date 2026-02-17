export default function ProfessionalLoading() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 py-2">
      <section className="kv-surface rounded-2xl p-6" aria-busy="true" aria-live="polite">
        <div className="h-4 w-24 animate-pulse rounded bg-muted" />
        <div className="mt-3 h-8 w-72 animate-pulse rounded bg-muted" />
        <div className="mt-3 h-4 w-full animate-pulse rounded bg-muted" />
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="kv-surface rounded-2xl p-5">
          <div className="h-4 w-40 animate-pulse rounded bg-muted" />
          <div className="mt-3 h-4 w-full animate-pulse rounded bg-muted" />
          <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-muted" />
          <div className="mt-2 h-4 w-1/2 animate-pulse rounded bg-muted" />
        </div>
        <div className="kv-surface rounded-2xl p-5">
          <div className="h-4 w-40 animate-pulse rounded bg-muted" />
          <div className="mt-3 h-4 w-full animate-pulse rounded bg-muted" />
          <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-muted" />
          <div className="mt-2 h-4 w-1/2 animate-pulse rounded bg-muted" />
        </div>
      </section>
    </div>
  );
}
