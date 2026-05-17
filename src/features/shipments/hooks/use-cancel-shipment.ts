import { useDeleteShipment } from "@/src/features/shipments/hooks/use-delete-shipment";

export function useCancelShipment() {
  return useDeleteShipment();
}
