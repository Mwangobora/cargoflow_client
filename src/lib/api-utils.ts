import type { AxiosError } from "axios";

import type { ApiErrorResponse, ListResponse, PaginatedResponse, QueryParams } from "@/src/types/api";

export function cleanParams<T extends QueryParams>(params?: T): QueryParams | undefined {
  if (!params) return undefined;
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== ""),
  );
}

export function isPaginatedResponse<T>(value: unknown): value is PaginatedResponse<T> {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<PaginatedResponse<T>>;
  return Array.isArray(candidate.results) && typeof candidate.count === "number";
}

export function getListItems<T>(payload: ListResponse<T>): T[] {
  return isPaginatedResponse<T>(payload) ? payload.results : payload;
}

export function normalizeApiError(error: unknown): ApiErrorResponse {
  const axiosError = error as AxiosError<ApiErrorResponse>;
  return axiosError.response?.data || { detail: "Unexpected error." };
}
