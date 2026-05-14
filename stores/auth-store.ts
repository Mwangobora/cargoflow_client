import { create } from "zustand";

type AuthState = {
  accessToken: string | null;
  isAuthenticated: boolean;
  setAccessToken: (token: string | null) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  isAuthenticated: false,
  setAccessToken: (token) =>
    set({
      accessToken: token,
      isAuthenticated: Boolean(token),
    }),
  clearAuth: () =>
    set({
      accessToken: null,
      isAuthenticated: false,
    }),
}));
