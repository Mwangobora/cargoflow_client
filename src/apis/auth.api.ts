import { axiosClient } from "@/src/apis/axios-client";
import type { AuthResponse, AuthUser, LoginPayload, PendingApprovalResponse, RegisterPayload } from "@/src/types/auth";

const AUTH_ENDPOINTS = {
  register: "/auth/register/",
  login: "/auth/login/",
  refresh: "/auth/refresh/",
  logout: "/auth/logout/",
  me: "/auth/me/",
} as const;

function toLoginRequest(payload: LoginPayload) {
  const value = payload.identifier.trim();
  const isEmail = value.includes("@");
  const isPhone = /^[+\d][\d\s-]{6,}$/.test(value);
  return {
    ...(isEmail ? { email: value } : isPhone ? { phone_number: value } : { account_id: value }),
    password: payload.password,
  };
}

class AuthApi {
  async login(payload: LoginPayload): Promise<AuthResponse> {
    const { data } = await axiosClient.post<AuthResponse>(AUTH_ENDPOINTS.login, toLoginRequest(payload));
    return data;
  }

  async register(payload: RegisterPayload): Promise<PendingApprovalResponse> {
    const { data } = await axiosClient.post<PendingApprovalResponse>(AUTH_ENDPOINTS.register, payload);
    return data;
  }

  async logout(): Promise<void> {
    await axiosClient.post(AUTH_ENDPOINTS.logout, {});
  }

  async me(): Promise<AuthUser> {
    const { data } = await axiosClient.get<AuthUser>(AUTH_ENDPOINTS.me);
    return data;
  }

  async refreshToken(): Promise<void> {
    await axiosClient.post(AUTH_ENDPOINTS.refresh, {});
  }
}

export const authApi = new AuthApi();
