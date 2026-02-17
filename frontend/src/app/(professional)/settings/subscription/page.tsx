"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SuccessState } from "@/components/shared/data-states";

const plans = [
  { id: "free", name: "Free", price: "R$ 0", patients: "Até 5 pacientes", templates: "—", analytics: "—" },
  { id: "core", name: "Core", price: "R$ 79,90", patients: "Ilimitados", templates: "Sim", analytics: "—" },
  { id: "pro", name: "Pro", price: "R$ 99,90", patients: "Ilimitados", templates: "Sim", analytics: "Sim" },
];

export default function SettingsSubscriptionPage() {
  const [currentPlan, setCurrentPlan] = useState("free");
  const [updated, setUpdated] = useState(false);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <Badge variant="outline">PRO-12</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Assinatura e upgrade</h1>
      </header>

      {updated ? <SuccessState message="Ação concluída com sucesso." /> : null}

      <section className="grid gap-4 md:grid-cols-3">
        {plans.map((plan) => {
          const isCurrent = plan.id === currentPlan;
          return (
            <Card key={plan.id} className={isCurrent ? "border-primary/40" : undefined}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {plan.name}
                  {isCurrent ? <Badge variant="success">Atual</Badge> : null}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="text-lg font-semibold">{plan.price}/mês</p>
                <p>Pacientes: {plan.patients}</p>
                <p>Templates: {plan.templates}</p>
                <p>Analytics: {plan.analytics}</p>
                <Button
                  className="mt-2"
                  variant={isCurrent ? "outline" : "default"}
                  onClick={async () => {
                    await new Promise((resolve) => setTimeout(resolve, 300));
                    setCurrentPlan(plan.id);
                    setUpdated(true);
                  }}
                  disabled={isCurrent}
                >
                  {isCurrent ? "Plano atual" : "Selecionar plano"}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </section>
    </main>
  );
}
