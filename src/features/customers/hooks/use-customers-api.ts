import { useMutation, useQuery } from "@tanstack/react-query";

import { customerApi } from "@/src/apis/customer.api";
import { queryKeys } from "@/src/lib/query-keys";
import type { CreateCustomerPayload, CustomerListParams, UpdateCustomerPayload } from "@/src/types/customer";

export function useListCustomers(params?: CustomerListParams) {
  return useQuery({ queryKey: queryKeys.customers.list(params), queryFn: () => customerApi.list(params) });
}

export function useCustomerDetails(id: string, enabled = true) {
  return useQuery({ queryKey: queryKeys.customers.detail(id), queryFn: () => customerApi.getById(id), enabled });
}

export function useCreateCustomer() {
  return useMutation({ mutationFn: (payload: CreateCustomerPayload) => customerApi.create(payload) });
}

export function useUpdateCustomer() {
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdateCustomerPayload }) => customerApi.update(id, payload),
  });
}
