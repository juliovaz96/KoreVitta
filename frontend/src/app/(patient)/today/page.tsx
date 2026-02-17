"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useToday } from "@/hooks/use-today";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EmptyState, ErrorState, LoadingState } from "@/components/shared/data-states";

export default function PatientTodayPage() {
  const { data, loading, error, reload } = useToday();
  const [localCompleted, setLocalCompleted] = useState<Record<string, boolean>>({});

  const tasks = useMemo(() => {
    if (!data) return [];
    return data.tasks.map((task) => ({
      ...task,
      completed: localCompleted[task.id] ?? task.completed,
    }));
  }, [data, localCompleted]);

  if (loading) {
    return <LoadingState label="Carregamento da rotina do dia" />;
  }

  if (error) {
    return (
      <ErrorState
        description="Não foi possível concluir a ação. Tente novamente."
        onRetry={() => {
          void reload();
        }}
      />
    );
  }

  if (!data) {
    return (
      <EmptyState
        title="Sem dados"
        description="Ainda não há dados para exibir aqui."
      />
    );
  }

  const completedCount = tasks.filter((task) => task.completed).length;
  const progressPct = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;
  const waterPct = Math.min(100, Math.round((data.waterCurrentMl / data.waterTargetMl) * 100));

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <p className="kv-pill inline-flex">PAT-02</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Bom dia, {data.greetingName}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Objetivo: {data.objective} • {data.weekProgressLabel} • {data.statusLabel}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">Próximo check-in: {data.nextCheckinLabel}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/checkin">
            <Button>Enviar check-in</Button>
          </Link>
          <Link href="/progress">
            <Button variant="outline">Ver progresso</Button>
          </Link>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>{completedCount}/{tasks.length}</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 text-sm text-muted-foreground">Tarefas concluídas</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{progressPct}%</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 text-sm text-muted-foreground">Progresso do dia</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{waterPct}%</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 text-sm text-muted-foreground">Meta de hidratação</CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Rotina de hoje</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-3 text-sm text-muted-foreground">Marque o que já foi concluído para acompanhar seu progresso.</p>
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li key={task.id} className="flex items-center justify-between rounded-xl border border-border px-3 py-2">
                <label htmlFor={`today-task-${task.id}`} className="flex cursor-pointer items-center gap-3 text-sm">
                  <input
                    id={`today-task-${task.id}`}
                    type="checkbox"
                    checked={task.completed}
                    onChange={(event) => {
                      setLocalCompleted((previous) => ({
                        ...previous,
                        [task.id]: event.target.checked,
                      }));
                    }}
                  />
                  <span>{task.label}</span>
                </label>
                <Badge variant={task.completed ? "success" : "outline"} className="capitalize">{task.type}</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Hidratação</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {data.waterCurrentMl}ml / {data.waterTargetMl}ml
          </p>
          <div className="mt-3 h-3 w-full rounded-full bg-muted">
            <div
              className="h-3 rounded-full bg-linear-to-r from-chart-2 to-primary"
              style={{ width: `${waterPct}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">{waterPct}% da meta diária</p>
          <div className="mt-4 flex gap-2">
            <Button variant="outline" size="sm">
              +200ml
            </Button>
            <Button variant="outline" size="sm">
              +300ml
            </Button>
            <Link href="/hydration">
              <Button size="sm">Registrar hidratação</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
