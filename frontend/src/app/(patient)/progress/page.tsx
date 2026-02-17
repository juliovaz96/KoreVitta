"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePatientCheckins } from "@/hooks/use-checkins";
import { useToday } from "@/hooks/use-today";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState, ErrorState, LoadingState } from "@/components/shared/data-states";

export default function PatientProgressPage() {
  const router = useRouter();
  const today = useToday();
  const checkins = usePatientCheckins("pat_001");

  if (today.loading || checkins.loading) {
    return <LoadingState label="Carregamento do progresso" />;
  }

  if (today.error || checkins.error) {
    return (
      <ErrorState
        description="Não foi possível concluir a ação. Tente novamente."
        onRetry={() => {
          void today.reload();
          void checkins.reload();
        }}
      />
    );
  }

  const completedTasks = today.data?.tasks.filter((task) => task.completed).length ?? 0;
  const totalTasks = today.data?.tasks.length ?? 0;
  const dailyAdherence = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const checkinHistory = checkins.data ?? [];
  const completedCheckins = checkinHistory.filter((item) => item.status === "completed").length;

  const progressionBars = [
    { label: "Aderência diária", value: dailyAdherence },
    {
      label: "Check-ins concluídos",
      value: checkinHistory.length > 0 ? Math.round((completedCheckins / checkinHistory.length) * 100) : 0,
    },
    {
      label: "Hidratação",
      value:
        today.data && today.data.waterTargetMl > 0
          ? Math.min(100, Math.round((today.data.waterCurrentMl / today.data.waterTargetMl) * 100))
          : 0,
    },
  ];

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <Badge variant="outline">PAT-04</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Meu progresso</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Evolução semanal com foco em aderência, check-ins e consistência de rotina.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/checkin">
            <Button>Enviar check-in</Button>
          </Link>
          <Link href="/today">
            <Button variant="outline">Ver rotina de hoje</Button>
          </Link>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>{dailyAdherence}%</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 text-sm text-muted-foreground">Aderência diária</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{checkinHistory.length > 0 ? Math.round((completedCheckins / checkinHistory.length) * 100) : 0}%</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 text-sm text-muted-foreground">Check-ins concluídos</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{progressionBars[2]?.value ?? 0}%</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 text-sm text-muted-foreground">Meta de hidratação</CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Indicadores da semana</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {progressionBars.map((bar) => (
            <div key={bar.label}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span>{bar.label}</span>
                <span className="text-muted-foreground">{bar.value}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-2 rounded-full bg-linear-to-r from-primary to-chart-2" style={{ width: `${bar.value}%` }} />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Histórico de check-ins</CardTitle>
        </CardHeader>
        <CardContent>
          {checkinHistory.length > 0 ? (
            <ul className="space-y-2 text-sm">
              {checkinHistory.map((item) => (
                <li key={item.id} className="rounded-xl border border-border px-3 py-2">
                  <p className="font-medium">{new Date(item.scheduledAt).toLocaleDateString("pt-BR")}</p>
                  <div className="mt-1">
                    <Badge variant={item.status === "completed" ? "success" : item.status === "missed" ? "danger" : "warning"} className="capitalize">
                      {item.status}
                    </Badge>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              title="Sem dados"
              description="Ainda não há dados para exibir aqui."
              ctaLabel="Enviar check-in"
              onCta={() => {
                router.push("/checkin");
              }}
            />
          )}
        </CardContent>
      </Card>

      <div className="flex gap-2">
        <Link href="/protocol">
          <Button variant="outline">Ver protocolo</Button>
        </Link>
        <Link href="/messages">
          <Button variant="ghost">Abrir mensagens</Button>
        </Link>
      </div>
    </main>
  );
}
