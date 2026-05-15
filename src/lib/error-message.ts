import type { AxiosError } from "axios";

import type { ApiErrorResponse } from "@/src/types/auth";

function asFieldMessage(value: unknown): string | null {
  if (typeof value === "string") return value;
  if (Array.isArray(value) && typeof value[0] === "string") return value[0];
  return null;
}

export function mapApiError(error: unknown): string {
  const err = error as AxiosError<ApiErrorResponse>;
  const status = err.response?.status;
  const data = err.response?.data;
  const requestUrl = err.config?.url ?? "";
  const lowerDetail = typeof data?.detail === "string" ? data.detail.toLowerCase() : "";

  if (status === 401) {
    if (requestUrl.includes("/auth/login")) {
      return "Account not found or password is incorrect. Please try again.";
    }
    return "Your session has expired. Please sign in again.";
  }
  if (status === 403) return "You do not have permission to access this area.";
  if (!err.response) return "Network issue: we could not reach the server. Please check your connection and try again.";
  if (status === 404 && requestUrl.includes("/auth/")) {
    return "Authentication service is not available right now. Please try again shortly.";
  }

  if (data && typeof data === "object") {
    if (typeof data.detail === "string") {
      if (lowerDetail.includes("invalid credentials")) {
        return "Account not found or password is incorrect. Please try again.";
      }
      if (lowerDetail.includes("refresh token") || lowerDetail.includes("token")) {
        return "Your session has expired. Please sign in again.";
      }
      return data.detail;
    }
    for (const key of Object.keys(data)) {
      const fieldMessage = asFieldMessage(data[key]);
      if (fieldMessage) return fieldMessage;
    }
  }

  return "Something went wrong. Please try again.";
}
