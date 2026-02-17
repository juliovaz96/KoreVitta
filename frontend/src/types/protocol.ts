export type ProtocolModuleType = "nutrition" | "training" | "supplementation" | "hydration";

export type ProtocolSummary = {
  id: string;
  name: string;
  version: number;
  status: "draft" | "active" | "archived";
  modules: ProtocolModuleType[];
  startsAt: string;
  endsAt?: string;
};

export type TemplateSummary = {
  id: string;
  name: string;
  tags: string[];
  usageCount: number;
  updatedAt: string;
};
