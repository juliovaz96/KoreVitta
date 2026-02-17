import { ProfessionalShell } from "@/components/layout/professional-shell";
import { RoleGate } from "@/components/auth/role-gate";

export default function ProfessionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProfessionalShell>
      <RoleGate allowedRoles={["professional", "admin"]} fallbackHref="/home" fallbackLabel="Ir para área do paciente">
        {children}
      </RoleGate>
    </ProfessionalShell>
  );
}
