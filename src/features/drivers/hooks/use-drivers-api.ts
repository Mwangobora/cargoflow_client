import { useMutation, useQuery } from "@tanstack/react-query";

import { driverApi } from "@/src/apis/driver.api";
import { queryKeys } from "@/src/lib/query-keys";
import type { CreateDriverPayload, DriverListParams, UpdateDriverPayload } from "@/src/types/driver";

export function useListDrivers(params?: DriverListParams) {
  return useQuery({ queryKey: queryKeys.operations.drivers(params), queryFn: () => driverApi.list(params) });
}

export function useDriverDetails(id: string, enabled = true) {
  return useQuery({ queryKey: ["drivers", "detail", id], queryFn: () => driverApi.getById(id), enabled });
}

export function useCreateDriver() {
  return useMutation({ mutationFn: (payload: CreateDriverPayload) => driverApi.create(payload) });
}

export function useUpdateDriver() {
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdateDriverPayload }) => driverApi.update(id, payload),
  });
}
