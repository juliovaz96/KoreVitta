"use client";

import { useState } from "react";
import { useMessages, useThreads } from "@/hooks/use-messages";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EmptyState, ErrorState, LoadingState } from "@/components/shared/data-states";

export default function PatientMessagesPage() {
  const threads = useThreads();
  const [selectedThreadId, setSelectedThreadId] = useState<string | null>(null);
  const [composer, setComposer] = useState("");
  const [lastSentAt, setLastSentAt] = useState<number | null>(null);

  const activeThread = threads.data?.find((thread) => thread.id === selectedThreadId) ?? threads.data?.[0] ?? null;
  const messages = useMessages(activeThread?.id ?? "");

  const handleSend = () => {
    if (!composer.trim()) return;
    setComposer("");
    setLastSentAt(Date.now());
  };

  if (threads.loading) {
    return <LoadingState label="Carregamento das mensagens" />;
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

  if (!threads.data || threads.data.length === 0) {
    return (
      <EmptyState
        title="Sem dados"
        description="Ainda não há dados para exibir aqui."
      />
    );
  }

  const activeThreadName = activeThread?.patientName ?? "Profissional";

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <Badge variant="outline">PAT-06</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Mensagens</h1>
        <p className="mt-2 text-sm text-muted-foreground">Converse com seu profissional sem sair do app.</p>
        <p className="mt-1 text-xs text-muted-foreground">Conversa ativa: {activeThreadName}</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Conversas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {threads.data.map((thread) => (
              <button
                key={thread.id}
                type="button"
                className={`rounded-xl border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 ${
                  thread.id === activeThread?.id
                    ? "border-primary bg-primary/15"
                    : "border-border bg-card"
                }`}
                onClick={() => setSelectedThreadId(thread.id)}
                aria-pressed={thread.id === activeThread?.id}
                aria-current={thread.id === activeThread?.id ? "true" : undefined}
              >
                {thread.patientName}
                {thread.unreadCount > 0 ? <Badge variant="warning" className="ml-2">{thread.unreadCount}</Badge> : ""}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Conversa com {activeThreadName}</CardTitle>
        </CardHeader>
        <CardContent>
          {messages.loading ? (
            <LoadingState label="Carregamento da conversa" />
          ) : messages.error ? (
            <ErrorState description="Não foi possível concluir a ação. Tente novamente." onRetry={() => { void messages.reload(); }} />
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
                  placeholder="Escreva sua mensagem..."
                  value={composer}
                  onChange={(event) => setComposer(event.target.value)}
                />
                <Button type="submit" disabled={!composer.trim()}>Enviar mensagem</Button>
              </form>
              <p className="mt-2 text-xs text-muted-foreground" aria-live="polite">
                {lastSentAt ? "Mensagem enviada para revisão do profissional." : "Pressione Enter para enviar mais rápido."}
              </p>
            </>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
