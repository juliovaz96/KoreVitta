"use client";

import { useState } from "react";
import { useAuthUser, useProfessionalProfile } from "@/hooks/use-auth";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorState, LoadingState, SuccessState } from "@/components/shared/data-states";

export default function SettingsProfilePage() {
  const user = useAuthUser();
  const profile = useProfessionalProfile();
  const [saved, setSaved] = useState(false);

  if (user.loading || profile.loading) return <LoadingState label="Carregamento do perfil" />;
  if (user.error || profile.error || !user.data || !profile.data) {
    return (
      <ErrorState
        description="Não foi possível concluir a ação. Tente novamente."
        onRetry={() => {
          void user.reload();
          void profile.reload();
        }}
      />
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <Badge variant="outline">SETTINGS</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Configurações de perfil</h1>
      </header>

      {saved ? <SuccessState message="Ação concluída com sucesso." /> : null}

      <Card>
        <CardHeader><CardTitle>Dados profissionais</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-xl border border-border bg-muted/40 p-3 text-xs text-muted-foreground">
            Atualize dados de identificação e registro profissional para manter sua conta em conformidade.
          </div>
          <div className="space-y-2"><Label htmlFor="name">Nome</Label><Input id="name" defaultValue={user.data.name} /></div>
          <div className="space-y-2"><Label htmlFor="email">E-mail</Label><Input id="email" defaultValue={user.data.email} /></div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2"><Label htmlFor="profession">Profissão</Label><Input id="profession" defaultValue={profile.data.profession} /></div>
            <div className="space-y-2"><Label htmlFor="licenseType">Tipo de registro</Label><Input id="licenseType" defaultValue={profile.data.licenseType} /></div>
            <div className="space-y-2"><Label htmlFor="licenseNumber">Número</Label><Input id="licenseNumber" defaultValue={profile.data.licenseNumber} /></div>
          </div>
          <Button onClick={async () => { await new Promise((resolve) => setTimeout(resolve, 300)); setSaved(true); }}>
            Salvar perfil
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
