import { useMutation, useQueryClient } from "@tanstack/react-query";

import { shipmentApi } from "@/src/apis/shipment.api";
import { queryKeys } from "@/src/lib/query-keys";

export function useDeleteShipment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => shipmentApi.remove(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: queryKeys.shipments.all });
    },
  });
}
