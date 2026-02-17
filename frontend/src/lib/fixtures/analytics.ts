import type { AnalyticsDashboard } from "@/types/analytics";

export const mockAnalyticsDashboard: AnalyticsDashboard = {
  kpi: {
    activePatients: 42,
    atRiskPatients: 9,
    pendingReviews: 6,
    adherence7dPct: 74,
  },
  topRisk: [
    { patientId: "pat_002", patientName: "Bruno Costa", riskScore: 68 },
    { patientId: "pat_010", patientName: "Diego Lima", riskScore: 63 },
    { patientId: "pat_014", patientName: "Juliana Alves", riskScore: 58 },
  ],
};
