export type PatientStatus = "active" | "at_risk" | "paused" | "inactive";

export type PatientSummary = {
  id: string;
  name: string;
  status: PatientStatus;
  riskScore: number;
  primaryGoal: string;
  activeProtocolName?: string;
  nextCheckinLabel?: string;
  tags: string[];
};

export type PatientTimelineEvent = {
  id: string;
  type: "checkin" | "protocol" | "message";
  title: string;
  occurredAt: string;
};

export type PatientDetails = {
  id: string;
  name: string;
  status: PatientStatus;
  riskScore: number;
  primaryGoal: string;
  startedAt: string;
  nextCheckinAt?: string;
  activeProtocolName?: string;
  timeline: PatientTimelineEvent[];
};

export type PatientsFilters = {
  search?: string;
  status?: PatientStatus;
  sort?: "risk_desc" | "name_asc" | "checkin_asc";
};
