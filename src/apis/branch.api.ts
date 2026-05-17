import { axiosClient } from "@/src/apis/axios-client";
import { cleanParams } from "@/src/lib/api-utils";
import type { ListResponse } from "@/src/types/api";
import type { Branch, BranchListParams, CreateBranchPayload, UpdateBranchPayload } from "@/src/types/branch";

class BranchApi {
  private base = "/operations/branches/";

  async list(params?: BranchListParams): Promise<ListResponse<Branch>> {
    const { data } = await axiosClient.get<ListResponse<Branch>>(this.base, { params: cleanParams(params) });
    return data;
  }

  async getById(id: string): Promise<Branch> {
    const { data } = await axiosClient.get<Branch>(`${this.base}${id}/`);
    return data;
  }

  async create(payload: CreateBranchPayload): Promise<Branch> {
    const { data } = await axiosClient.post<Branch>(this.base, payload);
    return data;
  }

  async update(id: string, payload: UpdateBranchPayload): Promise<Branch> {
    const { data } = await axiosClient.patch<Branch>(`${this.base}${id}/`, payload);
    return data;
  }

  async remove(id: string): Promise<void> {
    await axiosClient.delete(`${this.base}${id}/`);
  }
}

export const branchApi = new BranchApi();
