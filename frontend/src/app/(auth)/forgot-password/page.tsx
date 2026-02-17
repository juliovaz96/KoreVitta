"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { FieldErrors } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthShell } from "@/components/auth/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const emailSchema = z.object({
  email: z.email("Informe um e-mail válido"),
});

const resetSchema = z
  .object({
    token: z.string().min(6, "Token inválido"),
    password: z.string().min(8, "Senha deve ter no mínimo 8 caracteres"),
    confirmPassword: z.string().min(8, "Confirmação inválida"),
  })
  .refine((values) => values.password === values.confirmPassword, {
    error: "As senhas não conferem",
    path: ["confirmPassword"],
  });

type EmailInput = z.infer<typeof emailSchema>;
type ResetInput = z.infer<typeof resetSchema>;

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const stepLabel: Record<1 | 2 | 3, string> = {
    1: "Confirmar e-mail",
    2: "Validar token e redefinir senha",
    3: "Concluído",
  };

  const emailForm = useForm<EmailInput>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "" },
  });

  const resetForm = useForm<ResetInput>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      token: "",
      password: "",
      confirmPassword: "",
    },
  });

  const sendRecovery = async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    setStep(2);
  };

  const onInvalidEmail = (errors: FieldErrors<EmailInput>) => {
    const firstField = Object.keys(errors)[0] as keyof EmailInput | undefined;
    if (firstField) emailForm.setFocus(firstField);
  };

  const confirmReset = async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    setStep(3);
  };

  const onInvalidReset = (errors: FieldErrors<ResetInput>) => {
    const firstField = Object.keys(errors)[0] as keyof ResetInput | undefined;
    if (firstField) resetForm.setFocus(firstField);
  };

  return (
    <AuthShell
      title="Recuperar senha"
      subtitle="Siga as etapas para voltar ao seu acompanhamento com segurança"
    >
      <div className="mb-4 space-y-2">
        <p className="text-xs text-muted-foreground">Etapa {step} de 3 • {stepLabel[step]}</p>
        <div className="h-2 w-full rounded-full bg-muted">
          <div className="h-2 rounded-full bg-primary transition-all" style={{ width: `${(step / 3) * 100}%` }} />
        </div>
      </div>

      {step === 1 ? (
        <form className="space-y-4" onSubmit={emailForm.handleSubmit(sendRecovery, onInvalidEmail)} noValidate>
          {Object.keys(emailForm.formState.errors).length > 0 ? (
            <p className="rounded-xl border border-destructive/35 bg-destructive/10 px-3 py-2 text-sm text-destructive" role="alert">
              Informe um e-mail válido para receber o token.
            </p>
          ) : null}

          {emailForm.formState.isSubmitting ? (
            <p className="rounded-xl border border-primary/25 bg-primary/10 px-3 py-2 text-sm" aria-live="polite">
              Enviando instruções de recuperação...
            </p>
          ) : null}

          <p className="rounded-xl border border-border/70 bg-muted/40 p-3 text-xs text-muted-foreground">
            Enviaremos um token para o e-mail informado para você criar uma nova senha.
          </p>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail da conta</Label>
            <Input
              id="email"
              type="email"
              placeholder="voce@dominio.com"
              aria-invalid={Boolean(emailForm.formState.errors.email)}
              aria-describedby={emailForm.formState.errors.email ? "forgot-email-error" : undefined}
              {...emailForm.register("email")}
            />
            {emailForm.formState.errors.email ? (
              <p id="forgot-email-error" className="text-sm text-destructive" role="alert">
                {emailForm.formState.errors.email.message}
              </p>
            ) : null}
          </div>
          <Button type="submit" className="w-full" disabled={emailForm.formState.isSubmitting}>
            {emailForm.formState.isSubmitting ? "Enviando..." : "Enviar token de recuperação"}
          </Button>
        </form>
      ) : null}

      {step === 2 ? (
        <form className="space-y-4" onSubmit={resetForm.handleSubmit(confirmReset, onInvalidReset)} noValidate>
          {Object.keys(resetForm.formState.errors).length > 0 ? (
            <p className="rounded-xl border border-destructive/35 bg-destructive/10 px-3 py-2 text-sm text-destructive" role="alert">
              Revise token e senha para concluir a redefinição.
            </p>
          ) : null}

          {resetForm.formState.isSubmitting ? (
            <p className="rounded-xl border border-primary/25 bg-primary/10 px-3 py-2 text-sm" aria-live="polite">
              Salvando nova senha...
            </p>
          ) : null}

          <div className="space-y-2">
            <Label htmlFor="token">Token recebido por e-mail</Label>
            <Input
              id="token"
              placeholder="Ex: 123456"
              aria-invalid={Boolean(resetForm.formState.errors.token)}
              aria-describedby={resetForm.formState.errors.token ? "forgot-token-error" : undefined}
              {...resetForm.register("token")}
            />
            {resetForm.formState.errors.token ? (
              <p id="forgot-token-error" className="text-sm text-destructive" role="alert">
                {resetForm.formState.errors.token.message}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Nova senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="********"
              aria-invalid={Boolean(resetForm.formState.errors.password)}
              aria-describedby={resetForm.formState.errors.password ? "forgot-password-error" : undefined}
              {...resetForm.register("password")}
            />
            {resetForm.formState.errors.password ? (
              <p id="forgot-password-error" className="text-sm text-destructive" role="alert">
                {resetForm.formState.errors.password.message}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmar nova senha</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="********"
              aria-invalid={Boolean(resetForm.formState.errors.confirmPassword)}
              aria-describedby={resetForm.formState.errors.confirmPassword ? "forgot-confirm-password-error" : undefined}
              {...resetForm.register("confirmPassword")}
            />
            {resetForm.formState.errors.confirmPassword ? (
              <p id="forgot-confirm-password-error" className="text-sm text-destructive" role="alert">
                {resetForm.formState.errors.confirmPassword.message}
              </p>
            ) : null}
          </div>

          <div className="flex gap-2">
            <Button type="button" variant="outline" className="flex-1" onClick={() => setStep(1)}>
              Voltar para e-mail
            </Button>
            <Button type="submit" className="flex-1" disabled={resetForm.formState.isSubmitting}>
              {resetForm.formState.isSubmitting ? "Confirmando..." : "Salvar nova senha"}
            </Button>
          </div>
        </form>
      ) : null}

      {step === 3 ? (
        <div className="space-y-3" aria-live="polite">
          <p className="text-sm text-muted-foreground">A senha foi atualizada. Faça login para continuar de onde parou.</p>
          <Link href="/login">
            <Button className="w-full">Entrar na conta</Button>
          </Link>
        </div>
      ) : null}
    </AuthShell>
  );
}
