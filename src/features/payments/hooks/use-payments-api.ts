import { useMutation, useQuery } from "@tanstack/react-query";

import { paymentApi } from "@/src/apis/payment.api";
import { queryKeys } from "@/src/lib/query-keys";
import type { CreatePaymentPayload, PaymentListParams, UpdatePaymentPayload } from "@/src/types/payment";

export function useListPayments(params?: PaymentListParams) {
  return useQuery({ queryKey: queryKeys.payments.list(params), queryFn: () => paymentApi.list(params) });
}

export function usePaymentDetails(id: string, enabled = true) {
  return useQuery({ queryKey: queryKeys.payments.detail(id), queryFn: () => paymentApi.getById(id), enabled });
}

export function useCreatePayment() {
  return useMutation({ mutationFn: (payload: CreatePaymentPayload) => paymentApi.create(payload) });
}

export function useUpdatePayment() {
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdatePaymentPayload }) => paymentApi.update(id, payload),
  });
}
