"use client";

import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { FieldErrors } from "react-hook-form";
import { AuthShell } from "@/components/auth/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorState, SuccessState } from "@/components/shared/data-states";

const inviteSchema = z
  .object({
    name: z.string().min(3, "Informe seu nome completo"),
    email: z.email("Informe um e-mail válido"),
    password: z.string().min(8, "Senha deve ter no mínimo 8 caracteres"),
    confirmPassword: z.string().min(8, "Confirmação inválida"),
  })
  .refine((values) => values.password === values.confirmPassword, {
    error: "As senhas não conferem",
    path: ["confirmPassword"],
  });

type InviteInput = z.infer<typeof inviteSchema>;

export default function PatientInvitePage() {
  const params = useParams<{ token: string }>();
  const token = params.token;
  const [accepted, setAccepted] = useState(false);

  const form = useForm<InviteInput>({
    resolver: zodResolver(inviteSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onInvalid = (errors: FieldErrors<InviteInput>) => {
    const firstField = Object.keys(errors)[0] as keyof InviteInput | undefined;
    if (firstField) form.setFocus(firstField);
  };

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setAccepted(true);
  };

  if (!token || token.length < 6) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-10">
        <ErrorState description="Token de convite inválido ou expirado." />
      </main>
    );
  }

  return (
    <AuthShell
      title="Aceitar convite"
      subtitle="Crie sua conta para acessar seu plano e acompanhar sua evolução"
    >
      <div className="mb-4 rounded-xl border border-border/70 bg-muted/40 p-3 text-xs text-muted-foreground">
        Etapa única: confirme seus dados para ativar o acesso do paciente. Código do convite: {token}
      </div>

      {accepted ? (
        <>
          <SuccessState message="Convite aceito com sucesso. Sua conta já está vinculada ao profissional." />
          <Link href="/home" className="mt-4 inline-flex w-full">
            <Button className="w-full">Acessar área do paciente</Button>
          </Link>
        </>
      ) : (
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit, onInvalid)} noValidate>
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input id="name" {...form.register("name")} />
            {form.formState.errors.name ? <p className="text-sm text-destructive">{form.formState.errors.name.message}</p> : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" {...form.register("email")} />
            {form.formState.errors.email ? <p className="text-sm text-destructive">{form.formState.errors.email.message}</p> : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" {...form.register("password")} />
            {form.formState.errors.password ? <p className="text-sm text-destructive">{form.formState.errors.password.message}</p> : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmar senha</Label>
            <Input id="confirmPassword" type="password" {...form.register("confirmPassword")} />
            {form.formState.errors.confirmPassword ? <p className="text-sm text-destructive">{form.formState.errors.confirmPassword.message}</p> : null}
          </div>

          <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Confirmando acesso..." : "Confirmar dados e entrar"}
          </Button>
        </form>
      )}
    </AuthShell>
  );
}
