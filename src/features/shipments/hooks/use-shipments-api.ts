import { useMutation, useQuery } from "@tanstack/react-query";

import { shipmentApi } from "@/src/apis/shipment.api";
import { queryKeys } from "@/src/lib/query-keys";
import type { CreateShipmentPayload, ShipmentListParams, UpdateShipmentPayload } from "@/src/types/shipment";

export function useListShipments(params?: ShipmentListParams) {
  return useQuery({ queryKey: queryKeys.shipments.list(params), queryFn: () => shipmentApi.list(params) });
}

export function useShipmentDetails(id: string, enabled = true) {
  return useQuery({ queryKey: queryKeys.shipments.detail(id), queryFn: () => shipmentApi.getById(id), enabled });
}

export function useCreateShipment() {
  return useMutation({ mutationFn: (payload: CreateShipmentPayload) => shipmentApi.create(payload) });
}

export function useUpdateShipment() {
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdateShipmentPayload }) => shipmentApi.update(id, payload),
  });
}
