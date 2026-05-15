import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";

const fallbackBaseUrl = "http://localhost:8000/api/v1";
const envBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.trim();
const normalizedBaseUrl = (envBaseUrl || fallbackBaseUrl).replace(/\/+$/, "");

let isRefreshing = false;
let refreshPromise: Promise<boolean> | null = null;

export const axiosClient = axios.create({
  baseURL: normalizedBaseUrl,
  withCredentials: true,
  timeout: 20_000,
  headers: { "Content-Type": "application/json" },
});

if (!envBaseUrl && typeof window !== "undefined") {
  console.warn(
    "NEXT_PUBLIC_API_BASE_URL is missing. Falling back to http://localhost:8000/api/v1.",
  );
}

axiosClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const original = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
    if (error.response?.status !== 401 || original?._retry) return Promise.reject(error);

    original._retry = true;
    try {
      if (!isRefreshing) {
        isRefreshing = true;
        refreshPromise = axios
          .post(`${normalizedBaseUrl}/auth/refresh/`, {}, { withCredentials: true })
          .then(() => true)
          .catch(() => false);
      }

      const refreshed = await refreshPromise;
      isRefreshing = false;
      refreshPromise = null;

      if (!refreshed) throw error;
      return axiosClient(original);
    } catch (refreshError) {
      isRefreshing = false;
      refreshPromise = null;
      return Promise.reject(refreshError);
    }
  },
);
