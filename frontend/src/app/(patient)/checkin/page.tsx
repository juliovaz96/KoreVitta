"use client";

import Link from "next/link";
import { useState } from "react";
import { useToday } from "@/hooks/use-today";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorState, LoadingState, SuccessState } from "@/components/shared/data-states";

type CheckinDraft = {
  mood: number;
  energy: number;
  sleepHours: number;
  adherence: number;
  weightKg: string;
  notes: string;
};

export default function PatientCheckinPage() {
  const { data, loading, error, reload } = useToday();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [draft, setDraft] = useState<CheckinDraft>({
    mood: 3,
    energy: 3,
    sleepHours: 7,
    adherence: 4,
    weightKg: "",
    notes: "",
  });

  if (loading) {
    return <LoadingState label="Carregamento do check-in" />;
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

  const onSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <Badge variant="outline">PAT-03</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Meu check-in</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Registre como foi sua rotina para ajudar seu profissional a ajustar seu plano.
        </p>
        <p className="mt-1 text-xs text-muted-foreground">Próxima revisão: {data?.nextCheckinLabel ?? "—"}</p>
      </header>

      {submitted ? (
        <>
          <SuccessState message="Ação concluída com sucesso." />
          <Link href="/home">
            <Button>Voltar para início</Button>
          </Link>
        </>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Resumo do dia</CardTitle>
            <CardDescription>Preencha os campos essenciais do seu acompanhamento diário.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-xl border border-border bg-muted/40 p-3 text-xs text-muted-foreground">
              Tempo médio: menos de 2 minutos. Responda com sinceridade para melhorar seus ajustes.
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="mood">Humor (1-5)</Label>
                <Input
                  id="mood"
                  type="number"
                  min={1}
                  max={5}
                  value={draft.mood}
                  onChange={(event) => setDraft((prev) => ({ ...prev, mood: Number(event.target.value) }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="energy">Energia (1-5)</Label>
                <Input
                  id="energy"
                  type="number"
                  min={1}
                  max={5}
                  value={draft.energy}
                  onChange={(event) => setDraft((prev) => ({ ...prev, energy: Number(event.target.value) }))}
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="sleepHours">Sono (horas)</Label>
                <Input
                  id="sleepHours"
                  type="number"
                  min={0}
                  max={14}
                  value={draft.sleepHours}
                  onChange={(event) => setDraft((prev) => ({ ...prev, sleepHours: Number(event.target.value) }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="adherence">Aderência (1-5)</Label>
                <Input
                  id="adherence"
                  type="number"
                  min={1}
                  max={5}
                  value={draft.adherence}
                  onChange={(event) => setDraft((prev) => ({ ...prev, adherence: Number(event.target.value) }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weightKg">Peso (kg)</Label>
                <Input
                  id="weightKg"
                  placeholder="Ex: 72.4"
                  value={draft.weightKg}
                  onChange={(event) => setDraft((prev) => ({ ...prev, weightKg: event.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Observações</Label>
              <textarea
                id="notes"
                className="min-h-28 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm"
                placeholder="Como você se sentiu hoje?"
                value={draft.notes}
                onChange={(event) => setDraft((prev) => ({ ...prev, notes: event.target.value }))}
              />
            </div>

            <div className="flex items-center justify-between">
              <Link href="/today">
                <Button variant="outline">Voltar para rotina</Button>
              </Link>
              <Button onClick={() => { void onSubmit(); }} disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar check-in"}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </main>
  );
}
