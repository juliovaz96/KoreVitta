"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { usePatientDetails } from "@/hooks/use-patients";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorState, LoadingState } from "@/components/shared/data-states";

type BiomarkerRow = { id: string; name: string; value: string; unit: string; flag: "normal" | "high" | "low" };

export default function BiomarkersPage() {
  const params = useParams<{ id: string }>();
  const patient = usePatientDetails(params.id);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [rows, setRows] = useState<BiomarkerRow[]>([
    { id: "bio_001", name: "Glicose em jejum", value: "89", unit: "mg/dL", flag: "normal" },
    { id: "bio_002", name: "Vitamina D", value: "24", unit: "ng/mL", flag: "low" },
    { id: "bio_003", name: "Triglicerídeos", value: "190", unit: "mg/dL", flag: "high" },
  ]);

  if (patient.loading) return <LoadingState label="Carregamento dos biomarcadores" />;
  if (patient.error || !patient.data) return <ErrorState description="Não foi possível concluir a ação. Tente novamente." onRetry={() => { void patient.reload(); }} />;

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <Badge variant="outline">PRO-19</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Biomarcadores e exames</h1>
        <p className="mt-2 text-sm text-muted-foreground">Paciente: {patient.data.name}</p>
      </header>

      <Card>
        <CardHeader><CardTitle>Novo biomarcador</CardTitle></CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
          <div className="space-y-2"><Label htmlFor="name">Nome</Label><Input id="name" value={name} onChange={(e) => setName(e.target.value)} /></div>
          <div className="space-y-2"><Label htmlFor="value">Valor</Label><Input id="value" value={value} onChange={(e) => setValue(e.target.value)} /></div>
          <div className="flex items-end">
            <Button onClick={() => {
              if (!name.trim() || !value.trim()) return;
              setRows((prev) => [{ id: `bio_${Date.now()}`, name, value, unit: "mg/dL", flag: "normal" }, ...prev]);
              setName("");
              setValue("");
            }}>Adicionar biomarcador</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Painel atual</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            {rows.map((row) => (
              <li key={row.id} className="flex items-center justify-between rounded-xl border border-border px-3 py-2">
                <span>{row.name}: {row.value} {row.unit}</span>
                <Badge variant={row.flag === "high" ? "danger" : row.flag === "low" ? "warning" : "success"}>{row.flag}</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </main>
  );
}
