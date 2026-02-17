"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { usePatientDetails } from "@/hooks/use-patients";
import { usePatientCheckins } from "@/hooks/use-checkins";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState, ErrorState, LoadingState } from "@/components/shared/data-states";

export default function PatientOverviewPage() {
  const params = useParams<{ id: string }>();
  const patientId = params.id;

  const patient = usePatientDetails(patientId);
  const checkins = usePatientCheckins(patientId);

  if (patient.loading || checkins.loading) {
    return <LoadingState label="Carregamento do paciente" />;
  }

  if (patient.error || checkins.error) {
    return (
      <ErrorState
        description="Não foi possível concluir a ação. Tente novamente."
        onRetry={() => {
          void patient.reload();
          void checkins.reload();
        }}
      />
    );
  }

  if (!patient.data) {
    return (
      <EmptyState
        title="Sem dados"
        description="Ainda não há dados para exibir aqui."
      />
    );
  }

  const latestCheckin = (checkins.data ?? [])[0];
  const patientStatusVariant = patient.data.status === "active"
    ? "success"
    : patient.data.status === "at_risk"
      ? "danger"
      : patient.data.status === "paused"
        ? "warning"
        : "outline";

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Badge variant="outline">PRO-04</Badge>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight">Visão do paciente</h1>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <p className="text-sm text-muted-foreground">{patient.data.name}</p>
              <Badge variant={patientStatusVariant} className="capitalize">{patient.data.status.replace("_", " ")}</Badge>
              <Badge variant={patient.data.riskScore >= 70 ? "danger" : patient.data.riskScore >= 40 ? "warning" : "success"}>
                Risco {patient.data.riskScore}
              </Badge>
            </div>
          </div>
          <Link href={`/patients/${patientId}/checkins`}>
            <Button>Revisar check-ins</Button>
          </Link>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Objetivo</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p>{patient.data.primaryGoal}</p>
            <p className="mt-1 text-xs text-muted-foreground">Início: {new Date(patient.data.startedAt).toLocaleDateString("pt-BR")}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Protocolo ativo</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p>{patient.data.activeProtocolName ?? "Sem protocolo ativo"}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Próximo check-in: {patient.data.nextCheckinAt ? new Date(patient.data.nextCheckinAt).toLocaleDateString("pt-BR") : "—"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Último check-in</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            {latestCheckin ? (
              <>
                <p>{new Date(latestCheckin.scheduledAt).toLocaleDateString("pt-BR")}</p>
                <p className="mt-1 text-xs text-muted-foreground capitalize">Status: {latestCheckin.status}</p>
              </>
            ) : (
              <p className="text-muted-foreground">Ainda não há dados para exibir aqui.</p>
            )}
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Timeline resumida</CardTitle>
        </CardHeader>
        <CardContent>
          {patient.data.timeline.length > 0 ? (
            <ul className="space-y-2 text-sm">
              {patient.data.timeline.map((event) => (
                <li key={event.id} className="rounded-xl border border-border px-3 py-2">
                  <p className="font-medium">{event.title}</p>
                  <p className="text-xs text-muted-foreground capitalize">
                    {event.type} • {new Date(event.occurredAt).toLocaleString("pt-BR")}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState title="Sem dados" description="Ainda não há dados para exibir aqui." />
          )}
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-2">
        <Link href={`/patients/${patientId}/protocol`}>
          <Button>Abrir protocolo</Button>
        </Link>
        <Link href={`/patients/${patientId}/checkins`}>
          <Button variant="outline">Ver histórico de check-ins</Button>
        </Link>
        <Link href={`/patients/${patientId}/messages`}>
          <Button variant="ghost">Ir para mensagens</Button>
        </Link>
      </div>
    </main>
  );
}
