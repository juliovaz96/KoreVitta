"use client";

import { useCallback } from "react";
import { apiClient } from "@/lib/api";
import { useResource } from "@/hooks/use-resource";

export function useThreads() {
  const loader = useCallback(() => apiClient.listThreads(), []);
  return useResource(loader, ["threads"], { staleTime: 15_000 });
}

export function useMessages(threadId: string) {
  const loader = useCallback(() => apiClient.listMessages(threadId), [threadId]);
  return useResource(loader, ["thread-messages", threadId], {
    enabled: Boolean(threadId),
    staleTime: 5_000,
  });
}
