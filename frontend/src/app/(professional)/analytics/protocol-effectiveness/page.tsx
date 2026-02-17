"use client";

import Link from "next/link";
import { useTemplates } from "@/hooks/use-protocols";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState, ErrorState, LoadingState } from "@/components/shared/data-states";

export default function ProtocolEffectivenessPage() {
  const templates = useTemplates();

  if (templates.loading) {
    return <LoadingState label="Carregamento da efetividade de protocolos" />;
  }

  if (templates.error) {
    return (
      <ErrorState
        description="Não foi possível concluir a ação. Tente novamente."
        onRetry={() => {
          void templates.reload();
        }}
      />
    );
  }

  const ranking = (templates.data ?? [])
    .map((tpl) => ({
      ...tpl,
      avgWeightDeltaKg: -(1 + (tpl.usageCount % 5)),
      retentionPct: 70 + (tpl.usageCount % 25),
    }))
    .sort((a, b) => b.retentionPct - a.retentionPct);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <Badge variant="outline">PRO-20</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Efetividade de protocolos</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ranking de templates por retenção e resultado médio estimado.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Ranking de templates</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-3 text-xs text-muted-foreground">
            {ranking.length} {ranking.length === 1 ? "template analisado" : "templates analisados"}
          </p>
          {ranking.length > 0 ? (
            <div className="kv-table-wrap">
              <table className="kv-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Template</th>
                    <th>Uso</th>
                    <th>Δ peso médio</th>
                    <th>Retenção</th>
                  </tr>
                </thead>
                <tbody>
                  {ranking.map((item, index) => (
                    <tr key={item.id}>
                      <td className="font-medium">{index + 1}</td>
                      <td className="font-medium">{item.name}</td>
                      <td>{item.usageCount}</td>
                      <td>{item.avgWeightDeltaKg}kg</td>
                      <td>
                        <Badge variant={item.retentionPct >= 85 ? "success" : item.retentionPct >= 75 ? "warning" : "outline"}>
                          {item.retentionPct}%
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : <EmptyState title="Sem dados" description="Ainda não há dados para exibir aqui." />}
          <p className="mt-3 text-xs text-muted-foreground">
            Valores estimados para visualização de tendência no ambiente de demonstração.
          </p>
        </CardContent>
      </Card>

      <Link href="/analytics"><Button variant="outline">Voltar para painel de análises</Button></Link>
    </main>
  );
}
