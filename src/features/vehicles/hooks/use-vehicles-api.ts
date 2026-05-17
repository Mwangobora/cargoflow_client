import { useMutation, useQuery } from "@tanstack/react-query";

import { vehicleApi } from "@/src/apis/vehicle.api";
import { queryKeys } from "@/src/lib/query-keys";
import type { CreateVehiclePayload, UpdateVehiclePayload, VehicleListParams } from "@/src/types/vehicle";

export function useListVehicles(params?: VehicleListParams) {
  return useQuery({ queryKey: queryKeys.operations.vehicles(params), queryFn: () => vehicleApi.list(params) });
}

export function useVehicleDetails(id: string, enabled = true) {
  return useQuery({ queryKey: ["vehicles", "detail", id], queryFn: () => vehicleApi.getById(id), enabled });
}

export function useCreateVehicle() {
  return useMutation({ mutationFn: (payload: CreateVehiclePayload) => vehicleApi.create(payload) });
}

export function useUpdateVehicle() {
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdateVehiclePayload }) => vehicleApi.update(id, payload),
  });
}
