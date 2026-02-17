export type DashboardKpi = {
  activePatients: number;
  atRiskPatients: number;
  pendingReviews: number;
  adherence7dPct: number;
};

export type PatientRiskRank = {
  patientId: string;
  patientName: string;
  riskScore: number;
};

export type AnalyticsDashboard = {
  kpi: DashboardKpi;
  topRisk: PatientRiskRank[];
};
