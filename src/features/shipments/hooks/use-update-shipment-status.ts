import { useMutation, useQueryClient } from "@tanstack/react-query";

import { shipmentApi } from "@/src/apis/shipment.api";
import { queryKeys } from "@/src/lib/query-keys";

export function useUpdateShipmentStatus() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) => shipmentApi.updateStatus(id, status),
    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: queryKeys.shipments.all }),
        queryClient.invalidateQueries({ queryKey: queryKeys.shipments.detail(variables.id) }),
      ]);
    },
  });
}
