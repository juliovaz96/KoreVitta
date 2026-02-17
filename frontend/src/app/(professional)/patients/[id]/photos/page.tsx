"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { usePatientDetails } from "@/hooks/use-patients";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ErrorState, LoadingState } from "@/components/shared/data-states";

type PhotoItem = { id: string; label: string; date: string; url: string };

export default function ProgressPhotosPage() {
  const params = useParams<{ id: string }>();
  const patient = usePatientDetails(params.id);
  const [url, setUrl] = useState("");
  const [photos, setPhotos] = useState<PhotoItem[]>([
    { id: "ph_001", label: "Frente", date: "2026-02-10", url: "https://placehold.co/320x420" },
    { id: "ph_002", label: "Lado", date: "2026-02-03", url: "https://placehold.co/320x420" },
  ]);

  if (patient.loading) return <LoadingState label="Carregamento das fotos de evolução" />;
  if (patient.error || !patient.data) return <ErrorState description="Não foi possível concluir a ação. Tente novamente." onRetry={() => { void patient.reload(); }} />;

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <Badge variant="outline">PRO-17</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Fotos de evolução</h1>
        <p className="mt-2 text-sm text-muted-foreground">Paciente: {patient.data.name}</p>
      </header>

      <Card>
        <CardHeader><CardTitle>Adicionar foto (URL)</CardTitle></CardHeader>
        <CardContent className="flex gap-2">
          <Input value={url} placeholder="https://..." onChange={(e) => setUrl(e.target.value)} />
          <Button onClick={() => {
            if (!url.trim()) return;
            setPhotos((prev) => [{ id: `ph_${Date.now()}`, label: "Novo registro", date: new Date().toISOString().slice(0, 10), url }, ...prev]);
            setUrl("");
          }}>Adicionar foto</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Timeline visual</CardTitle></CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <div key={photo.id} className="rounded-xl border border-border p-3">
              <Image src={photo.url} alt={photo.label} width={320} height={420} className="h-52 w-full rounded-lg object-cover" />
              <p className="mt-2 text-sm font-medium">{photo.label}</p>
              <p className="text-xs text-muted-foreground">{new Date(photo.date).toLocaleDateString("pt-BR")}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </main>
  );
}
