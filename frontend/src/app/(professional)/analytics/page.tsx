"use client";

import Link from "next/link";
import { useAnalyticsDashboard } from "@/hooks/use-analytics";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState, ErrorState, LoadingState } from "@/components/shared/data-states";

export default function AnalyticsDashboardPage() {
  const analytics = useAnalyticsDashboard();

  if (analytics.loading) {
    return <LoadingState label="Carregamento do painel de análises" />;
  }

  if (analytics.error || !analytics.data) {
    return (
      <ErrorState
        description="Não foi possível concluir a ação. Tente novamente."
        onRetry={() => {
          void analytics.reload();
        }}
      />
    );
  }

  const { kpi, topRisk } = analytics.data;

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <Badge variant="outline">PRO-18</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Painel de análises</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Consolidado de risco, adesão e revisão para decisões rápidas.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-4">
        <Card><CardHeader><CardTitle>{kpi.activePatients}</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Pacientes ativos</CardContent></Card>
        <Card><CardHeader><CardTitle>{kpi.atRiskPatients}</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Em risco</CardContent></Card>
        <Card><CardHeader><CardTitle>{kpi.pendingReviews}</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Pendentes de revisão</CardContent></Card>
        <Card><CardHeader><CardTitle>{kpi.adherence7dPct}%</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Adesão 7 dias</CardContent></Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Top pacientes em risco</CardTitle>
        </CardHeader>
        <CardContent>
          {topRisk.length > 0 ? (
            <ul className="space-y-2 text-sm">
              {topRisk.map((row) => (
                <li key={row.patientId} className="flex items-center justify-between rounded-xl border border-border px-3 py-2">
                  <span>{row.patientName}</span>
                  <Badge variant={row.riskScore >= 70 ? "danger" : row.riskScore >= 40 ? "warning" : "success"}>Risco {row.riskScore}</Badge>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState title="Sem dados" description="Ainda não há dados para exibir aqui." />
          )}
        </CardContent>
      </Card>

      <div className="flex gap-2">
        <Link href="/analytics/protocol-effectiveness"><Button>Ver efetividade de protocolos</Button></Link>
        <Link href="/analytics/audit"><Button variant="outline">Ver auditoria</Button></Link>
      </div>
    </main>
  );
}
