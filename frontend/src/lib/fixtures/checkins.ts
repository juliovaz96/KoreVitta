import type { CheckinSummary, PendingCheckin } from "@/types/checkin";

export const mockCheckinsByPatient: Record<string, CheckinSummary[]> = {
  pat_001: [
    {
      id: "chk_001",
      status: "completed",
      scheduledAt: "2026-02-10T08:00:00.000Z",
      completedAt: "2026-02-10T08:30:00.000Z",
      adherenceNutrition: 4,
      adherenceTraining: 4,
    },
    {
      id: "chk_002",
      status: "pending",
      scheduledAt: "2026-02-17T08:00:00.000Z",
    },
  ],
};

export const mockPendingReview: PendingCheckin[] = [
  {
    id: "chk_010",
    patientId: "pat_002",
    patientName: "Bruno Costa",
    scheduledAt: "2026-02-13T08:00:00.000Z",
  },
];
