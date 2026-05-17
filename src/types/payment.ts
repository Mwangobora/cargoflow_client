import type { ListParams } from "@/src/types/api";

export type Payment = {
  id: string;
  payment_reference: string;
  shipment_receipt_number: string;
  sender_name: string;
  receiver_name: string;
  amount: number;
  payment_method: string;
  payment_status: string;
  branch_info: string;
  received_by_name: string;
  created_at: string;
};

export type PaymentListParams = ListParams & {
  payment_method?: string;
  payment_status?: string;
  shipment_id?: string;
  branch_id?: string;
  received_by?: string;
  created_from?: string;
  created_to?: string;
  amount_min?: number;
  amount_max?: number;
};

export type CreatePaymentPayload = {
  shipment_id: string;
  amount_tzs: number;
  payment_method: string;
  payment_reference?: string;
  payment_type?: string;
  notes?: string;
};

export type UpdatePaymentPayload = Partial<{
  payment_method: string;
  payment_reference: string;
  payment_type: string;
  notes: string;
}>;
