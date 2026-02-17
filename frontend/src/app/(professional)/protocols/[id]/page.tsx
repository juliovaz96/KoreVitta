"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { usePatientProtocols } from "@/hooks/use-protocols";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EmptyState, ErrorState, LoadingState, SuccessState } from "@/components/shared/data-states";
import type { ProtocolModuleType } from "@/types/protocol";

const allModules: ProtocolModuleType[] = ["nutrition", "training", "supplementation", "hydration"];

export default function ProtocolEditorPage() {
  const params = useParams<{ id: string }>();
  const protocolId = params.id;
  const protocols = usePatientProtocols("pat_001");
  const [savedMessage, setSavedMessage] = useState<string | null>(null);

  const protocol = useMemo(() => {
    const items = protocols.data ?? [];
    return items.find((item) => item.id === protocolId) ?? items[0] ?? null;
  }, [protocolId, protocols.data]);

  const [nameDraft, setNameDraft] = useState("");
  const [startsAtDraft, setStartsAtDraft] = useState("");
  const [endsAtDraft, setEndsAtDraft] = useState("");
  const [selectedModules, setSelectedModules] = useState<ProtocolModuleType[]>([]);

  if (protocols.loading) {
    return <LoadingState label="Carregando editor de protocolo" />;
  }

  if (protocols.error) {
    return (
      <ErrorState
        description="Não foi possível carregar os dados do protocolo."
        onRetry={() => {
          void protocols.reload();
        }}
      />
    );
  }

  if (!protocol) {
    return (
      <EmptyState
        title="Protocolo não encontrado"
        description="Não há protocolo disponível para edição neste ambiente de demonstração."
      />
    );
  }

  const effectiveName = nameDraft || protocol.name;
  const effectiveStartsAt = startsAtDraft || protocol.startsAt;
  const effectiveEndsAt = endsAtDraft || protocol.endsAt || "";
  const effectiveModules = selectedModules.length > 0 ? selectedModules : protocol.modules;

  const toggleModule = (module: ProtocolModuleType) => {
    setSelectedModules((previous) =>
      previous.includes(module) ? previous.filter((item) => item !== module) : [...previous, module],
    );
  };

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <Badge variant="outline">PRO-07</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Editor de protocolo</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Edição do bundle integrado com controle de versão e módulos ativos.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge variant="default">Versão {protocol.version}</Badge>
          <Badge variant={protocol.status === "active" ? "success" : "warning"} className="capitalize">{protocol.status}</Badge>
        </div>
      </header>

      {savedMessage ? <SuccessState message={savedMessage} /> : null}

      <Card>
        <CardHeader>
          <CardTitle>Dados principais</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="protocolName">Nome do protocolo</Label>
              <Input
                id="protocolName"
                value={effectiveName}
                onChange={(event) => setNameDraft(event.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="protocolStatus">Status</Label>
              <p id="protocolStatus" className="text-sm capitalize text-muted-foreground">{protocol.status}</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="startsAt">Início</Label>
              <Input
                id="startsAt"
                type="date"
                value={effectiveStartsAt}
                onChange={(event) => setStartsAtDraft(event.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endsAt">Fim</Label>
              <Input
                id="endsAt"
                type="date"
                value={effectiveEndsAt}
                onChange={(event) => setEndsAtDraft(event.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Módulos ativos</Label>
            <div className="grid gap-2 md:grid-cols-2">
              {allModules.map((module) => {
                const checked = effectiveModules.includes(module);
                return (
                  <label key={module} className="flex items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm capitalize">
                    <input type="checkbox" checked={checked} onChange={() => toggleModule(module)} />
                    {module}
                  </label>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              onClick={async () => {
                await new Promise((resolve) => setTimeout(resolve, 300));
                setSavedMessage("Rascunho do protocolo salvo com sucesso.");
              }}
            >
              Salvar rascunho
            </Button>
            <Button
              onClick={async () => {
                await new Promise((resolve) => setTimeout(resolve, 300));
                setSavedMessage("Nova versão publicada e protocolo ativado.");
              }}
              disabled={effectiveModules.length === 0}
            >
              Publicar nova versão
            </Button>
            <Button
              variant="secondary"
              onClick={async () => {
                await new Promise((resolve) => setTimeout(resolve, 300));
                setSavedMessage("Template aplicado aos pacientes selecionados.");
              }}
            >
              Aplicar a paciente(s)
            </Button>
            <Link href={`/protocols/${protocol.id}/nutrition`}>
              <Button variant="ghost">Editar Nutrição</Button>
            </Link>
            <Link href={`/protocols/${protocol.id}/training`}>
              <Button variant="ghost">Editar Treino</Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Resumo operacional</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1 text-sm text-muted-foreground">
          <p>Versão atual: {protocol.version}</p>
          <p>O que mudou: ajustes de metas e módulos para a fase atual do paciente.</p>
          <p>Vigência: {new Date(protocol.startsAt).toLocaleDateString("pt-BR")}{protocol.endsAt ? ` até ${new Date(protocol.endsAt).toLocaleDateString("pt-BR")}` : ""}</p>
          <p>Módulos configurados: {effectiveModules.join(", ")}</p>
        </CardContent>
      </Card>
    </main>
  );
}
