import { create } from "zustand";

import type { AuthUser } from "@/src/types/auth";

type ApprovalStatus = "approved" | "pending" | "unknown";

type AuthState = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  approvalStatus: ApprovalStatus;
  setAuth: (user: AuthUser, pending?: boolean) => void;
  setLoading: (value: boolean) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  approvalStatus: "unknown",
  setAuth: (user, pending = false) =>
    set({
      user,
      isAuthenticated: true,
      approvalStatus: pending ? "pending" : "approved",
      isLoading: false,
    }),
  setLoading: (value) => set({ isLoading: value }),
  clearAuth: () =>
    set({
      user: null,
      isAuthenticated: false,
      approvalStatus: "unknown",
      isLoading: false,
    }),
}));
