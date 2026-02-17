"use client";

import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SuccessState } from "@/components/shared/data-states";

type TrainingExerciseDraft = {
  id: string;
  name: string;
  sets: string;
  reps: string;
  rest: string;
};

export default function ProtocolTrainingPage() {
  const params = useParams<{ id: string }>();
  const protocolId = params.id;

  const [planName, setPlanName] = useState("Treino A - Superior");
  const [exercises, setExercises] = useState<TrainingExerciseDraft[]>([
    { id: "ex-1", name: "Supino reto", sets: "4", reps: "8-12", rest: "90" },
    { id: "ex-2", name: "Remada curvada", sets: "4", reps: "8-12", rest: "90" },
    { id: "ex-3", name: "Desenvolvimento", sets: "3", reps: "10-12", rest: "75" },
  ]);
  const [saved, setSaved] = useState(false);

  const updateExercise = (id: string, field: keyof TrainingExerciseDraft, value: string) => {
    setExercises((previous) =>
      previous.map((exercise) => (exercise.id === id ? { ...exercise, [field]: value } : exercise)),
    );
  };

  const addExercise = () => {
    setExercises((previous) => [
      ...previous,
      { id: `ex-${Date.now()}`, name: "Novo exercício", sets: "", reps: "", rest: "" },
    ]);
  };

  const removeExercise = (id: string) => {
    setExercises((previous) => previous.filter((exercise) => exercise.id !== id));
  };

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <Badge variant="outline">PRO-09</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Módulo de treino</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Configure plano de treino e exercícios do protocolo {protocolId}.
        </p>
      </header>

      {saved ? <SuccessState message="Módulo de treino atualizado com sucesso." /> : null}

      <Card>
        <CardHeader>
          <CardTitle>Plano de treino</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="planName">Nome do plano</Label>
            <Input id="planName" value={planName} onChange={(event) => setPlanName(event.target.value)} />
          </div>

          <div className="space-y-3">
            {exercises.map((exercise, index) => (
              <div key={exercise.id} className="rounded-2xl border border-border p-4">
                <p className="mb-3 text-sm font-medium">Exercício {index + 1}</p>
                <div className="grid gap-3 md:grid-cols-5">
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor={`${exercise.id}-name`}>Nome</Label>
                    <Input
                      id={`${exercise.id}-name`}
                      value={exercise.name}
                      onChange={(event) => updateExercise(exercise.id, "name", event.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`${exercise.id}-sets`}>Séries</Label>
                    <Input
                      id={`${exercise.id}-sets`}
                      value={exercise.sets}
                      onChange={(event) => updateExercise(exercise.id, "sets", event.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`${exercise.id}-reps`}>Reps</Label>
                    <Input
                      id={`${exercise.id}-reps`}
                      value={exercise.reps}
                      onChange={(event) => updateExercise(exercise.id, "reps", event.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`${exercise.id}-rest`}>Descanso (s)</Label>
                    <Input
                      id={`${exercise.id}-rest`}
                      value={exercise.rest}
                      onChange={(event) => updateExercise(exercise.id, "rest", event.target.value)}
                    />
                  </div>
                </div>
                <div className="mt-3 flex justify-end">
                  <Button variant="ghost" onClick={() => removeExercise(exercise.id)}>Remover exercício</Button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={addExercise}>Novo exercício</Button>
            <Button
              onClick={async () => {
                await new Promise((resolve) => setTimeout(resolve, 300));
                setSaved(true);
              }}
            >
              Salvar módulo de treino
            </Button>
            <Link href={`/protocols/${protocolId}`}>
              <Button variant="ghost">Voltar ao protocolo</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
