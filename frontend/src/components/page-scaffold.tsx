"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { ScreenState } from "@/lib/mock-screen-state";
import { EmptyState, ErrorState, LoadingState, PermissionState, SuccessState } from "@/components/shared/data-states";

type QuickAction = {
  label: string;
  href: string;
};

type PageScaffoldProps = {
  code: string;
  title: string;
  objective: string;
  primaryAction?: QuickAction;
  sections?: string[];
  notes?: string[];
};

export function PageScaffold({
  code,
  title,
  objective,
  primaryAction,
  sections = [],
  notes = [],
}: PageScaffoldProps) {
  const pathname = usePathname();
  const [currentState, setCurrentState] = useState<ScreenState>("loading");

  const loadState = useCallback(async (showLoading = false) => {
    if (showLoading) setCurrentState("loading");
    try {
      const response = await fetch(
        `/api/mock/screen-state?pathname=${encodeURIComponent(pathname || "/")}`,
        {
          method: "GET",
          cache: "no-store",
        },
      );

      if (!response.ok) {
        setCurrentState("error");
        return;
      }

      const payload = (await response.json()) as { state?: ScreenState };
      setCurrentState(payload.state ?? "ready");
    } catch {
      setCurrentState("error");
    }
  }, [pathname]);

  useEffect(() => {
    let isActive = true;

    const run = async () => {
      try {
        const response = await fetch(
          `/api/mock/screen-state?pathname=${encodeURIComponent(pathname || "/")}`,
          {
            method: "GET",
            cache: "no-store",
          },
        );

        if (!isActive) return;

        if (!response.ok) {
          setCurrentState("error");
          return;
        }

        const payload = (await response.json()) as { state?: ScreenState };
        if (!isActive) return;
        setCurrentState(payload.state ?? "ready");
      } catch {
        if (!isActive) return;
        setCurrentState("error");
      }
    };

    void run();

    return () => {
      isActive = false;
    };
  }, [pathname]);

  const renderState = () => {
    if (currentState === "loading") {
      return <LoadingState label="Carregando tela" />;
    }

    if (currentState === "empty") {
      return (
        <EmptyState
          title="Nenhum dado disponível"
          description="Não há dados para exibir nesta tela no momento."
          ctaLabel={primaryAction?.label}
          onCta={
            primaryAction
              ? () => {
                  window.location.href = primaryAction.href;
                }
              : undefined
          }
        />
      );
    }

    if (currentState === "error") {
      return (
        <ErrorState
          description="Não foi possível carregar os dados da tela."
          onRetry={() => {
            void loadState(true);
          }}
        />
      );
    }

    if (currentState === "success") {
      return <SuccessState />;
    }

    if (currentState === "permission") {
      return <PermissionState />;
    }

    return (
      <>
        <section className="grid gap-4 md:grid-cols-2">
          <article className="kv-surface rounded-2xl p-5">
            <h2 className="text-sm font-semibold">Blocos da tela</h2>
            {sections.length > 0 ? (
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {sections.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-muted-foreground">
                Estrutura inicial criada; detalhes de feature entram na implementação por sprint.
              </p>
            )}
          </article>

          <article className="kv-surface rounded-2xl p-5">
            <h2 className="text-sm font-semibold">Estados obrigatórios</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Carregamento (skeleton)</li>
              <li>• Sem dados (mensagem + CTA)</li>
              <li>• Erro (tentar novamente + feedback)</li>
              <li>• Sucesso (toast/inline)</li>
              <li>• Sem permissão</li>
            </ul>
          </article>
        </section>

        {notes.length > 0 ? (
          <section className="kv-surface rounded-2xl p-5">
            <h2 className="text-sm font-semibold">Notas de implementação</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {notes.map((note) => (
                <li key={note}>• {note}</li>
              ))}
            </ul>
          </section>
        ) : null}
      </>
    );
  };

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 py-2">
      <header className="kv-surface rounded-2xl p-6">
        <p className="kv-pill inline-flex">{code}</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{objective}</p>
        {primaryAction ? (
          <Link
            href={primaryAction.href}
            className="mt-4 inline-flex items-center rounded-xl bg-linear-to-r from-primary to-chart-1 px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            {primaryAction.label}
          </Link>
        ) : null}
      </header>

      {renderState()}
    </main>
  );
}
