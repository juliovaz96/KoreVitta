"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { usePatientCheckins } from "@/hooks/use-checkins";
import { usePatientDetails } from "@/hooks/use-patients";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState, ErrorState, LoadingState } from "@/components/shared/data-states";

export default function PatientProgressPage() {
  const params = useParams<{ id: string }>();
  const patient = usePatientDetails(params.id);
  const checkins = usePatientCheckins(params.id);

  if (patient.loading || checkins.loading) return <LoadingState label="Carregamento do progresso do paciente" />;
  if (patient.error || checkins.error || !patient.data) {
    return <ErrorState description="Não foi possível concluir a ação. Tente novamente." onRetry={() => { void patient.reload(); void checkins.reload(); }} />;
  }

  const items = checkins.data ?? [];
  const completed = items.filter((item) => item.status === "completed").length;
  const adherencePct = items.length > 0 ? Math.round((completed / items.length) * 100) : 0;
  const statusVariant = patient.data.status === "active" ? "success" : patient.data.status === "at_risk" ? "danger" : "warning";

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <Badge variant="outline">PRO-04</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Progresso do paciente</h1>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <p className="text-sm text-muted-foreground">{patient.data.name}</p>
          <Badge variant={statusVariant} className="capitalize">{patient.data.status}</Badge>
          <Badge variant={patient.data.riskScore >= 70 ? "danger" : patient.data.riskScore >= 40 ? "warning" : "success"}>Risco {patient.data.riskScore}</Badge>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <Card><CardHeader><CardTitle>{patient.data.status}</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Status operacional</CardContent></Card>
        <Card><CardHeader><CardTitle>{adherencePct}%</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Adesão de check-ins</CardContent></Card>
        <Card><CardHeader><CardTitle>{items.length}</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Check-ins registrados</CardContent></Card>
      </section>

      <Card>
        <CardHeader><CardTitle>Timeline</CardTitle></CardHeader>
        <CardContent>
          {patient.data.timeline.length > 0 ? (
            <ul className="space-y-2 text-sm">
              {patient.data.timeline.map((event) => (
                <li key={event.id} className="rounded-xl border border-border px-3 py-2">
                  <p className="font-medium">{event.title}</p>
                  <p className="text-xs text-muted-foreground">{event.type} • {new Date(event.occurredAt).toLocaleString("pt-BR")}</p>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState title="Sem dados" description="Ainda não há dados para exibir aqui." />
          )}
        </CardContent>
      </Card>

      <div className="flex gap-2">
        <Link href={`/patients/${params.id}/measurements`}><Button>Registrar medida</Button></Link>
        <Link href={`/patients/${params.id}`}><Button variant="outline">Voltar ao overview</Button></Link>
      </div>
    </main>
  );
}
