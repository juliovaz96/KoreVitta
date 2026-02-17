"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type AuditEvent = {
  id: string;
  actor: string;
  action: string;
  resource: string;
  at: string;
};

const mockAudit: AuditEvent[] = [
  { id: "aud_001", actor: "Dr. Lucas Almeida", action: "protocol.activated", resource: "proto_001", at: "2026-02-14T14:12:00.000Z" },
  { id: "aud_002", actor: "Ana Silva", action: "checkin.completed", resource: "chk_001", at: "2026-02-14T09:40:00.000Z" },
  { id: "aud_003", actor: "Sistema", action: "daily.tasks.generated", resource: "pat_001", at: "2026-02-14T00:05:00.000Z" },
];

export default function AuditTrailPage() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return mockAudit;
    const needle = search.toLowerCase();
    return mockAudit.filter((event) =>
      `${event.actor} ${event.action} ${event.resource}`.toLowerCase().includes(needle),
    );
  }, [search]);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <Badge variant="outline">PRO-21</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Trilha de auditoria</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Consulte eventos críticos de operação e conformidade.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Buscar por ator, ação ou recurso"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Eventos</CardTitle>
        </CardHeader>
        <CardContent>
          {filtered.length > 0 ? (
            <ul className="space-y-2 text-sm">
              {filtered.map((event) => (
                <li key={event.id} className="rounded-xl border border-border px-3 py-2">
                  <p className="font-medium">{event.action}</p>
                  <p className="text-xs text-muted-foreground">
                    {event.actor} • {event.resource} • {new Date(event.at).toLocaleString("pt-BR")}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">Ainda não há dados para exibir aqui.</p>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
