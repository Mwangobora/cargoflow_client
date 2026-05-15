import { useMutation, useQueryClient } from "@tanstack/react-query";

import { authApi } from "@/src/apis/auth.api";
import { mapApiError } from "@/src/lib/error-message";
import { useAuthStore } from "@/src/stores/auth-store";

export function useLogout() {
  const queryClient = useQueryClient();
  const clearAuth = useAuthStore((s) => s.clearAuth);

  return useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: async () => {
      clearAuth();
      await queryClient.invalidateQueries({ queryKey: ["auth", "me"] });
    },
    meta: {
      getErrorMessage: mapApiError,
    },
  });
}
