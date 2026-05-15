import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { authApi } from "@/src/apis/auth.api";
import { useAuthStore } from "@/src/stores/auth-store";

export function useCurrentUser() {
  const setAuth = useAuthStore((s) => s.setAuth);
  const clearAuth = useAuthStore((s) => s.clearAuth);

  const query = useQuery({
    queryKey: ["auth", "me"],
    queryFn: authApi.me,
    retry: false,
    staleTime: 30_000,
  });

  useEffect(() => {
    if (query.isSuccess && query.data) {
      setAuth(query.data, !query.data.is_active);
    }
    if (query.isError) {
      clearAuth();
    }
  }, [clearAuth, query.data, query.isError, query.isSuccess, setAuth]);

  return query;
}
