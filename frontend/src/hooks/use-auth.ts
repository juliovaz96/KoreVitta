"use client";

import { useCallback } from "react";
import { apiClient } from "@/lib/api";
import { useResource } from "@/hooks/use-resource";

export function useAuthUser() {
  const loader = useCallback(() => apiClient.getMe(), []);
  return useResource(loader, ["auth-user"], { staleTime: 5 * 60_000 });
}

export function useProfessionalProfile() {
  const loader = useCallback(() => apiClient.getProfessionalProfile(), []);
  return useResource(loader, ["professional-profile"], { staleTime: 5 * 60_000 });
}
