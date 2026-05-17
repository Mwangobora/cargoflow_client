import { axiosClient } from "@/src/apis/axios-client";
import { cleanParams } from "@/src/lib/api-utils";
import type { ListResponse } from "@/src/types/api";
import type { CreateUserPayload, User, UserListParams } from "@/src/types/user";

class UserApi {
  async list(params?: UserListParams): Promise<ListResponse<User>> {
    const { data } = await axiosClient.get<ListResponse<User>>("/accounts/users/", { params: cleanParams(params) });
    return data;
  }

  async create(payload: CreateUserPayload): Promise<User> {
    const { data } = await axiosClient.post<User>("/accounts/users/", payload);
    return data;
  }

  async listPending(params?: UserListParams): Promise<ListResponse<User>> {
    const { data } = await axiosClient.get<ListResponse<User>>("/accounts/admin/users/pending/", {
      params: cleanParams(params),
    });
    return data;
  }

  async activate(userId: string): Promise<User> {
    const { data } = await axiosClient.post<User>(`/accounts/admin/users/${userId}/activate/`, {});
    return data;
  }

  async deactivate(userId: string): Promise<User> {
    const { data } = await axiosClient.post<User>(`/accounts/admin/users/${userId}/deactivate/`, {});
    return data;
  }
}

export const userApi = new UserApi();
