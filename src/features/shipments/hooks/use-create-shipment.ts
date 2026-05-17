import { useMutation, useQueryClient } from "@tanstack/react-query";

import { shipmentApi } from "@/src/apis/shipment.api";
import { queryKeys } from "@/src/lib/query-keys";
import type { CreateShipmentPayload } from "@/src/types/shipment";

export function useCreateShipment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateShipmentPayload) => shipmentApi.create(payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: queryKeys.shipments.all });
    },
  });
}
