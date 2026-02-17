"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SuccessState } from "@/components/shared/data-states";

type MealPlanDraft = {
  id: string;
  name: string;
  calories: string;
  protein: string;
  carbs: string;
  fat: string;
};

export default function ProtocolNutritionPage() {
  const params = useParams<{ id: string }>();
  const protocolId = params.id;

  const [mealPlans, setMealPlans] = useState<MealPlanDraft[]>([
    { id: "mp-1", name: "Dia de Treino", calories: "2200", protein: "180", carbs: "220", fat: "70" },
    { id: "mp-2", name: "Dia de Descanso", calories: "1950", protein: "180", carbs: "170", fat: "65" },
  ]);
  const [saved, setSaved] = useState(false);

  const addMealPlan = () => {
    setMealPlans((previous) => [
      ...previous,
      {
        id: `mp-${Date.now()}`,
        name: "Novo plano",
        calories: "",
        protein: "",
        carbs: "",
        fat: "",
      },
    ]);
  };

  const updatePlan = (id: string, field: keyof MealPlanDraft, value: string) => {
    setMealPlans((previous) =>
      previous.map((plan) => (plan.id === id ? { ...plan, [field]: value } : plan)),
    );
  };

  const removePlan = (id: string) => {
    setMealPlans((previous) => previous.filter((plan) => plan.id !== id));
  };

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <Badge variant="outline">PRO-08</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Módulo de nutrição</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Defina planos alimentares e macronutrientes do protocolo {protocolId} com edição rápida.
        </p>
      </header>

      {saved ? <SuccessState message="Módulo de nutrição atualizado com sucesso." /> : null}

      <Card>
        <CardHeader>
          <CardTitle>Planos alimentares</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {mealPlans.map((plan) => (
            <div key={plan.id} className="rounded-2xl border border-border p-4">
              <div className="grid gap-4 md:grid-cols-5">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor={`${plan.id}-name`}>Nome do plano</Label>
                  <Input
                    id={`${plan.id}-name`}
                    value={plan.name}
                    onChange={(event) => updatePlan(plan.id, "name", event.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`${plan.id}-calories`}>Kcal</Label>
                  <Input
                    id={`${plan.id}-calories`}
                    value={plan.calories}
                    onChange={(event) => updatePlan(plan.id, "calories", event.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`${plan.id}-protein`}>Proteína (g)</Label>
                  <Input
                    id={`${plan.id}-protein`}
                    value={plan.protein}
                    onChange={(event) => updatePlan(plan.id, "protein", event.target.value)}
                  />
                </div>
                <div className="flex items-end justify-end">
                  <Button variant="ghost" onClick={() => removePlan(plan.id)}>Remover</Button>
                </div>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor={`${plan.id}-carbs`}>Carboidrato (g)</Label>
                  <Input
                    id={`${plan.id}-carbs`}
                    value={plan.carbs}
                    onChange={(event) => updatePlan(plan.id, "carbs", event.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`${plan.id}-fat`}>Gordura (g)</Label>
                  <Input
                    id={`${plan.id}-fat`}
                    value={plan.fat}
                    onChange={(event) => updatePlan(plan.id, "fat", event.target.value)}
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={addMealPlan}>Novo plano alimentar</Button>
            <Button
              onClick={async () => {
                await new Promise((resolve) => setTimeout(resolve, 300));
                setSaved(true);
              }}
            >
              Salvar módulo de nutrição
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
