import { useMutation } from "@tanstack/react-query";

import { authApi } from "@/src/apis/auth.api";
import { mapApiError } from "@/src/lib/error-message";
import { useAuthStore } from "@/src/stores/auth-store";
import type { LoginPayload } from "@/src/types/auth";

export function useLogin() {
  const setAuth = useAuthStore((s) => s.setAuth);
  const clearAuth = useAuthStore((s) => s.clearAuth);

  return useMutation({
    mutationFn: (payload: LoginPayload) => authApi.login(payload),
    onSuccess: (data) => {
      if (data.approval_pending) {
        setAuth(data.user, true);
        return;
      }
      setAuth(data.user, false);
    },
    onError: () => {
      clearAuth();
    },
    meta: {
      getErrorMessage: mapApiError,
    },
  });
}
