import { useMutation, useQuery } from "@tanstack/react-query";

import { priceRuleApi } from "@/src/apis/price-rule.api";
import { queryKeys } from "@/src/lib/query-keys";
import type { CreatePriceRulePayload, PriceRuleListParams, UpdatePriceRulePayload } from "@/src/types/price-rule";

export function useListPriceRules(params?: PriceRuleListParams) {
  return useQuery({ queryKey: queryKeys.pricing.list(params), queryFn: () => priceRuleApi.list(params) });
}

export function usePriceRuleDetails(id: string, enabled = true) {
  return useQuery({ queryKey: queryKeys.pricing.detail(id), queryFn: () => priceRuleApi.getById(id), enabled });
}

export function useCreatePriceRule() {
  return useMutation({ mutationFn: (payload: CreatePriceRulePayload) => priceRuleApi.create(payload) });
}

export function useUpdatePriceRule() {
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdatePriceRulePayload }) => priceRuleApi.update(id, payload),
  });
}
