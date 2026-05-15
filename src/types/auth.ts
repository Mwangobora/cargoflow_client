export type LoginPayload = {
  identifier: string;
  password: string;
};

export type RegisterPayload = {
  full_name: string;
  email: string;
  phone_number?: string;
  password: string;
};

export type AuthUser = {
  id: string;
  email: string;
  full_name: string;
  phone_number: string | null;
  is_active: boolean;
  role?: string;
  permissions?: string[];
};

export type AuthResponse = {
  user: AuthUser;
  approval_pending: boolean;
};

export type PendingApprovalResponse = {
  id: string;
  email: string;
  phone_number: string | null;
  is_active: boolean;
  approval_pending: boolean;
};

export type ApiErrorResponse = {
  detail?: string;
  [key: string]: unknown;
};
