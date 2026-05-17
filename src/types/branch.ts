import type { ListParams } from "@/src/types/api";

export type Branch = {
  id: string;
  name: string;
  city: string;
  address: string;
  phone_number: string;
  is_active: boolean;
  created_at: string;
};

export type BranchListParams = ListParams & { is_active?: boolean };

export type CreateBranchPayload = {
  name: string;
  city: string;
  address: string;
  phone_number: string;
};

export type UpdateBranchPayload = Partial<CreateBranchPayload>;
