import {
  HydrationBoundary,
  QueryKey,
  dehydrate,
  QueryClient,
} from "@tanstack/react-query";

interface QueryProps<ResponseType = unknown> {
  queryKey: QueryKey;
  queryFn: () => Promise<ResponseType>;
}

export interface DehydratorOptions {
  getQueryClient: () => QueryClient;
}

export function createDehydrator({ getQueryClient }: DehydratorOptions) {
  /**
   * 단일 쿼리 prefetch 후 dehydrated state 반환
   */
  async function getDehydratedQuery<T = unknown>({
    queryKey,
    queryFn,
  }: QueryProps<T>) {
    const qc = getQueryClient();
    await qc.prefetchQuery({ queryKey, queryFn });
    return dehydrate(qc);
  }

  /**
   * 복수 쿼리 prefetch 후 dehydrated state 반환
   */
  async function getDehydratedQueries<Q extends QueryProps[]>(queries: Q) {
    const qc = getQueryClient();
    await Promise.all(
      queries.map(({ queryKey, queryFn }) =>
        qc.prefetchQuery({ queryKey, queryFn })
      )
    );
    return dehydrate(qc);
  }

  // React 쪽에 그대로 넘겨줄 hydration 컴포넌트
  const Hydrate = HydrationBoundary;

  return {
    getDehydratedQuery,
    getDehydratedQueries,
    Hydrate,
  };
}
