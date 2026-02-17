import { mockAnalyticsDashboard } from "@/lib/fixtures/analytics";
import { mockAuthUser, mockProfessionalProfile } from "@/lib/fixtures/auth";
import { mockCheckinsByPatient, mockPendingReview } from "@/lib/fixtures/checkins";
import { mockMessagesByThread, mockThreads } from "@/lib/fixtures/communication";
import { mockPatients, mockPatientDetails } from "@/lib/fixtures/patients";
import { mockProtocols, mockTemplates } from "@/lib/fixtures/protocols";
import { mockTodayView } from "@/lib/fixtures/today";
import { ApiError, type ProblemDetails } from "@/types/api";
import type { AnalyticsDashboard } from "@/types/analytics";
import type { AuthUser, ProfessionalProfile } from "@/types/auth";
import type { CheckinSummary, PendingCheckin } from "@/types/checkin";
import type { MessageItem, ThreadSummary } from "@/types/communication";
import type { PatientDetails, PatientsFilters, PatientSummary } from "@/types/patient";
import type { ProtocolSummary, TemplateSummary } from "@/types/protocol";
import type { TodayView } from "@/types/today";

export type DataSource = "mock" | "http";

function getDataSource(): DataSource {
  return process.env.NEXT_PUBLIC_DATA_SOURCE === "http" ? "http" : "mock";
}

async function simulateLatency(minMs = 180, maxMs = 560): Promise<void> {
  const timeout = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
  await new Promise((resolve) => setTimeout(resolve, timeout));
}

function notFound(detail: string): never {
  throw new ApiError({
    type: "https://api.korevitta.com/errors/not-found",
    title: "Not Found",
    status: 404,
    detail,
  });
}

type FrontendDataClient = {
  getMe(): Promise<AuthUser>;
  getProfessionalProfile(): Promise<ProfessionalProfile>;
  getAnalyticsDashboard(): Promise<AnalyticsDashboard>;
  listPatients(filters?: PatientsFilters): Promise<PatientSummary[]>;
  getPatientById(patientId: string): Promise<PatientDetails>;
  listPatientCheckins(patientId: string): Promise<CheckinSummary[]>;
  listPendingReview(): Promise<PendingCheckin[]>;
  listProtocols(patientId: string): Promise<ProtocolSummary[]>;
  listTemplates(): Promise<TemplateSummary[]>;
  getToday(): Promise<TodayView>;
  listThreads(): Promise<ThreadSummary[]>;
  listMessages(threadId: string): Promise<MessageItem[]>;
};

const mockClient: FrontendDataClient = {
  async getMe() {
    await simulateLatency();
    return mockAuthUser;
  },

  async getProfessionalProfile() {
    await simulateLatency();
    return mockProfessionalProfile;
  },

  async getAnalyticsDashboard() {
    await simulateLatency();
    return mockAnalyticsDashboard;
  },

  async listPatients(filters) {
    await simulateLatency();
    let result = [...mockPatients];

    if (filters?.search) {
      const needle = filters.search.toLowerCase();
      result = result.filter((patient) => patient.name.toLowerCase().includes(needle));
    }

    if (filters?.status) {
      result = result.filter((patient) => patient.status === filters.status);
    }

    if (filters?.sort === "risk_desc") {
      result.sort((a, b) => b.riskScore - a.riskScore);
    }
    if (filters?.sort === "name_asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  },

  async getPatientById(patientId) {
    await simulateLatency();
    const patient = mockPatientDetails[patientId];
    if (!patient) notFound("Paciente não encontrado");
    return patient;
  },

  async listPatientCheckins(patientId) {
    await simulateLatency();
    return mockCheckinsByPatient[patientId] ?? [];
  },

  async listPendingReview() {
    await simulateLatency();
    return mockPendingReview;
  },

  async listProtocols() {
    await simulateLatency();
    return mockProtocols;
  },

  async listTemplates() {
    await simulateLatency();
    return mockTemplates;
  },

  async getToday() {
    await simulateLatency();
    return mockTodayView;
  },

  async listThreads() {
    await simulateLatency();
    return mockThreads;
  },

  async listMessages(threadId) {
    await simulateLatency();
    return mockMessagesByThread[threadId] ?? [];
  },
};

async function fetchJson<T>(path: string, init?: RequestInit): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
  const response = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  if (!response.ok) {
    let problem: ProblemDetails;
    try {
      problem = (await response.json()) as ProblemDetails;
    } catch {
      problem = {
        type: "https://api.korevitta.com/errors/unexpected",
        title: "Unexpected Error",
        status: response.status,
        detail: "Erro inesperado ao comunicar com a API",
      };
    }

    throw new ApiError(problem);
  }

  const payload = (await response.json()) as { data: T };
  return payload.data;
}

const httpClient: FrontendDataClient = {
  getMe: () => fetchJson<AuthUser>("/v1/auth/me/"),
  getProfessionalProfile: () => fetchJson<ProfessionalProfile>("/v1/professional/profile/"),
  getAnalyticsDashboard: () => fetchJson<AnalyticsDashboard>("/v1/analytics/dashboard"),
  listPatients: (filters) => {
    const query = new URLSearchParams();
    if (filters?.search) query.set("search", filters.search);
    if (filters?.status) query.set("status", filters.status);
    const suffix = query.toString() ? `?${query.toString()}` : "";
    return fetchJson<PatientSummary[]>(`/v1/patients/${suffix}`);
  },
  getPatientById: (patientId) => fetchJson<PatientDetails>(`/v1/patients/${patientId}/`),
  listPatientCheckins: (patientId) => fetchJson<CheckinSummary[]>(`/v1/patients/${patientId}/checkins/`),
  listPendingReview: () => fetchJson<PendingCheckin[]>("/v1/checkins/pending-review/"),
  listProtocols: (patientId) => fetchJson<ProtocolSummary[]>(`/v1/patients/${patientId}/protocols/`),
  listTemplates: () => fetchJson<TemplateSummary[]>("/v1/templates/"),
  getToday: () => fetchJson<TodayView>("/v1/me/today/"),
  listThreads: () => fetchJson<ThreadSummary[]>("/v1/threads/"),
  listMessages: (threadId) => fetchJson<MessageItem[]>(`/v1/threads/${threadId}/messages/`),
};

export const apiClient: FrontendDataClient = getDataSource() === "http" ? httpClient : mockClient;
