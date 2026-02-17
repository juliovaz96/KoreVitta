"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SuccessState } from "@/components/shared/data-states";

export default function SettingsBrandingPage() {
  const [brandName, setBrandName] = useState("Método Lucas");
  const [primaryColor, setPrimaryColor] = useState("#6C63FF");
  const [saved, setSaved] = useState(false);

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <Badge variant="outline">PRO-11</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Identidade visual</h1>
      </header>

      {saved ? <SuccessState message="Ação concluída com sucesso." /> : null}

      <Card>
        <CardHeader><CardTitle>Configuração da marca</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="brandName">Nome do método</Label>
            <Input id="brandName" value={brandName} onChange={(e) => setBrandName(e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="primaryColor">Cor primária</Label>
            <div className="flex gap-2">
              <Input id="primaryColor" value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} />
              <div className="h-10 w-10 rounded-xl border border-border" style={{ backgroundColor: primaryColor }} aria-label="Preview da cor" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="logo">Logo (URL)</Label>
            <Input id="logo" placeholder="https://..." />
          </div>

          <Button onClick={async () => { await new Promise((resolve) => setTimeout(resolve, 300)); setSaved(true); }}>
            Salvar identidade visual
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
