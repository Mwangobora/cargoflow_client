import { useMutation, useQueryClient } from "@tanstack/react-query";

import { shipmentApi } from "@/src/apis/shipment.api";
import { queryKeys } from "@/src/lib/query-keys";
import type { UpdateShipmentPayload } from "@/src/types/shipment";

export function useUpdateShipment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdateShipmentPayload }) => shipmentApi.update(id, payload),
    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: queryKeys.shipments.all }),
        queryClient.invalidateQueries({ queryKey: queryKeys.shipments.detail(variables.id) }),
      ]);
    },
  });
}
