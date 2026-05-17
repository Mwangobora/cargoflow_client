import type { ListParams } from "@/src/types/api";

export type User = {
  id: string;
  email: string;
  full_name: string;
  phone_number: string | null;
  is_active: boolean;
  created_at: string;
};

export type UserListParams = ListParams & { without_employee?: boolean; ordering?: string };

export type CreateUserPayload = {
  full_name: string;
  email: string;
  phone_number?: string | null;
  password: string;
  is_active?: boolean;
};

export type Role = {
  id: string;
  role_name: string;
  description: string | null;
  permissions: Array<{ id: number; app_label: string; codename: string; name: string }>;
  created_at: string;
  updated_at: string;
};

export type RoleListParams = ListParams & { ordering?: string };
