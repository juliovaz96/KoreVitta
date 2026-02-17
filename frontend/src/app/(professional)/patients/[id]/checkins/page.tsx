"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { usePatientCheckins } from "@/hooks/use-checkins";
import { usePatientDetails } from "@/hooks/use-patients";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState, ErrorState, LoadingState } from "@/components/shared/data-states";

export default function PatientCheckinsPage() {
  const params = useParams<{ id: string }>();
  const patientId = params.id;

  const patient = usePatientDetails(patientId);
  const checkins = usePatientCheckins(patientId);

  if (patient.loading || checkins.loading) {
    return <LoadingState label="Carregamento dos check-ins" />;
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

  const items = checkins.data ?? [];
  const completed = items.filter((item) => item.status === "completed").length;
  const pending = items.filter((item) => item.status === "pending" || item.status === "scheduled").length;
  const missed = items.filter((item) => item.status === "missed").length;
  const checkinStatusVariant = (status: string) => {
    if (status === "completed") return "success" as const;
    if (status === "missed") return "danger" as const;
    if (status === "pending" || status === "scheduled") return "warning" as const;
    return "outline" as const;
  };

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Badge variant="outline">PRO-05</Badge>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight">Check-ins do paciente</h1>
            <p className="mt-2 text-sm text-muted-foreground">Paciente: {patient.data?.name ?? "—"}</p>
          </div>
          {items[0] ? (
            <Link href={`/patients/${patientId}/checkins/${items[0].id}/review`}>
              <Button>Revisar check-in mais recente</Button>
            </Link>
          ) : null}
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>{completed}</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 text-sm text-muted-foreground">Concluídos</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{pending}</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 text-sm text-muted-foreground">Pendentes</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{missed}</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 text-sm text-muted-foreground">Não enviados</CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Lista cronológica</CardTitle>
        </CardHeader>
        <CardContent>
          {items.length > 0 ? (
            <ul className="space-y-2 text-sm">
              {items.map((item) => (
                <li key={item.id} className="rounded-xl border border-border px-3 py-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="font-medium">{new Date(item.scheduledAt).toLocaleDateString("pt-BR")}</p>
                      <div className="mt-1">
                        <Badge variant={checkinStatusVariant(item.status)} className="capitalize">{item.status}</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/patients/${patientId}/checkins/${item.id}/review`}>
                        <Button size="sm">Revisar</Button>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-2 grid gap-2 text-xs text-muted-foreground md:grid-cols-2">
                    <p>Aderência nutrição: {item.adherenceNutrition ?? "—"}</p>
                    <p>Aderência treino: {item.adherenceTraining ?? "—"}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              title="Sem dados"
              description="Ainda não há dados para exibir aqui."
            />
          )}
        </CardContent>
      </Card>

      <div className="flex gap-2">
        <Link href={`/patients/${patientId}`}>
          <Button variant="outline">Voltar para paciente</Button>
        </Link>
      </div>
    </main>
  );
}
