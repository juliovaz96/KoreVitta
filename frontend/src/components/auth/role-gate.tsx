"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PermissionState } from "@/components/shared/data-states";
import { Button } from "@/components/ui/button";
import { ROLE_STORAGE_KEY } from "@/lib/mock-auth";

type UserRole = "professional" | "patient" | "admin";

function safeGetRole(): UserRole | null {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(ROLE_STORAGE_KEY);
  if (value === "professional" || value === "patient" || value === "admin") return value;
  return null;
}

function safeSetRole(role: UserRole) {
  if (typeof window === "undefined") return;
  localStorage.setItem(ROLE_STORAGE_KEY, role);
}

export function RoleGate({
  allowedRoles,
  fallbackHref,
  fallbackLabel,
  children,
}: {
  allowedRoles: UserRole[];
  fallbackHref: string;
  fallbackLabel: string;
  children: React.ReactNode;
}) {
  const [role, setRole] = useState<UserRole>(() => safeGetRole() ?? allowedRoles[0]);

  const primaryAllowedRole = allowedRoles[0];

  const persistedRole = safeGetRole();
  if (!persistedRole) {
    safeSetRole(role);
  }

  const hasPermission = useMemo(() => {
    return allowedRoles.includes(role);
  }, [allowedRoles, role]);

  if (!hasPermission) {
    return (
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 py-2">
        <PermissionState
          title="Acesso restrito"
          description="Seu perfil atual não possui acesso a esta área."
          ctaLabel="Usar perfil desta área"
          onCta={() => {
            safeSetRole(primaryAllowedRole);
            setRole(primaryAllowedRole);
          }}
        />
        <div className="kv-surface rounded-2xl p-5">
          <p className="text-sm text-muted-foreground">
            Você também pode retornar para a área compatível com seu perfil atual.
          </p>
          <Link href={fallbackHref} className="mt-4 inline-flex">
            <Button variant="outline">{fallbackLabel}</Button>
          </Link>
        </div>
      </main>
    );
  }

  return <>{children}</>;
}
