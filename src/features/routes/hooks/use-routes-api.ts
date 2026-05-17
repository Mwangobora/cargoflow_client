import { useMutation, useQuery } from "@tanstack/react-query";

import { routeApi } from "@/src/apis/route.api";
import { queryKeys } from "@/src/lib/query-keys";
import type { CreateRoutePayload, RouteListParams, UpdateRoutePayload } from "@/src/types/route";

export function useListRoutes(params?: RouteListParams) {
  return useQuery({ queryKey: queryKeys.operations.routes(params), queryFn: () => routeApi.list(params) });
}

export function useRouteDetails(id: string, enabled = true) {
  return useQuery({ queryKey: ["routes", "detail", id], queryFn: () => routeApi.getById(id), enabled });
}

export function useCreateRoute() {
  return useMutation({ mutationFn: (payload: CreateRoutePayload) => routeApi.create(payload) });
}

export function useUpdateRoute() {
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdateRoutePayload }) => routeApi.update(id, payload),
  });
}
