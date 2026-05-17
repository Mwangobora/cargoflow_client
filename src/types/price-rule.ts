import type { ListParams } from "@/src/types/api";

export type PriceRule = {
  id: string;
  route_id: string;
  route_info: string;
  size_category: string;
  base_price_tzs: number;
  value_multiplier: string;
  value_threshold_tzs: number | null;
  min_price_tzs: number;
  max_price_tzs: number | null;
  is_active: boolean;
  effective_from: string;
  effective_to: string | null;
  created_at: string;
  created_by_name: string;
};

export type PriceRuleListParams = ListParams & {
  route_id?: string;
  size_category?: string;
  is_active?: boolean;
  effective_from?: string;
  effective_to?: string;
  created_by?: string;
};

export type CreatePriceRulePayload = Omit<
  PriceRule,
  "id" | "route_info" | "created_at" | "created_by_name" | "value_multiplier"
> & { value_multiplier?: string };

export type UpdatePriceRulePayload = Partial<CreatePriceRulePayload>;
