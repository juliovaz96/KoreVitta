import type { PatientDetails, PatientSummary } from "@/types/patient";

export const mockPatients: PatientSummary[] = [
  {
    id: "pat_001",
    name: "Ana Silva",
    status: "active",
    riskScore: 12,
    primaryGoal: "Perder 8kg",
    activeProtocolName: "Cutting 12 semanas",
    nextCheckinLabel: "em 2 dias",
    tags: ["cutting", "consistente"],
  },
  {
    id: "pat_002",
    name: "Bruno Costa",
    status: "at_risk",
    riskScore: 68,
    primaryGoal: "Recomposição corporal",
    activeProtocolName: "Recomp 8 semanas",
    nextCheckinLabel: "atrasado",
    tags: ["alto-risco"],
  },
  {
    id: "pat_003",
    name: "Carla Souza",
    status: "active",
    riskScore: 5,
    primaryGoal: "Manutenção",
    activeProtocolName: "Lifestyle",
    nextCheckinLabel: "em 5 dias",
    tags: ["manutenção"],
  },
];

export const mockPatientDetails: Record<string, PatientDetails> = {
  pat_001: {
    id: "pat_001",
    name: "Ana Silva",
    status: "active",
    riskScore: 12,
    primaryGoal: "Perder 8kg",
    startedAt: "2026-01-06T10:00:00.000Z",
    nextCheckinAt: "2026-02-17T10:00:00.000Z",
    activeProtocolName: "Cutting 12 semanas",
    timeline: [
      {
        id: "evt_001",
        type: "checkin",
        title: "Check-in concluído",
        occurredAt: "2026-02-10T08:30:00.000Z",
      },
      {
        id: "evt_002",
        type: "protocol",
        title: "Protocolo atualizado para v3",
        occurredAt: "2026-02-08T16:45:00.000Z",
      },
      {
        id: "evt_003",
        type: "message",
        title: "Mensagem enviada pelo paciente",
        occurredAt: "2026-02-08T12:20:00.000Z",
      },
    ],
  },
};
