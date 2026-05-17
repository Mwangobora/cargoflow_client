import type { ListParams } from "@/src/types/api";

export type Driver = {
  id: string;
  full_name: string;
  phone_number: string;
  license_number: string;
  license_expiry: string;
  status: string;
  branch_name: string;
  is_active: boolean;
};

export type DriverListParams = ListParams & { status?: string; branch_id?: string; is_active?: boolean };

export type CreateDriverPayload = {
  full_name: string;
  phone_number: string;
  license_number: string;
  license_expiry: string;
  branch_id: string;
};

export type UpdateDriverPayload = Partial<CreateDriverPayload>;
