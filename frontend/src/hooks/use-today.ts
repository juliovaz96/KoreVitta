"use client";

import { useCallback } from "react";
import { apiClient } from "@/lib/api";
import { useResource } from "@/hooks/use-resource";

export function useToday() {
  const loader = useCallback(() => apiClient.getToday(), []);
  return useResource(loader, ["patient-today"], { staleTime: 20_000 });
}
