"use client";

import Link from "next/link";
import { useState } from "react";
import { useToday } from "@/hooks/use-today";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorState, LoadingState } from "@/components/shared/data-states";

type IntakeLog = {
  id: string;
  amountMl: number;
  timeLabel: string;
};

const quickActions = [200, 300, 500];

export default function PatientHydrationPage() {
  const today = useToday();
  const [customMl, setCustomMl] = useState("");
  const [logs, setLogs] = useState<IntakeLog[]>([]);

  if (today.loading) {
    return <LoadingState label="Carregando hidratação" />;
  }

  if (today.error || !today.data) {
    return (
      <ErrorState
        description="Não foi possível carregar os dados de hidratação."
        onRetry={() => {
          void today.reload();
        }}
      />
    );
  }

  const baseline = today.data.waterCurrentMl;
  const consumedToday = baseline + logs.reduce((acc, log) => acc + log.amountMl, 0);
  const target = today.data.waterTargetMl;
  const progressPct = target > 0 ? Math.min(100, Math.round((consumedToday / target) * 100)) : 0;
  const remainingMl = Math.max(0, target - consumedToday);

  const addIntake = (amountMl: number) => {
    if (amountMl <= 0) return;

    const now = new Date();
    const timeLabel = now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

    setLogs((previous) => [
      { id: `${Date.now()}-${amountMl}`, amountMl, timeLabel },
      ...previous,
    ]);
  };

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <Badge variant="outline">PAT-07</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Hidratação</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Registre sua ingestão de água e acompanhe sua meta diária.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Progresso de hoje</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span>
              {consumedToday}ml / {target}ml
            </span>
            <span className="text-muted-foreground">{progressPct}%</span>
          </div>

          <div className="h-3 w-full rounded-full bg-muted">
            <div className="h-3 rounded-full bg-linear-to-r from-primary to-chart-2" style={{ width: `${progressPct}%` }} />
          </div>

          <p className="text-xs text-muted-foreground">
            {remainingMl > 0 ? `Faltam ${remainingMl}ml para sua meta.` : "Meta diária atingida. Excelente!"}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Adicionar água</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {quickActions.map((amount) => (
              <Button key={amount} variant="outline" onClick={() => addIntake(amount)}>
                +{amount}ml
              </Button>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-[1fr_auto]">
            <div className="space-y-2">
              <Label htmlFor="customMl">Quantidade personalizada (ml)</Label>
              <Input
                id="customMl"
                inputMode="numeric"
                placeholder="Ex: 250"
                value={customMl}
                onChange={(event) => setCustomMl(event.target.value)}
              />
            </div>
            <div className="flex items-end">
              <Button
                onClick={() => {
                  const parsed = Number(customMl);
                  if (Number.isFinite(parsed) && parsed > 0) {
                    addIntake(parsed);
                    setCustomMl("");
                  }
                }}
              >
                Registrar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Histórico do dia</CardTitle>
        </CardHeader>
        <CardContent>
          {logs.length > 0 ? (
            <ul className="space-y-2 text-sm">
              {logs.map((log) => (
                <li key={log.id} className="flex items-center justify-between rounded-xl border border-border px-3 py-2">
                  <span>{log.amountMl}ml</span>
                  <span className="text-xs text-muted-foreground">{log.timeLabel}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">
              Nenhum registro manual ainda. Use os atalhos acima para começar.
            </p>
          )}
        </CardContent>
      </Card>

      <div className="flex gap-2">
        <Link href="/today">
          <Button variant="outline">Voltar para Hoje</Button>
        </Link>
        <Link href="/progress">
          <Button>Ver progresso</Button>
        </Link>
      </div>
    </main>
  );
}
