"use client";

import { useCallback } from "react";
import { apiClient } from "@/lib/api";
import { useResource } from "@/hooks/use-resource";

export function usePatientProtocols(patientId: string) {
  const loader = useCallback(() => apiClient.listProtocols(patientId), [patientId]);
  return useResource(loader, ["patient-protocols", patientId], {
    enabled: Boolean(patientId),
    staleTime: 60_000,
  });
}

export function useTemplates() {
  const loader = useCallback(() => apiClient.listTemplates(), []);
  return useResource(loader, ["protocol-templates"], { staleTime: 5 * 60_000 });
}
