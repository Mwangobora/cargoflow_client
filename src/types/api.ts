export type Primitive = string | number | boolean | null | undefined;

export type QueryParams = Record<string, Primitive>;

export type PaginatedResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export type FieldErrorValue = string | string[];

export type ApiErrorResponse = {
  detail?: string;
  [key: string]: unknown;
};

export type ListResponse<T> = PaginatedResponse<T> | T[];

export type ListParams = QueryParams & {
  page?: number;
  page_size?: number;
  search?: string;
};
