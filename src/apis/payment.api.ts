import { axiosClient } from "@/src/apis/axios-client";
import { cleanParams } from "@/src/lib/api-utils";
import type { ListResponse } from "@/src/types/api";
import type { CreatePaymentPayload, Payment, PaymentListParams, UpdatePaymentPayload } from "@/src/types/payment";

class PaymentApi {
  async list(params?: PaymentListParams): Promise<ListResponse<Payment>> {
    const { data } = await axiosClient.get<ListResponse<Payment>>("/payments/", { params: cleanParams(params) });
    return data;
  }

  async getById(id: string): Promise<Payment> {
    const { data } = await axiosClient.get<Payment>(`/payments/${id}/`);
    return data;
  }

  async getByReference(reference: string): Promise<Payment> {
    const { data } = await axiosClient.get<Payment>(`/payments/by-reference/${reference}/`);
    return data;
  }

  async getByShipment(shipmentId: string): Promise<ListResponse<Payment>> {
    const { data } = await axiosClient.get<ListResponse<Payment>>(`/payments/shipment/${shipmentId}/`);
    return data;
  }

  async create(payload: CreatePaymentPayload): Promise<Payment> {
    const { data } = await axiosClient.post<Payment>("/payments/", payload);
    return data;
  }

  async update(id: string, payload: UpdatePaymentPayload): Promise<Payment> {
    const { data } = await axiosClient.patch<Payment>(`/payments/${id}/`, payload);
    return data;
  }

  async remove(id: string): Promise<void> { await axiosClient.delete(`/payments/${id}/`); }
  async cancel(id: string, reason?: string): Promise<Payment> {
    const { data } = await axiosClient.post<Payment>(`/payments/${id}/cancel/`, { reason });
    return data;
  }
  async refund(id: string, reason?: string): Promise<Payment> {
    const { data } = await axiosClient.post<Payment>(`/payments/${id}/refund/`, { reason });
    return data;
  }
}

export const paymentApi = new PaymentApi();
