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

type Measurement = { id: string; site: string; valueCm: number; date: string };

export default function BodyMeasurementsPage() {
  const params = useParams<{ id: string }>();
  const patient = usePatientDetails(params.id);
  const [site, setSite] = useState("waist");
  const [valueCm, setValueCm] = useState("");
  const [rows, setRows] = useState<Measurement[]>([
    { id: "m_001", site: "waist", valueCm: 82, date: "2026-02-10" },
    { id: "m_002", site: "hip", valueCm: 95, date: "2026-02-10" },
  ]);

  if (patient.loading) return <LoadingState label="Carregamento das medidas corporais" />;
  if (patient.error || !patient.data) return <ErrorState description="Não foi possível concluir a ação. Tente novamente." onRetry={() => { void patient.reload(); }} />;

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <Badge variant="outline">PRO-16</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Medidas corporais</h1>
        <p className="mt-2 text-sm text-muted-foreground">Paciente: {patient.data.name}</p>
      </header>

      <Card>
        <CardHeader><CardTitle>Novo registro</CardTitle></CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
          <div className="space-y-2">
            <Label htmlFor="site">Região</Label>
            <select id="site" className="h-10 w-full rounded-xl border border-input bg-background px-3 text-sm" value={site} onChange={(e) => setSite(e.target.value)}>
              <option value="waist">Cintura</option>
              <option value="hip">Quadril</option>
              <option value="chest">Peito</option>
              <option value="thigh_left">Coxa esquerda</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="valueCm">Valor (cm)</Label>
            <Input id="valueCm" value={valueCm} onChange={(e) => setValueCm(e.target.value)} />
          </div>
          <div className="flex items-end">
            <Button onClick={() => {
              const parsed = Number(valueCm);
              if (!Number.isFinite(parsed) || parsed <= 0) return;
              setRows((prev) => [{ id: `m_${Date.now()}`, site, valueCm: parsed, date: new Date().toISOString().slice(0, 10) }, ...prev]);
              setValueCm("");
            }}>Registrar medida</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Histórico</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            {rows.map((row) => (
              <li key={row.id} className="flex items-center justify-between rounded-xl border border-border px-3 py-2">
                <span className="capitalize">{row.site.replace("_", " ")} • {row.valueCm}cm</span>
                <span className="text-xs text-muted-foreground">{new Date(row.date).toLocaleDateString("pt-BR")}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </main>
  );
}
