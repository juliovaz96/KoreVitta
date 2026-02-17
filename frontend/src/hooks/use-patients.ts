"use client";

import { useCallback } from "react";
import { apiClient } from "@/lib/api";
import { useResource } from "@/hooks/use-resource";
import type { PatientsFilters } from "@/types/patient";

export function usePatients(filters?: PatientsFilters) {
  const loader = useCallback(() => apiClient.listPatients(filters), [filters]);
  return useResource(loader, ["patients", filters?.search ?? "", filters?.status ?? "", filters?.sort ?? ""], {
    staleTime: 60_000,
    keepPreviousData: true,
  });
}

export function usePatientDetails(patientId: string) {
  const loader = useCallback(() => apiClient.getPatientById(patientId), [patientId]);
  return useResource(loader, ["patient-details", patientId], {
    enabled: Boolean(patientId),
    staleTime: 60_000,
  });
}
