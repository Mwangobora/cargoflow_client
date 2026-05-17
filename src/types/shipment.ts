import type { ListParams } from "@/src/types/api";

export type Shipment = {
  id: string;
  receipt_number: string;
  sender_name: string;
  receiver_name: string;
  route_info: string;
  status: string;
  charged_amount: number;
  created_at: string;
};

export type ShipmentListParams = ListParams & {
  status?: string;
  route_id?: string;
  origin_branch_id?: string;
  destination_branch_id?: string;
  created_from?: string;
  created_to?: string;
  is_active?: boolean;
};

export type CreateShipmentPayload = {
  sender_customer_id: string;
  receiver_customer_id: string;
  route_id: string;
  cargo_description: string;
  weight_kg?: number;
  size_category?: string;
  declared_value_tzs?: number;
};

export type UpdateShipmentPayload = Partial<{
  cargo_description: string;
  weight_kg: number;
  size_category: string;
  declared_value_tzs: number;
  special_instructions: string;
  expected_delivery_date: string;
  notes: string;
}>;
