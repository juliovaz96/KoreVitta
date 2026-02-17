"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import type { FieldErrors } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthShell } from "@/components/auth/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const registerSchema = z.object({
  name: z.string().min(3, "Informe seu nome completo"),
  email: z.email("Informe um e-mail válido"),
  profession: z.string().min(2, "Informe sua profissão"),
  password: z
    .string()
    .min(8, "Senha deve ter no mínimo 8 caracteres")
    .regex(/[A-Z]/, "Senha precisa ter pelo menos uma letra maiúscula")
    .regex(/[0-9]/, "Senha precisa ter pelo menos um número"),
  acceptedTerms: z.boolean().refine((value) => value, {
    error: "Você precisa aceitar os termos para continuar",
  }),
});

type RegisterInput = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      profession: "",
      password: "",
      acceptedTerms: false,
    },
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    router.push("/onboarding");
  };

  const onInvalid = (errors: FieldErrors<RegisterInput>) => {
    const firstField = Object.keys(errors)[0] as keyof RegisterInput | undefined;
    if (firstField) form.setFocus(firstField);
  };

  return (
    <AuthShell
      title="Criar conta profissional"
      subtitle="Configure sua conta KoreVitta para iniciar o onboarding"
      footer={
        <p>
          Já possui conta?{" "}
          <Link href="/login" className="underline underline-offset-4">
            Entrar
          </Link>
        </p>
      }
    >
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit, onInvalid)} noValidate>
        {Object.keys(form.formState.errors).length > 0 ? (
          <p className="rounded-xl border border-destructive/35 bg-destructive/10 px-3 py-2 text-sm text-destructive" role="alert">
            Corrija os campos obrigatórios para avançar ao onboarding.
          </p>
        ) : null}

        {form.formState.isSubmitting ? (
          <p className="rounded-xl border border-primary/25 bg-primary/10 px-3 py-2 text-sm" aria-live="polite">
            Criando sua conta profissional...
          </p>
        ) : null}

        <div className="rounded-xl border border-border/70 bg-muted/40 p-3 text-xs text-muted-foreground">
          Etapa 1 de 2: crie sua conta. Depois você configura marca e operação no onboarding.
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Nome completo</Label>
          <Input
            id="name"
            placeholder="Seu nome"
            aria-invalid={Boolean(form.formState.errors.name)}
            aria-describedby={form.formState.errors.name ? "register-name-error" : undefined}
            {...form.register("name")}
          />
          {form.formState.errors.name ? (
            <p id="register-name-error" className="text-sm text-destructive" role="alert">
              {form.formState.errors.name.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder="voce@dominio.com"
            aria-invalid={Boolean(form.formState.errors.email)}
            aria-describedby={form.formState.errors.email ? "register-email-error" : undefined}
            {...form.register("email")}
          />
          {form.formState.errors.email ? (
            <p id="register-email-error" className="text-sm text-destructive" role="alert">
              {form.formState.errors.email.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="profession">Profissão</Label>
          <Input
            id="profession"
            placeholder="Nutricionista, preparador físico..."
            aria-invalid={Boolean(form.formState.errors.profession)}
            aria-describedby={form.formState.errors.profession ? "register-profession-error" : undefined}
            {...form.register("profession")}
          />
          {form.formState.errors.profession ? (
            <p id="register-profession-error" className="text-sm text-destructive" role="alert">
              {form.formState.errors.profession.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            placeholder="********"
            aria-invalid={Boolean(form.formState.errors.password)}
            aria-describedby={form.formState.errors.password ? "register-password-error" : undefined}
            {...form.register("password")}
          />
          {form.formState.errors.password ? (
            <p id="register-password-error" className="text-sm text-destructive" role="alert">
              {form.formState.errors.password.message}
            </p>
          ) : null}
        </div>

        <label className="flex items-start gap-2 text-sm text-muted-foreground" htmlFor="acceptedTerms">
          <input
            id="acceptedTerms"
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border border-input"
            aria-invalid={Boolean(form.formState.errors.acceptedTerms)}
            aria-describedby={form.formState.errors.acceptedTerms ? "register-terms-error" : undefined}
            {...form.register("acceptedTerms")}
          />
          <span>Aceito os termos de uso e a política de privacidade para continuar.</span>
        </label>
        {form.formState.errors.acceptedTerms ? (
          <p id="register-terms-error" className="text-sm text-destructive" role="alert">
            {form.formState.errors.acceptedTerms.message}
          </p>
        ) : null}

        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Criando conta..." : "Criar conta e continuar"}
        </Button>
      </form>
    </AuthShell>
  );
}
