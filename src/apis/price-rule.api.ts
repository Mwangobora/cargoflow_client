import { axiosClient } from "@/src/apis/axios-client";
import { cleanParams } from "@/src/lib/api-utils";
import type { ListResponse } from "@/src/types/api";
import type { CreatePriceRulePayload, PriceRule, PriceRuleListParams, UpdatePriceRulePayload } from "@/src/types/price-rule";

class PriceRuleApi {
  private base = "/pricing/rules/";

  async list(params?: PriceRuleListParams): Promise<ListResponse<PriceRule>> {
    const { data } = await axiosClient.get<ListResponse<PriceRule>>(this.base, { params: cleanParams(params) });
    return data;
  }

  async getById(id: string): Promise<PriceRule> {
    const { data } = await axiosClient.get<PriceRule>(`${this.base}${id}/`);
    return data;
  }

  async create(payload: CreatePriceRulePayload): Promise<PriceRule> {
    const { data } = await axiosClient.post<PriceRule>(this.base, payload);
    return data;
  }

  async update(id: string, payload: UpdatePriceRulePayload): Promise<PriceRule> {
    const { data } = await axiosClient.patch<PriceRule>(`${this.base}${id}/`, payload);
    return data;
  }

  async remove(id: string): Promise<void> { await axiosClient.delete(`${this.base}${id}/`); }

  async getApplicable(params: { route_id: string; size_category: string; effective_date?: string }): Promise<PriceRule> {
    const { data } = await axiosClient.get<PriceRule>(`${this.base}applicable/`, { params: cleanParams(params) });
    return data;
  }
}

export const priceRuleApi = new PriceRuleApi();
