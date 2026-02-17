"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { FieldErrors } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const onboardingSchema = z.object({
  profession: z.string().min(2, "Informe sua profissão"),
  licenseType: z.string().min(2, "Informe o tipo de registro"),
  licenseNumber: z.string().min(3, "Informe seu número de registro"),
  brandName: z.string().min(2, "Informe o nome do método"),
  primaryColor: z.string().min(4, "Cor inválida"),
  logoUrl: z.string().url("Informe uma URL válida para a logo").or(z.literal("")),
  cadence: z.enum(["weekly", "biweekly", "monthly"]),
});

type OnboardingInput = z.infer<typeof onboardingSchema>;

export default function ProfessionalOnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const stepLabels: Record<1 | 2 | 3, string> = {
    1: "Perfil profissional",
    2: "Marca e identidade",
    3: "Operação padrão",
  };

  const form = useForm<OnboardingInput>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      profession: "",
      licenseType: "",
      licenseNumber: "",
      brandName: "",
      primaryColor: "#6C63FF",
      logoUrl: "",
      cadence: "weekly",
    },
  });

  const nextStep = async () => {
    const fieldsByStep: Record<number, (keyof OnboardingInput)[]> = {
      1: ["profession", "licenseType", "licenseNumber"],
      2: ["brandName", "primaryColor", "logoUrl"],
      3: ["cadence"],
    };

    const isValid = await form.trigger(fieldsByStep[step]);
    if (!isValid) {
      const firstInvalidField = fieldsByStep[step].find((field) => Boolean(form.formState.errors[field]));
      if (firstInvalidField) form.setFocus(firstInvalidField);
      return;
    }
    if (step < 3) setStep((prev) => (prev + 1) as 1 | 2 | 3);
  };

  const previousStep = () => {
    if (step > 1) setStep((prev) => (prev - 1) as 1 | 2 | 3);
  };

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    router.push("/dashboard");
  };

  const onInvalidSubmit = (errors: FieldErrors<OnboardingInput>) => {
    const firstField = Object.keys(errors)[0] as keyof OnboardingInput | undefined;
    if (firstField) form.setFocus(firstField);
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl items-center px-6 py-10">
      <Card className="w-full">
        <CardHeader>
          <p className="text-xs text-muted-foreground">Etapa {step} de 3 • {stepLabels[step]}</p>
          <CardTitle>Onboarding profissional</CardTitle>
          <CardDescription>
            Complete as etapas para liberar seu painel e começar com uma operação organizada.
          </CardDescription>
          <div className="mt-3 h-2 w-full rounded-full bg-muted">
            <div
              className="h-2 rounded-full bg-primary transition-all"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </CardHeader>
        <CardContent>
          <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit, onInvalidSubmit)} noValidate>
            {Object.keys(form.formState.errors).length > 0 ? (
              <p className="rounded-xl border border-destructive/35 bg-destructive/10 px-3 py-2 text-sm text-destructive" role="alert">
                Revise os campos da etapa atual para continuar.
              </p>
            ) : null}

            {form.formState.isSubmitting ? (
              <p className="rounded-xl border border-primary/25 bg-primary/10 px-3 py-2 text-sm" aria-live="polite">
                Finalizando configuração da conta e preparando seu painel...
              </p>
            ) : null}

            <p className="rounded-xl border border-border/70 bg-muted/40 p-3 text-xs text-muted-foreground">
              Preenchimento rápido: menos de 2 minutos para concluir a configuração inicial.
            </p>

            {step === 1 ? (
              <>
                <div className="space-y-2">
                  <Label htmlFor="profession">Profissão</Label>
                  <Input
                    id="profession"
                    placeholder="Nutricionista"
                    aria-invalid={Boolean(form.formState.errors.profession)}
                    aria-describedby={form.formState.errors.profession ? "onboarding-profession-error" : undefined}
                    {...form.register("profession")}
                  />
                  {form.formState.errors.profession ? (
                    <p id="onboarding-profession-error" className="text-sm text-destructive" role="alert">
                      {form.formState.errors.profession.message}
                    </p>
                  ) : null}
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="licenseType">Tipo de registro</Label>
                    <Input
                      id="licenseType"
                      placeholder="CRN, CREF, CRM"
                      aria-invalid={Boolean(form.formState.errors.licenseType)}
                      aria-describedby={form.formState.errors.licenseType ? "onboarding-license-type-error" : undefined}
                      {...form.register("licenseType")}
                    />
                    {form.formState.errors.licenseType ? (
                      <p id="onboarding-license-type-error" className="text-sm text-destructive" role="alert">
                        {form.formState.errors.licenseType.message}
                      </p>
                    ) : null}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="licenseNumber">Número do registro</Label>
                    <Input
                      id="licenseNumber"
                      placeholder="000000"
                      aria-invalid={Boolean(form.formState.errors.licenseNumber)}
                      aria-describedby={form.formState.errors.licenseNumber ? "onboarding-license-number-error" : undefined}
                      {...form.register("licenseNumber")}
                    />
                    {form.formState.errors.licenseNumber ? (
                      <p id="onboarding-license-number-error" className="text-sm text-destructive" role="alert">
                        {form.formState.errors.licenseNumber.message}
                      </p>
                    ) : null}
                  </div>
                </div>
              </>
            ) : null}

            {step === 2 ? (
              <>
                <div className="space-y-2">
                  <Label htmlFor="brandName">Nome do método</Label>
                  <Input
                    id="brandName"
                    placeholder="Método Kore"
                    aria-invalid={Boolean(form.formState.errors.brandName)}
                    aria-describedby={form.formState.errors.brandName ? "onboarding-brand-name-error" : undefined}
                    {...form.register("brandName")}
                  />
                  {form.formState.errors.brandName ? (
                    <p id="onboarding-brand-name-error" className="text-sm text-destructive" role="alert">
                      {form.formState.errors.brandName.message}
                    </p>
                  ) : null}
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="primaryColor">Cor primária</Label>
                    <Input
                      id="primaryColor"
                      type="color"
                      className="h-10"
                      aria-invalid={Boolean(form.formState.errors.primaryColor)}
                      aria-describedby={form.formState.errors.primaryColor ? "onboarding-primary-color-error" : undefined}
                      {...form.register("primaryColor")}
                    />
                    {form.formState.errors.primaryColor ? (
                      <p id="onboarding-primary-color-error" className="text-sm text-destructive" role="alert">
                        {form.formState.errors.primaryColor.message}
                      </p>
                    ) : null}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="logoUrl">URL da logo (opcional)</Label>
                    <Input
                      id="logoUrl"
                      placeholder="https://..."
                      aria-invalid={Boolean(form.formState.errors.logoUrl)}
                      aria-describedby={form.formState.errors.logoUrl ? "onboarding-logo-url-error" : undefined}
                      {...form.register("logoUrl")}
                    />
                    {form.formState.errors.logoUrl ? (
                      <p id="onboarding-logo-url-error" className="text-sm text-destructive" role="alert">
                        {form.formState.errors.logoUrl.message}
                      </p>
                    ) : null}
                  </div>
                </div>
              </>
            ) : null}

            {step === 3 ? (
              <div className="space-y-2">
                <Label htmlFor="cadence">Cadência padrão de check-in</Label>
                <select
                  id="cadence"
                  className="h-10 w-full rounded-xl border border-input bg-background px-3 text-sm"
                  aria-invalid={Boolean(form.formState.errors.cadence)}
                  aria-describedby={form.formState.errors.cadence ? "onboarding-cadence-error" : undefined}
                  {...form.register("cadence")}
                >
                  <option value="weekly">Semanal</option>
                  <option value="biweekly">Quinzenal</option>
                  <option value="monthly">Mensal</option>
                </select>
                {form.formState.errors.cadence ? (
                  <p id="onboarding-cadence-error" className="text-sm text-destructive" role="alert">
                    {form.formState.errors.cadence.message}
                  </p>
                ) : null}
              </div>
            ) : null}

            <div className="flex items-center justify-between">
              <Button type="button" variant="outline" onClick={previousStep} disabled={step === 1}>
                Voltar
              </Button>
              {step < 3 ? (
                <Button type="button" onClick={nextStep}>
                  {step === 1 ? "Continuar para marca" : "Continuar para operação"}
                </Button>
              ) : (
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Finalizando..." : "Finalizar e acessar painel"}
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
