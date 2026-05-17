import { axiosClient } from "@/src/apis/axios-client";
import { cleanParams } from "@/src/lib/api-utils";
import type { ListResponse } from "@/src/types/api";
import type { CreateCustomerPayload, Customer, CustomerListParams, UpdateCustomerPayload } from "@/src/types/customer";

class CustomerApi {
  async list(params?: CustomerListParams): Promise<ListResponse<Customer>> {
    const { data } = await axiosClient.get<ListResponse<Customer>>("/customers/", { params: cleanParams(params) });
    return data;
  }

  async getById(id: string): Promise<Customer> {
    const { data } = await axiosClient.get<Customer>(`/customers/${id}/`);
    return data;
  }

  async create(payload: CreateCustomerPayload): Promise<Customer> {
    const { data } = await axiosClient.post<Customer>("/customers/", payload);
    return data;
  }

  async update(id: string, payload: UpdateCustomerPayload): Promise<Customer> {
    const { data } = await axiosClient.patch<Customer>(`/customers/${id}/`, payload);
    return data;
  }

  async deactivate(id: string): Promise<Customer> {
    const { data } = await axiosClient.post<Customer>(`/customers/${id}/deactivate/`, {});
    return data;
  }

  async reactivate(id: string): Promise<Customer> {
    const { data } = await axiosClient.post<Customer>(`/customers/${id}/reactivate/`, {});
    return data;
  }

  async lookup(q: string, limit = 20): Promise<Customer[]> {
    const { data } = await axiosClient.get<Customer[]>("/customers/lookup/", { params: cleanParams({ q, limit }) });
    return data;
  }
}

export const customerApi = new CustomerApi();
