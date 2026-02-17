"use client";

import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { usePatientCheckins } from "@/hooks/use-checkins";
import { usePatientDetails } from "@/hooks/use-patients";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState, ErrorState, LoadingState, SuccessState } from "@/components/shared/data-states";

export default function CheckinReviewPage() {
  const params = useParams<{ id: string; checkinId: string }>();
  const patientId = params.id;
  const checkinId = params.checkinId;

  const patient = usePatientDetails(patientId);
  const checkins = usePatientCheckins(patientId);
  const [notes, setNotes] = useState("");
  const [riskScore, setRiskScore] = useState(50);
  const [reviewed, setReviewed] = useState(false);

  if (patient.loading || checkins.loading) {
    return <LoadingState label="Carregando revisão do check-in" />;
  }

  if (patient.error || checkins.error) {
    return (
      <ErrorState
        description="Não foi possível carregar os dados de revisão."
        onRetry={() => {
          void patient.reload();
          void checkins.reload();
        }}
      />
    );
  }

  const checkinItems = checkins.data ?? [];
  const selectedCheckin = checkinItems.find((item) => item.id === checkinId) ?? checkinItems[0] ?? null;
  const statusVariant = selectedCheckin?.status === "completed"
    ? "success"
    : selectedCheckin?.status === "missed"
      ? "danger"
      : "warning";

  if (!selectedCheckin || !patient.data) {
    return (
      <EmptyState
        title="Check-in não encontrado"
        description="Não há dados de check-in para o paciente selecionado."
      />
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <Badge variant="outline">PRO-06</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Revisão de check-in</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Paciente: {patient.data.name} • Check-in: {new Date(selectedCheckin.scheduledAt).toLocaleDateString("pt-BR")}
        </p>
      </header>

      {reviewed ? <SuccessState message="Check-in marcado como revisado com sucesso." /> : null}

      <section className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Dados enviados</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <Badge variant={statusVariant} className="capitalize">{selectedCheckin.status}</Badge>
            </div>
            <p>Aderência nutrição: {selectedCheckin.adherenceNutrition ?? "—"}</p>
            <p>Aderência treino: {selectedCheckin.adherenceTraining ?? "—"}</p>
            <p className="text-muted-foreground">Fotos e anexos entram na próxima iteração do fluxo clínico.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Parecer profissional</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <label htmlFor="riskScore" className="text-sm font-medium">Escore de risco sugerido: {riskScore}</label>
              <input
                id="riskScore"
                type="range"
                min={0}
                max={100}
                value={riskScore}
                onChange={(event) => setRiskScore(Number(event.target.value))}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="notes" className="text-sm font-medium">Notas</label>
              <textarea
                id="notes"
                className="min-h-28 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm"
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                placeholder="Orientações e próximos ajustes..."
              />
            </div>
            <Button
              onClick={async () => {
                await new Promise((resolve) => setTimeout(resolve, 400));
                setReviewed(true);
              }}
            >
              Marcar como revisado
            </Button>
          </CardContent>
        </Card>
      </section>

      <Link href={`/patients/${patientId}/checkins`}>
        <Button variant="outline">Voltar para check-ins</Button>
      </Link>
    </main>
  );
}
