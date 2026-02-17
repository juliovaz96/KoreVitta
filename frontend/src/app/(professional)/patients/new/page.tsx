"use client";

import Link from "next/link";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { FieldErrors } from "react-hook-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SuccessState } from "@/components/shared/data-states";

const newPatientSchema = z.object({
  name: z.string().min(3, "Informe o nome completo"),
  email: z.email("Informe um e-mail válido"),
  phone: z.string().min(8, "Informe telefone válido"),
  goal: z.string().min(3, "Informe o objetivo inicial"),
  weightKg: z.string().optional(),
  heightCm: z.string().optional(),
});

type NewPatientInput = z.infer<typeof newPatientSchema>;

export default function NewPatientPage() {
  const [created, setCreated] = useState(false);

  const form = useForm<NewPatientInput>({
    resolver: zodResolver(newPatientSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      goal: "",
      weightKg: "",
      heightCm: "",
    },
  });

  const onInvalid = (errors: FieldErrors<NewPatientInput>) => {
    const firstField = Object.keys(errors)[0] as keyof NewPatientInput | undefined;
    if (firstField) form.setFocus(firstField);
  };

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setCreated(true);
  };

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <Badge variant="outline">PRO-03</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Novo paciente e convite</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Cadastre o paciente e dispare o convite de acesso em um único fluxo.
        </p>
      </header>

      {created ? (
        <>
          <SuccessState message="Paciente criado e convite enviado com sucesso." />
          <div className="flex gap-2">
            <Link href="/patients">
              <Button>Voltar para pacientes</Button>
            </Link>
            <Link href="/invite/demo-token-001">
              <Button variant="outline">Visualizar aceite de convite</Button>
            </Link>
          </div>
        </>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Dados do paciente</CardTitle>
            <CardDescription>Campos mínimos para iniciar o acompanhamento.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit, onInvalid)} noValidate>
              {Object.keys(form.formState.errors).length > 0 ? (
                <p className="rounded-xl border border-destructive/35 bg-destructive/10 px-3 py-2 text-sm text-destructive" role="alert">
                  Revise os campos obrigatórios para criar o paciente e enviar o convite.
                </p>
              ) : null}

              {form.formState.isSubmitting ? (
                <p className="rounded-xl border border-primary/25 bg-primary/10 px-3 py-2 text-sm" aria-live="polite">
                  Criando cadastro e preparando envio do convite...
                </p>
              ) : null}

              <div className="rounded-xl border border-border bg-muted/40 p-3 text-xs text-muted-foreground">
                Campos marcados aqui são suficientes para envio do convite. Informações clínicas podem ser enriquecidas depois.
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" {...form.register("name")} />
                {form.formState.errors.name ? <p className="text-sm text-destructive">{form.formState.errors.name.message}</p> : null}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" {...form.register("email")} />
                  {form.formState.errors.email ? <p className="text-sm text-destructive">{form.formState.errors.email.message}</p> : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" {...form.register("phone")} />
                  {form.formState.errors.phone ? <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p> : null}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="goal">Objetivo inicial</Label>
                <Input id="goal" placeholder="Ex: perder 8kg" {...form.register("goal")} />
                {form.formState.errors.goal ? <p className="text-sm text-destructive">{form.formState.errors.goal.message}</p> : null}
              </div>

              <div className="border-t border-border pt-4">
                <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">Dados opcionais</p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="weightKg">Peso (opcional)</Label>
                    <Input id="weightKg" {...form.register("weightKg")} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="heightCm">Altura em cm (opcional)</Label>
                    <Input id="heightCm" {...form.register("heightCm")} />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Criando..." : "Criar e enviar convite"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </main>
  );
}
