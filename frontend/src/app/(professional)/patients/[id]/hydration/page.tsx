"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { usePatientDetails } from "@/hooks/use-patients";
import { useToday } from "@/hooks/use-today";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorState, LoadingState, SuccessState } from "@/components/shared/data-states";

export default function ProfessionalHydrationPage() {
  const params = useParams<{ id: string }>();
  const patient = usePatientDetails(params.id);
  const today = useToday();
  const [targetMl, setTargetMl] = useState("3000");
  const [saved, setSaved] = useState(false);

  if (patient.loading || today.loading) return <LoadingState label="Carregamento da hidratação do paciente" />;
  if (patient.error || today.error || !patient.data || !today.data) {
    return <ErrorState description="Não foi possível concluir a ação. Tente novamente." onRetry={() => { void patient.reload(); void today.reload(); }} />;
  }

  const progress = Number(targetMl) > 0 ? Math.min(100, Math.round((today.data.waterCurrentMl / Number(targetMl)) * 100)) : 0;

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <Badge variant="outline">PRO-15</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Hidratação (profissional)</h1>
        <p className="mt-2 text-sm text-muted-foreground">Paciente: {patient.data.name}</p>
      </header>

      {saved ? <SuccessState message="Ação concluída com sucesso." /> : null}

      <Card>
        <CardHeader><CardTitle>Meta diária</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="targetMl">Meta (ml)</Label>
            <Input id="targetMl" value={targetMl} onChange={(e) => setTargetMl(e.target.value)} />
          </div>
          <Button onClick={async () => { await new Promise((resolve) => setTimeout(resolve, 300)); setSaved(true); }}>
            Salvar meta
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Progresso atual</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm">{today.data.waterCurrentMl}ml de {targetMl}ml</p>
          <div className="h-3 w-full rounded-full bg-muted">
            <div className="h-3 rounded-full bg-linear-to-r from-primary to-chart-2" style={{ width: `${progress}%` }} />
          </div>
          <p className="text-xs text-muted-foreground">Atingido: {progress}%</p>
        </CardContent>
      </Card>
    </main>
  );
}
