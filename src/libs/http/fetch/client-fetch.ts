import { throwErrorResponseInterceptor } from "./interceptors";
import { returnFetchJson } from "./return-fetch-json";

export const clientFetch = returnFetchJson({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  interceptors: {
    request: async (args) => {
      const url = args[0];
      const apiUrl =
        typeof url === "string" ? `/api${url}` : new URL(`/api${url.pathname}`);

      return [apiUrl, args[1]];
    },
    response: throwErrorResponseInterceptor,
  },
});
