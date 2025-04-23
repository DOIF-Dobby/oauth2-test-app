import { MutationFunction, UseMutationOptions } from "@tanstack/react-query";

export type DefineMutationOptions<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
> = Omit<
  UseMutationOptions<TData, TError, TVariables, TContext>,
  "mutationFn"
> & {
  mutationFn: MutationFunction<TData, TVariables>;
};

export function defineMutation<
  T extends Record<
    string,
    () => DefineMutationOptions<
      unknown,
      unknown,
      Parameters<ReturnType<T[keyof T]>["mutationFn"]>[0]
    >
  >
>(obj: T): T {
  return obj;
}
