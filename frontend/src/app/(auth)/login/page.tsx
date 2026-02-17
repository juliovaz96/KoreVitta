"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { FieldErrors } from "react-hook-form";
import { BriefcaseMedical, CircleUserRound, Sparkles } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthShell } from "@/components/auth/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AUTH_USER_STORAGE_KEY, authenticateMockUser, getDefaultRouteByRole, mockLoginUsers, ROLE_STORAGE_KEY } from "@/lib/mock-auth";
import type { UserRole } from "@/types/auth";

const loginSchema = z.object({
  email: z.email("Informe um e-mail válido"),
  password: z.string().min(8, "Senha deve ter no mínimo 8 caracteres"),
});

type LoginInput = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<UserRole>("professional");

  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginInput) => {
    setSubmitError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const authenticatedUser = authenticateMockUser(data.email, data.password, selectedRole);
      if (!authenticatedUser) {
        throw new Error("Credenciais inválidas");
      }

      localStorage.setItem(ROLE_STORAGE_KEY, authenticatedUser.role);
      localStorage.setItem(
        AUTH_USER_STORAGE_KEY,
        JSON.stringify({
          id: authenticatedUser.id,
          name: authenticatedUser.name,
          email: authenticatedUser.email,
          role: authenticatedUser.role,
        }),
      );

      router.push(getDefaultRouteByRole(authenticatedUser.role));
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Não foi possível entrar");
    }
  };

  const onInvalid = (errors: FieldErrors<LoginInput>) => {
    const firstField = Object.keys(errors)[0] as keyof LoginInput | undefined;
    if (firstField) form.setFocus(firstField);
  };

  return (
    <AuthShell
      title="Acessar conta"
      subtitle="Escolha seu perfil e continue de onde parou"
      footer={
        <p>
          Ainda não tem conta?{" "}
          <Link href="/register" className="underline underline-offset-4">
            Cadastre-se
          </Link>
        </p>
      }
    >
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit, onInvalid)} noValidate>
        {Object.keys(form.formState.errors).length > 0 ? (
          <p className="rounded-xl border border-destructive/35 bg-destructive/10 px-3 py-2 text-sm text-destructive" role="alert">
            Revise os campos destacados antes de continuar.
          </p>
        ) : null}

        {form.formState.isSubmitting ? (
          <p className="rounded-xl border border-primary/25 bg-primary/10 px-3 py-2 text-sm" aria-live="polite">
            Validando acesso e redirecionando para sua área...
          </p>
        ) : null}

        <div className="space-y-2">
          <p className="text-sm font-medium">Entrar como</p>
          <div className="grid grid-cols-2 gap-2">
            <Button
              type="button"
              variant={selectedRole === "professional" ? "default" : "outline"}
              onClick={() => setSelectedRole("professional")}
              aria-pressed={selectedRole === "professional"}
              className="gap-2"
            >
              <BriefcaseMedical className="size-4" />
              Profissional
            </Button>
            <Button
              type="button"
              variant={selectedRole === "patient" ? "default" : "outline"}
              onClick={() => setSelectedRole("patient")}
              aria-pressed={selectedRole === "patient"}
              className="gap-2"
            >
              <CircleUserRound className="size-4" />
              Paciente
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            O acesso leva direto para a área correta: profissional no painel e paciente na tela inicial.
          </p>
        </div>

        <div className="rounded-xl border border-border/70 bg-muted/40 p-3 text-xs text-muted-foreground">
          Use o e-mail e a senha da sua conta para continuar seu acompanhamento sem perder o contexto.
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder="voce@dominio.com"
            aria-invalid={Boolean(form.formState.errors.email)}
            aria-describedby={form.formState.errors.email ? "login-email-error" : undefined}
            {...form.register("email")}
          />
          {form.formState.errors.email ? (
            <p id="login-email-error" className="text-sm text-destructive" role="alert">
              {form.formState.errors.email.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Senha</Label>
            <Link href="/forgot-password" className="text-xs text-muted-foreground underline underline-offset-4">
              Esqueci minha senha
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="********"
            aria-invalid={Boolean(form.formState.errors.password)}
            aria-describedby={form.formState.errors.password ? "login-password-error" : undefined}
            {...form.register("password")}
          />
          {form.formState.errors.password ? (
            <p id="login-password-error" className="text-sm text-destructive" role="alert">
              {form.formState.errors.password.message}
            </p>
          ) : null}
        </div>

        {submitError ? (
          <p className="text-sm text-destructive" role="alert" aria-live="assertive">
            {submitError}
          </p>
        ) : null}

        <div className="rounded-xl border border-border/70 bg-card/50 p-3 text-xs text-muted-foreground">
          <p className="inline-flex items-center gap-1.5 font-medium text-foreground">
            <Sparkles className="size-3.5 text-primary" />
            Credenciais fictícias para testes
          </p>
          {mockLoginUsers.map((user) => (
            <p key={user.email} className="mt-1.5">
              <span className="font-medium text-foreground">{user.role === "professional" ? "Profissional" : "Paciente"}</span>
              : {user.email} • {user.password}
            </p>
          ))}
        </div>

        <div className="grid gap-2">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Entrando..." : "Entrar e continuar"}
          </Button>
          <Button type="button" variant="outline">
            Continuar com Google
          </Button>
        </div>
      </form>
    </AuthShell>
  );
}
