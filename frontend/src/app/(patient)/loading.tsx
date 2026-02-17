export default function PatientLoading() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 py-2">
      <section className="kv-surface rounded-2xl p-6" aria-busy="true" aria-live="polite">
        <div className="h-4 w-20 animate-pulse rounded bg-muted" />
        <div className="mt-3 h-8 w-56 animate-pulse rounded bg-muted" />
        <div className="mt-3 h-4 w-full animate-pulse rounded bg-muted" />
      </section>

      <section className="kv-surface rounded-2xl p-5">
        <div className="h-4 w-32 animate-pulse rounded bg-muted" />
        <div className="mt-3 h-4 w-full animate-pulse rounded bg-muted" />
        <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-muted" />
        <div className="mt-2 h-4 w-1/2 animate-pulse rounded bg-muted" />
      </section>
    </div>
  );
}
