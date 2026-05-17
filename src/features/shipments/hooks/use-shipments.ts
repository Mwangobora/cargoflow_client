import { useQuery } from "@tanstack/react-query";

import { shipmentApi } from "@/src/apis/shipment.api";
import { queryKeys } from "@/src/lib/query-keys";
import type { ShipmentListParams } from "@/src/types/shipment";

export function useShipments(params?: ShipmentListParams) {
  return useQuery({
    queryKey: queryKeys.shipments.list(params),
    queryFn: () => shipmentApi.list(params),
  });
}
