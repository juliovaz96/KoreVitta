"use client";

import Link from "next/link";
import { usePatientProtocols } from "@/hooks/use-protocols";
import { useToday } from "@/hooks/use-today";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState, ErrorState, LoadingState } from "@/components/shared/data-states";

export default function PatientProtocolPage() {
  const protocols = usePatientProtocols("pat_001");
  const today = useToday();

  if (protocols.loading || today.loading) {
    return <LoadingState label="Carregamento do protocolo" />;
  }

  if (protocols.error || today.error) {
    return (
      <ErrorState
        description="Não foi possível concluir a ação. Tente novamente."
        onRetry={() => {
          void protocols.reload();
          void today.reload();
        }}
      />
    );
  }

  const activeProtocol = (protocols.data ?? []).find((item) => item.status === "active") ?? null;

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <Badge variant="outline">PAT-05</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Meu protocolo</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Veja seus módulos ativos e execute sua rotina com clareza.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/today">
            <Button>Ver rotina de hoje</Button>
          </Link>
          <Link href="/checkin">
            <Button variant="outline">Enviar check-in</Button>
          </Link>
        </div>
      </header>

      {activeProtocol ? (
        <>
          <section className="grid gap-4 sm:grid-cols-3">
            <Card>
              <CardHeader><CardTitle>{activeProtocol.version}</CardTitle></CardHeader>
              <CardContent className="pt-0 text-sm text-muted-foreground">Versão do protocolo</CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>{activeProtocol.status}</CardTitle></CardHeader>
              <CardContent className="pt-0 text-sm text-muted-foreground">Status</CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>{activeProtocol.modules.length}</CardTitle></CardHeader>
              <CardContent className="pt-0 text-sm text-muted-foreground">Módulos ativos</CardContent>
            </Card>
          </section>

          <Card>
            <CardHeader>
              <CardTitle>{activeProtocol.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex flex-wrap gap-2">
                {activeProtocol.modules.map((module) => (
                  <Badge key={module} variant="outline" className="capitalize">{module}</Badge>
                ))}
              </div>
              <p className="text-muted-foreground">
                Vigência: {new Date(activeProtocol.startsAt).toLocaleDateString("pt-BR")}
                {activeProtocol.endsAt ? ` até ${new Date(activeProtocol.endsAt).toLocaleDateString("pt-BR")}` : ""}
              </p>
              <p className="text-xs text-muted-foreground">Por que isso? Esse plano foi definido para melhorar aderência e evolução de forma segura.</p>
            </CardContent>
          </Card>
        </>
      ) : (
        <EmptyState
          title="Sem dados"
          description="Ainda não há dados para exibir aqui."
        />
      )}

      <Card>
        <CardHeader>
          <CardTitle>Rotina da semana</CardTitle>
        </CardHeader>
        <CardContent>
          {(today.data?.tasks ?? []).length > 0 ? (
            <ul className="space-y-2 text-sm">
              {(today.data?.tasks ?? []).map((task) => (
                <li key={task.id} className="flex items-center justify-between rounded-xl border border-border px-3 py-2">
                  <span>{task.label}</span>
                  <Badge variant={task.completed ? "success" : "outline"} className="capitalize">{task.type}</Badge>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState title="Sem dados" description="Ainda não há dados para exibir aqui." />
          )}
        </CardContent>
      </Card>

      <Link href="/messages">
        <Button variant="ghost">Abrir mensagens</Button>
      </Link>
    </main>
  );
}
