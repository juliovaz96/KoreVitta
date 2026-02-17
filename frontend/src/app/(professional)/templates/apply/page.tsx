"use client";

import Link from "next/link";
import { useState } from "react";
import { usePatients } from "@/hooks/use-patients";
import { useTemplates } from "@/hooks/use-protocols";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { EmptyState, ErrorState, LoadingState, SuccessState } from "@/components/shared/data-states";
import type { ProtocolModuleType } from "@/types/protocol";

const modules: ProtocolModuleType[] = ["nutrition", "training", "supplementation", "hydration"];

export default function ApplyTemplatePage() {
  const templates = useTemplates();
  const patients = usePatients();
  const [templateId, setTemplateId] = useState("");
  const [patientId, setPatientId] = useState("");
  const [selectedModules, setSelectedModules] = useState<ProtocolModuleType[]>(["nutrition", "training"]);
  const [created, setCreated] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  if (templates.loading || patients.loading) {
    return <LoadingState label="Carregamento do fluxo de aplicação" />;
  }

  if (templates.error || patients.error) {
    return (
      <ErrorState
        description="Não foi possível concluir a ação. Tente novamente."
        onRetry={() => {
          void templates.reload();
          void patients.reload();
        }}
      />
    );
  }

  const templateItems = templates.data ?? [];
  const patientItems = patients.data ?? [];
  const targetPatient = patientItems.find((item) => item.id === patientId) ?? null;

  const canConfirm = Boolean(templateId && patientId && selectedModules.length > 0);

  if (templateItems.length === 0 || patientItems.length === 0) {
    return <EmptyState title="Sem dados" description="Ainda não há dados para exibir aqui." />;
  }

  const toggleModule = (module: ProtocolModuleType) => {
    setSelectedModules((prev) => (prev.includes(module) ? prev.filter((item) => item !== module) : [...prev, module]));
  };

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <Badge variant="outline">PRO-14</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Aplicar template</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Selecione template, paciente e módulos antes de confirmar.
        </p>
      </header>

      {created ? <SuccessState message="Ação concluída com sucesso." /> : null}
      {isCreating ? (
        <p className="rounded-xl border border-primary/25 bg-primary/10 px-3 py-2 text-sm" aria-live="polite">
          Criando protocolo e vinculando ao paciente...
        </p>
      ) : null}

      <Card>
        <CardHeader><CardTitle>Seleção</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="templateId">Template</Label>
              <select id="templateId" className="h-10 w-full rounded-xl border border-input bg-background px-3 text-sm" value={templateId} onChange={(e) => setTemplateId(e.target.value)}>
                <option value="">Selecionar template</option>
                {templateItems.map((tpl) => (<option key={tpl.id} value={tpl.id}>{tpl.name}</option>))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="patientId">Paciente</Label>
              <select id="patientId" className="h-10 w-full rounded-xl border border-input bg-background px-3 text-sm" value={patientId} onChange={(e) => setPatientId(e.target.value)}>
                <option value="">Selecionar paciente</option>
                {patientItems.map((patient) => (<option key={patient.id} value={patient.id}>{patient.name}</option>))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Módulos</p>
            <div className="grid gap-2 md:grid-cols-2">
              {modules.map((module) => (
                <label key={module} className="flex items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm capitalize">
                  <input type="checkbox" checked={selectedModules.includes(module)} onChange={() => toggleModule(module)} />
                  {module}
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              disabled={!canConfirm || isCreating}
              onClick={async () => {
                setIsCreating(true);
                await new Promise((resolve) => setTimeout(resolve, 300));
                setCreated(true);
                setIsCreating(false);
              }}
            >
              Criar protocolo com template
            </Button>
            {targetPatient ? (
              <Link href={`/patients/${targetPatient.id}/protocol`}><Button variant="outline">Abrir protocolo do paciente</Button></Link>
            ) : null}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
