import { useMutation } from "@tanstack/react-query";

import { authApi } from "@/src/apis/auth.api";
import { mapApiError } from "@/src/lib/error-message";
import type { RegisterPayload } from "@/src/types/auth";

export function useRegister() {
  return useMutation({
    mutationFn: (payload: RegisterPayload) => authApi.register(payload),
    meta: {
      getErrorMessage: mapApiError,
    },
  });
}
