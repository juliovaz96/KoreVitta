"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { usePatientDetails } from "@/hooks/use-patients";
import { usePatientProtocols } from "@/hooks/use-protocols";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState, ErrorState, LoadingState, SuccessState } from "@/components/shared/data-states";
import type { ProtocolModuleType } from "@/types/protocol";

const allModules: ProtocolModuleType[] = ["nutrition", "training", "supplementation", "hydration"];

export default function PatientProtocolPage() {
  const params = useParams<{ id: string }>();
  const patientId = params.id;

  const patient = usePatientDetails(patientId);
  const protocols = usePatientProtocols(patientId);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  const activeProtocol = useMemo(
    () => (protocols.data ?? []).find((protocol) => protocol.status === "active") ?? null,
    [protocols.data],
  );

  const [moduleOverrides, setModuleOverrides] = useState<ProtocolModuleType[] | null>(null);
  const selectedModules = moduleOverrides ?? activeProtocol?.modules ?? ["nutrition", "training"];

  if (patient.loading || protocols.loading) {
    return <LoadingState label="Carregamento do protocolo" />;
  }

  if (patient.error || protocols.error) {
    return (
      <ErrorState
        description="Não foi possível concluir a ação. Tente novamente."
        onRetry={() => {
          void patient.reload();
          void protocols.reload();
        }}
      />
    );
  }

  if (!patient.data) {
    return (
      <EmptyState
        title="Sem dados"
        description="Ainda não há dados para exibir aqui."
      />
    );
  }

  const toggleModule = (module: ProtocolModuleType) => {
    const base = selectedModules;
    setModuleOverrides(
      base.includes(module) ? base.filter((item) => item !== module) : [...base, module],
    );
  };

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Badge variant="outline">PRO-07</Badge>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight">Protocolo integrado</h1>
            <p className="mt-2 text-sm text-muted-foreground">Paciente: {patient.data.name}</p>
          </div>
          <Button
            onClick={async () => {
              await new Promise((resolve) => setTimeout(resolve, 300));
              setSaveMessage("Ação concluída com sucesso.");
            }}
            disabled={selectedModules.length === 0}
          >
            Ativar protocolo
          </Button>
        </div>
      </header>

      {saveMessage ? <SuccessState message={saveMessage} /> : null}

      <section className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader><CardTitle>{activeProtocol?.version ?? "—"}</CardTitle></CardHeader>
          <CardContent className="pt-0 text-sm text-muted-foreground">Versão atual</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>{activeProtocol?.status ?? "draft"}</CardTitle></CardHeader>
          <CardContent className="pt-0 text-sm text-muted-foreground">Status</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>{selectedModules.length}</CardTitle></CardHeader>
          <CardContent className="pt-0 text-sm text-muted-foreground">Módulos ativos</CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Configuração do protocolo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Protocolo atual: {activeProtocol?.name ?? "Sem protocolo ativo"}
            {activeProtocol ? ` • versão ${activeProtocol.version}` : ""}
          </p>

          <div className="grid gap-2 md:grid-cols-2">
            {allModules.map((module) => (
              <label key={module} className="flex items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm capitalize">
                <input
                  type="checkbox"
                  checked={selectedModules.includes(module)}
                  onChange={() => toggleModule(module)}
                />
                {module}
              </label>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              onClick={async () => {
                await new Promise((resolve) => setTimeout(resolve, 300));
                setSaveMessage("Ação concluída com sucesso.");
              }}
            >
              Salvar rascunho
            </Button>
            <Link href="/protocols/proto_001">
              <Button variant="ghost">Abrir editor detalhado</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
