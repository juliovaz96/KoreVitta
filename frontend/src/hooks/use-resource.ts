"use client";
import { useQuery } from "@tanstack/react-query";

type DependencyKey = string | readonly unknown[];

type UseResourceOptions<TData, TSelected> = {
  enabled?: boolean;
  staleTime?: number;
  gcTime?: number;
  keepPreviousData?: boolean;
  select?: (data: TData) => TSelected;
};

function normalizeDependencyKey(dependencyKey: DependencyKey): readonly unknown[] {
  return Array.isArray(dependencyKey) ? dependencyKey : [dependencyKey];
}

export function useResource<TData, TSelected = TData>(
  loader: () => Promise<TData>,
  dependencyKey: DependencyKey = "default",
  options?: UseResourceOptions<TData, TSelected>,
) {
  const normalizedKey = normalizeDependencyKey(dependencyKey);

  const query = useQuery({
    queryKey: ["resource", ...normalizedKey],
    queryFn: loader,
    enabled: options?.enabled ?? true,
    staleTime: options?.staleTime,
    gcTime: options?.gcTime,
    select: options?.select,
    placeholderData: options?.keepPreviousData ? (previousData) => previousData : undefined,
  });

  return {
    data: query.data ?? null,
    loading: query.isPending,
    refreshing: query.isFetching && !query.isPending,
    error: query.error ? (query.error instanceof Error ? query.error.message : "Erro desconhecido") : null,
    reload: query.refetch,
  };
}
