"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAnalyticsDashboard } from "@/hooks/use-analytics";
import { usePendingReview } from "@/hooks/use-checkins";
import { usePatients } from "@/hooks/use-patients";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EmptyState, ErrorState, LoadingState } from "@/components/shared/data-states";

export default function ProfessionalDashboardPage() {
  const router = useRouter();
  const analytics = useAnalyticsDashboard();
  const pending = usePendingReview();
  const patients = usePatients({ sort: "risk_desc" });

  if (analytics.loading || pending.loading || patients.loading) {
    return <LoadingState label="Carregamento do dashboard CRM" />;
  }

  if (analytics.error || pending.error || patients.error) {
    return (
      <ErrorState
        description="Não foi possível concluir a ação. Tente novamente."
        onRetry={() => {
          void analytics.reload();
          void pending.reload();
          void patients.reload();
        }}
      />
    );
  }

  const kpi = analytics.data?.kpi;
  if (!kpi) {
    return (
      <EmptyState
        title="Sem dados"
        description="Ainda não há dados para exibir aqui."
      />
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Badge variant="outline">PRO-01</Badge>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight">Dashboard CRM</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Priorize check-ins pendentes e pacientes em risco para agir mais rápido.
            </p>
          </div>
          <Link href="/patients/new">
            <Button>Criar e enviar convite</Button>
          </Link>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardDescription>Ativos</CardDescription>
            <CardTitle>{kpi.activePatients}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Em risco</CardDescription>
            <CardTitle>{kpi.atRiskPatients}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Pendentes de revisão</CardDescription>
            <CardTitle>{kpi.pendingReviews}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Adesão 7d</CardDescription>
            <CardTitle>{kpi.adherence7dPct}%</CardTitle>
          </CardHeader>
        </Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Check-ins pendentes de revisão</CardTitle>
          </CardHeader>
          <CardContent>
            {pending.data && pending.data.length > 0 ? (
              <ul className="space-y-2 text-sm">
                {pending.data.map((item) => (
                  <li key={item.id} className="flex items-center justify-between rounded-xl border border-border px-3 py-2">
                    <div>
                      <p className="font-medium">{item.patientName}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(item.scheduledAt).toLocaleDateString("pt-BR")}
                      </p>
                    </div>
                    <Link href={`/patients/${item.patientId}/checkins/${item.id}/review`}>
                      <Button size="sm">Revisar</Button>
                    </Link>
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

        <Card>
          <CardHeader>
            <CardTitle>Pacientes em maior risco</CardTitle>
          </CardHeader>
          <CardContent>
            {patients.data && patients.data.length > 0 ? (
              <ul className="space-y-2 text-sm">
                {patients.data.slice(0, 5).map((patient) => (
                  <li key={patient.id} className="flex items-center justify-between rounded-xl border border-border px-3 py-2">
                    <div>
                      <p className="font-medium">{patient.name}</p>
                      <p className="text-xs text-muted-foreground">{patient.primaryGoal}</p>
                    </div>
                    <Badge variant={patient.riskScore >= 70 ? "danger" : patient.riskScore >= 40 ? "warning" : "success"}>
                      Risco {patient.riskScore}
                    </Badge>
                  </li>
                ))}
              </ul>
            ) : (
              <EmptyState
                title="Sem dados"
                description="Ainda não há dados para exibir aqui."
                ctaLabel="Criar e enviar convite"
                onCta={() => {
                  router.push("/patients/new");
                }}
              />
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
