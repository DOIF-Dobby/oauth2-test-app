import { createGetQueryClient } from "../factories/create-get-query-client";

export const getQueryClient = createGetQueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
});
