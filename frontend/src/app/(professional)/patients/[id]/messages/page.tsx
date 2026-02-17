"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { useMessages, useThreads } from "@/hooks/use-messages";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EmptyState, ErrorState, LoadingState } from "@/components/shared/data-states";

export default function ProfessionalMessagesPage() {
  const [composer, setComposer] = useState("");
  const [selectedThreadId, setSelectedThreadId] = useState<string | null>(null);
  const [lastSentAt, setLastSentAt] = useState<number | null>(null);
  const params = useParams<{ id: string }>();
  const patientId = params.id;

  const threads = useThreads();

  const activeThread = useMemo(() => {
    if (!threads.data || threads.data.length === 0) return null;
    if (selectedThreadId) {
      return threads.data.find((thread) => thread.id === selectedThreadId) ?? null;
    }
    return threads.data.find((thread) => thread.patientId === patientId) ?? threads.data[0];
  }, [patientId, selectedThreadId, threads.data]);

  const messages = useMessages(activeThread?.id ?? "");

  const handleSend = () => {
    if (!composer.trim()) return;
    setComposer("");
    setLastSentAt(Date.now());
  };

  if (threads.loading) {
    return <LoadingState label="Carregamento das conversas" />;
  }

  if (threads.error) {
    return (
      <ErrorState
        description="Não foi possível concluir a ação. Tente novamente."
        onRetry={() => {
          void threads.reload();
        }}
      />
    );
  }

  if (!activeThread) {
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
        <Badge variant="outline">PRO-10</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Mensagens</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Converse com o paciente e mantenha contexto do acompanhamento.
        </p>
        <p className="mt-1 text-xs text-muted-foreground">Conversa ativa: {activeThread.patientName}</p>
      </header>

      <section className="grid gap-4 lg:grid-cols-[320px_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Conversas</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {threads.data?.map((thread) => (
                <li
                  key={thread.id}
                  className={`rounded-xl border px-3 py-2 text-sm transition-colors ${
                    thread.id === activeThread.id ? "border-primary bg-primary/10" : "border-border"
                  }`}
                >
                  <button
                    type="button"
                    className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                    onClick={() => setSelectedThreadId(thread.id)}
                    aria-pressed={thread.id === activeThread.id}
                    aria-current={thread.id === activeThread.id ? "true" : undefined}
                    aria-label={`Abrir conversa com ${thread.patientName}`}
                  >
                    <p className="font-medium">{thread.patientName}</p>
                    <p className="text-xs text-muted-foreground line-clamp-1">{thread.lastMessage}</p>
                    {thread.unreadCount > 0 ? (
                      <Badge variant="warning" className="mt-1">{thread.unreadCount} não lidas</Badge>
                    ) : null}
                  </button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conversa ativa</CardTitle>
          </CardHeader>
          <CardContent>
            {messages.loading ? (
              <LoadingState label="Carregamento da conversa" />
            ) : messages.error ? (
              <ErrorState
                description="Não foi possível concluir a ação. Tente novamente."
                onRetry={() => {
                  void messages.reload();
                }}
              />
            ) : (
              <>
                <ul className="space-y-2">
                  {(messages.data ?? []).map((message) => (
                    <li key={message.id} className="rounded-xl border border-border px-3 py-2 text-sm">
                      <p className="text-xs text-muted-foreground capitalize">{message.sender}</p>
                      <p className="mt-1">{message.content}</p>
                    </li>
                  ))}
                </ul>

                <form
                  className="mt-4 flex gap-2"
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleSend();
                  }}
                >
                  <Input
                    placeholder="Responder paciente..."
                    value={composer}
                    onChange={(event) => setComposer(event.target.value)}
                  />
                  <Button type="submit" disabled={!composer.trim()}>
                    Enviar mensagem
                  </Button>
                </form>
                <p className="mt-2 text-xs text-muted-foreground" aria-live="polite">
                  {lastSentAt ? "Mensagem enviada para revisão do histórico." : "Pressione Enter para enviar mais rápido."}
                </p>
              </>
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
