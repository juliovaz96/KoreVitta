import { PatientShell } from "@/components/layout/patient-shell";
import { RoleGate } from "@/components/auth/role-gate";

export default function PatientLayout({ children }: { children: React.ReactNode }) {
  return (
    <PatientShell>
      <RoleGate allowedRoles={["patient", "admin"]} fallbackHref="/dashboard" fallbackLabel="Ir para área profissional">
        {children}
      </RoleGate>
    </PatientShell>
  );
}
