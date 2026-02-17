"use client";

import { useCallback } from "react";
import { apiClient } from "@/lib/api";
import { useResource } from "@/hooks/use-resource";

export function useAnalyticsDashboard() {
  const loader = useCallback(() => apiClient.getAnalyticsDashboard(), []);
  return useResource(loader, ["analytics-dashboard"], { staleTime: 30_000 });
}
