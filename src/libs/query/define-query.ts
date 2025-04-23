import { QueryKey, UseQueryOptions } from "@tanstack/react-query";

export type DefineQueryOptions = Omit<UseQueryOptions, "queryFn"> & {
  queryFn: UseQueryOptions["queryFn"];
};

export function defineQueryKeys<T extends Record<string, QueryKey>>(obj: T): T {
  return obj;
}

export function defineQuery<T extends Record<string, () => DefineQueryOptions>>(
  obj: T
): T {
  return obj;
}
