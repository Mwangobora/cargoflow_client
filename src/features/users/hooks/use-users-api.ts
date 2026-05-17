import { useMutation, useQuery } from "@tanstack/react-query";

import { userApi } from "@/src/apis/user.api";
import type { CreateUserPayload, UserListParams } from "@/src/types/user";

export function useListUsers(params?: UserListParams) {
  return useQuery({ queryKey: ["users", "list", params], queryFn: () => userApi.list(params) });
}

export function useListPendingUsers(params?: UserListParams) {
  return useQuery({ queryKey: ["users", "pending", params], queryFn: () => userApi.listPending(params) });
}

export function useCreateUser() {
  return useMutation({ mutationFn: (payload: CreateUserPayload) => userApi.create(payload) });
}

export function useActivateUser() {
  return useMutation({ mutationFn: (id: string) => userApi.activate(id) });
}

export function useDeactivateUser() {
  return useMutation({ mutationFn: (id: string) => userApi.deactivate(id) });
}
