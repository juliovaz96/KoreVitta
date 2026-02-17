import type { ProtocolSummary, TemplateSummary } from "@/types/protocol";

export const mockProtocols: ProtocolSummary[] = [
  {
    id: "proto_001",
    name: "Cutting 12 semanas",
    version: 3,
    status: "active",
    modules: ["nutrition", "training"],
    startsAt: "2026-01-10",
    endsAt: "2026-04-05",
  },
];

export const mockTemplates: TemplateSummary[] = [
  {
    id: "tpl_001",
    name: "Cutting Base 12s",
    tags: ["cutting", "iniciante"],
    usageCount: 8,
    updatedAt: "2026-02-11T11:30:00.000Z",
  },
  {
    id: "tpl_002",
    name: "Recomp 8s",
    tags: ["recomp"],
    usageCount: 5,
    updatedAt: "2026-02-09T09:10:00.000Z",
  },
];
