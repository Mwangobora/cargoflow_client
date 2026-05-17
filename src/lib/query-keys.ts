import type { ListParams } from "@/src/types/api";

export const queryKeys = {
  customers: {
    all: ["customers"] as const,
    list: (params?: ListParams) => ["customers", "list", params] as const,
    detail: (id: string) => ["customers", "detail", id] as const,
  },
  shipments: {
    all: ["shipments"] as const,
    list: (params?: ListParams) => ["shipments", "list", params] as const,
    detail: (id: string) => ["shipments", "detail", id] as const,
  },
  payments: {
    all: ["payments"] as const,
    list: (params?: ListParams) => ["payments", "list", params] as const,
    detail: (id: string) => ["payments", "detail", id] as const,
  },
  trips: {
    all: ["trips"] as const,
    list: (params?: ListParams) => ["trips", "list", params] as const,
    detail: (id: string) => ["trips", "detail", id] as const,
  },
  operations: {
    routes: (params?: ListParams) => ["routes", "list", params] as const,
    vehicles: (params?: ListParams) => ["vehicles", "list", params] as const,
    drivers: (params?: ListParams) => ["drivers", "list", params] as const,
    branches: (params?: ListParams) => ["branches", "list", params] as const,
  },
  pricing: {
    all: ["price-rules"] as const,
    list: (params?: ListParams) => ["price-rules", "list", params] as const,
    detail: (id: string) => ["price-rules", "detail", id] as const,
  },
  users: {
    list: (params?: ListParams) => ["users", "list", params] as const,
    detail: (id: string) => ["users", "detail", id] as const,
  },
};
