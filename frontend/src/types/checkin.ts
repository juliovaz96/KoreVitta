export type CheckinStatus = "scheduled" | "pending" | "completed" | "missed";

export type CheckinSummary = {
  id: string;
  status: CheckinStatus;
  scheduledAt: string;
  completedAt?: string;
  adherenceNutrition?: number;
  adherenceTraining?: number;
};

export type PendingCheckin = {
  id: string;
  patientId: string;
  patientName: string;
  scheduledAt: string;
};
