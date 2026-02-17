"use client";

import Link from "next/link";
import { useTemplates } from "@/hooks/use-protocols";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState, ErrorState, LoadingState } from "@/components/shared/data-states";

export default function TemplatesPage() {
  const templates = useTemplates();

  if (templates.loading) {
    return <LoadingState label="Carregamento de templates" />;
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

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Badge variant="outline">PRO-13</Badge>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight">Templates de protocolo</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Gerencie templates reutilizáveis e aplique em pacientes.
            </p>
            <div className="mt-3 flex gap-2">
              <Badge variant="default">Templates</Badge>
              <Badge variant="outline">Em uso</Badge>
              <Badge variant="outline">Arquivados</Badge>
            </div>
          </div>
          <Link href="/templates/apply"><Button>Aplicar template</Button></Link>
        </div>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Templates disponíveis</CardTitle>
        </CardHeader>
        <CardContent>
          {(templates.data ?? []).length > 0 ? (
            <ul className="space-y-2 text-sm">
              {(templates.data ?? []).map((tpl) => (
                <li key={tpl.id} className="flex items-center justify-between rounded-xl border border-border px-3 py-2">
                  <div>
                    <p className="font-medium">{tpl.name}</p>
                    <p className="text-xs text-muted-foreground">Tags: {tpl.tags.join(", ")} • Uso: {tpl.usageCount}</p>
                  </div>
                  <Link href="/templates/apply"><Button size="sm" variant="outline">Aplicar</Button></Link>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState title="Sem dados" description="Ainda não há dados para exibir aqui." />
          )}
        </CardContent>
      </Card>
    </main>
  );
}
