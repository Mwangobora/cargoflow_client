import type { ListParams } from "@/src/types/api";

export type Trip = {
  id: string;
  route_info: string;
  vehicle_info: string;
  driver_info: string;
  branch_info: string;
  status: string;
  departure_at: string | null;
  arrived_at: string | null;
  total_shipments_count: number;
  created_at: string;
};

export type TripShipment = {
  id: string;
  shipment_receipt_number: string;
  shipment_sender: string;
  shipment_receiver: string;
  shipment_status: string;
  loaded_at: string;
};

export type TripListParams = ListParams & {
  status?: string;
  route_id?: string;
  vehicle_id?: string;
  driver_id?: string;
  branch_id?: string;
  departure_from?: string;
  departure_to?: string;
};

export type CreateTripPayload = {
  route_id: string;
  vehicle_id: string;
  driver_id: string;
  branch_id?: string;
  notes?: string;
};

export type UpdateTripPayload = Partial<{ notes: string; branch_id: string; vehicle_id: string }>;
