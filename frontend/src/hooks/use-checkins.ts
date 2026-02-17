"use client";

import { useCallback } from "react";
import { apiClient } from "@/lib/api";
import { useResource } from "@/hooks/use-resource";

export function usePatientCheckins(patientId: string) {
  const loader = useCallback(() => apiClient.listPatientCheckins(patientId), [patientId]);
  return useResource(loader, ["patient-checkins", patientId], {
    enabled: Boolean(patientId),
    staleTime: 20_000,
  });
}

export function usePendingReview() {
  const loader = useCallback(() => apiClient.listPendingReview(), []);
  return useResource(loader, ["pending-review"], { staleTime: 20_000 });
}
