import type { ListParams } from "@/src/types/api";

export type Customer = {
  id: string;
  full_name: string;
  phone_number: string;
  phone_number_alt: string | null;
  id_type?: string | null;
  id_number?: string | null;
  address?: string | null;
  notes?: string | null;
  is_active: boolean;
  created_by?: string;
  created_at?: string;
  updated_at?: string;
};

export type CustomerListParams = ListParams & { is_active?: boolean; limit?: number };

export type CreateCustomerPayload = Pick<
  Customer,
  "full_name" | "phone_number" | "phone_number_alt" | "id_type" | "id_number" | "address" | "notes"
>;

export type UpdateCustomerPayload = Partial<CreateCustomerPayload> & { is_active?: boolean };
