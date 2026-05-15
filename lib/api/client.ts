import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!baseURL) {
  // Keep warning non-blocking in development while still surfacing misconfiguration.
  console.warn("NEXT_PUBLIC_API_BASE_URL is not set.");
}

export const apiClient = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 20_000,
  headers: {
    "Content-Type": "application/json",
  },
});
