"use client";

import Link from "next/link";
import { usePatientProtocols } from "@/hooks/use-protocols";
import { useToday } from "@/hooks/use-today";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState, ErrorState, LoadingState } from "@/components/shared/data-states";

export default function PatientHomePage() {
  const today = useToday();
  const protocols = usePatientProtocols("pat_001");

  if (today.loading || protocols.loading) {
    return <LoadingState label="Carregamento do início" />;
  }

  if (today.error || protocols.error) {
    return (
      <ErrorState
        description="Não foi possível concluir a ação. Tente novamente."
        onRetry={() => {
          void today.reload();
          void protocols.reload();
        }}
      />
    );
  }

  const activeProtocol = (protocols.data ?? []).find((protocol) => protocol.status === "active") ?? null;

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <Badge variant="outline">PAT-01</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Início</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Olá, {today.data?.greetingName ?? "Paciente"}. Seu foco atual: {today.data?.objective ?? "—"}.
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

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Objetivo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{today.data?.objective ?? "—"}</p>
            <p className="mt-1 text-xs text-muted-foreground">{today.data?.weekProgressLabel ?? "Sem progresso"}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Protocolo ativo</CardTitle>
          </CardHeader>
          <CardContent>
            {activeProtocol ? (
              <>
                <p className="text-sm font-medium">{activeProtocol.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">Versão {activeProtocol.version}</p>
              </>
            ) : (
              <p className="text-sm text-muted-foreground">Aguardando ativação do profissional</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Status do acompanhamento</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{today.data?.nextCheckinLabel ?? "—"}</p>
            <p className="mt-1 text-xs text-muted-foreground">{today.data?.statusLabel ?? "Sem status"}</p>
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Próximas ações</CardTitle>
        </CardHeader>
        <CardContent>
          {today.data?.tasks && today.data.tasks.length > 0 ? (
            <ul className="space-y-2 text-sm">
              {today.data.tasks.slice(0, 4).map((task) => (
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

      <div className="flex flex-wrap gap-2">
        <Link href="/protocol">
          <Button variant="ghost">Ver protocolo</Button>
        </Link>
        <Link href="/messages">
          <Button variant="ghost">Abrir mensagens</Button>
        </Link>
      </div>
    </main>
  );
}
