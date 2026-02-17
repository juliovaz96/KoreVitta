"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { usePatients } from "@/hooks/use-patients";
import { useDebouncedValue } from "@/hooks/use-debounced-value";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { EmptyState, ErrorState, LoadingState } from "@/components/shared/data-states";
import type { PatientStatus } from "@/types/patient";

export default function PatientsListPage() {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [status, setStatus] = useState<PatientStatus | "all">("all");
  const [sort, setSort] = useState<"risk_desc" | "name_asc">("risk_desc");
  const debouncedSearch = useDebouncedValue(searchInput, 300);

  const filters = useMemo(
    () => ({
      search: debouncedSearch.trim(),
      status: status === "all" ? undefined : status,
      sort,
    }),
    [debouncedSearch, status, sort],
  );

  const { data, loading, error, reload } = usePatients(filters);

  const hasActiveFilters = Boolean(debouncedSearch.trim()) || status !== "all" || sort !== "risk_desc";

  const totalPatients = data?.length ?? 0;
  const atRiskPatients = data?.filter((patient) => patient.status === "at_risk").length ?? 0;
  const activePatients = data?.filter((patient) => patient.status === "active").length ?? 0;

  const toStatusVariant = (patientStatus: PatientStatus) => {
    if (patientStatus === "active") return "success" as const;
    if (patientStatus === "at_risk") return "danger" as const;
    if (patientStatus === "paused") return "warning" as const;
    return "outline" as const;
  };

  if (loading) {
    return <LoadingState label="Carregando pacientes" />;
  }

  if (error) {
    return (
      <ErrorState
        description="Não foi possível carregar a lista de pacientes."
        onRetry={() => {
          void reload();
        }}
      />
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-5">
      <header className="kv-surface rounded-2xl p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="kv-pill inline-flex">PRO-02</p>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight">Pacientes</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Acompanhe status, risco e próximos check-ins em uma única visão.
            </p>
          </div>
          <Link href="/patients/new">
            <Button>Criar e enviar convite</Button>
          </Link>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>{totalPatients}</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 text-sm text-muted-foreground">Pacientes visíveis</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{activePatients}</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 text-sm text-muted-foreground">Em acompanhamento</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{atRiskPatients}</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 text-sm text-muted-foreground">Em risco</CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="mb-3 flex flex-wrap gap-2">
            <Button variant={status === "at_risk" ? "secondary" : "outline"} size="sm" onClick={() => setStatus("at_risk")}>Em risco</Button>
            <Button variant={status === "paused" ? "secondary" : "outline"} size="sm" onClick={() => setStatus("paused")}>Atrasados</Button>
            <Button variant={status === "all" ? "secondary" : "outline"} size="sm" onClick={() => setStatus("all")}>Todos</Button>
          </div>
          <div className="grid gap-3 md:grid-cols-[1.4fr_1fr_1fr_auto_auto]">
            <Input
              aria-label="Buscar paciente"
              placeholder="Buscar por nome"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
            />

            <select
              className="h-10 rounded-xl border border-input bg-background px-3 text-sm"
              value={status}
              onChange={(event) => setStatus(event.target.value as PatientStatus | "all")}
            >
              <option value="all">Todos os status</option>
              <option value="active">Ativo</option>
              <option value="at_risk">Em risco</option>
              <option value="paused">Pausado</option>
              <option value="inactive">Inativo</option>
            </select>

            <select
              className="h-10 rounded-xl border border-input bg-background px-3 text-sm"
              value={sort}
              onChange={(event) => setSort(event.target.value as "risk_desc" | "name_asc")}
            >
              <option value="risk_desc">Risco (maior primeiro)</option>
              <option value="name_asc">Nome (A-Z)</option>
            </select>

            <Button
              variant="ghost"
              onClick={() => {
                setSearchInput("");
                setStatus("all");
                setSort("risk_desc");
              }}
            >
              Limpar
            </Button>

            <Button variant="outline" onClick={() => { void reload(); }}>
              Atualizar
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pacientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
            <p>
              {totalPatients} {totalPatients === 1 ? "resultado" : "resultados"}
              {hasActiveFilters ? " com filtros ativos" : " sem filtros ativos"}
            </p>
            {hasActiveFilters ? (
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  setSearchInput("");
                  setStatus("all");
                  setSort("risk_desc");
                }}
              >
                Limpar filtros ativos
              </Button>
            ) : null}
          </div>

          {data && data.length > 0 ? (
            <div className="kv-table-wrap">
              <table className="kv-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Status</th>
                    <th>Risco</th>
                    <th>Protocolo</th>
                    <th>Próx. Check-in</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((patient) => (
                    <tr key={patient.id}>
                      <td className="font-medium">{patient.name}</td>
                      <td>
                        <Badge variant={toStatusVariant(patient.status)} className="capitalize">{patient.status.replace("_", " ")}</Badge>
                      </td>
                      <td className="font-medium">{patient.riskScore}</td>
                      <td>{patient.activeProtocolName ?? "—"}</td>
                      <td>{patient.nextCheckinLabel ?? "—"}</td>
                      <td>
                        <div className="flex gap-2">
                          <Link href={`/patients/${patient.id}`}>
                            <Button size="sm">
                              Ver paciente
                            </Button>
                          </Link>
                          <Link href={`/patients/${patient.id}/messages`}>
                            <Button size="sm" variant="ghost">
                              Mensagens
                            </Button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <EmptyState
              title={hasActiveFilters ? "Nenhum paciente encontrado" : "Sem dados"}
              description={hasActiveFilters ? "Ajuste os filtros para ampliar os resultados." : "Ainda não há dados para exibir aqui."}
              ctaLabel={hasActiveFilters ? "Limpar filtros" : "Criar e enviar convite"}
              onCta={() => {
                if (hasActiveFilters) {
                  setSearchInput("");
                  setStatus("all");
                  setSort("risk_desc");
                  return;
                }
                router.push("/patients/new");
              }}
            />
          )}
        </CardContent>
      </Card>
    </main>
  );
}
