import returnFetch from "return-fetch";
import { isServer } from "./is-server";

export const apiFetch = returnFetch({
  baseUrl: "http://localhost:8080",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  interceptors: {
    request: async (args) => {
      console.log(`isServer: ${isServer}`);

      const headers = new Headers(args[1]?.headers);

      headers.set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTU2MTkzNTAyOTA3NzQ3NjMxNDUiLCJ1c2VySWQiOjEsImVtYWlsIjoiZG9pZi5kb2JieUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IkRvYmJ5IiwicHJvdmlkZXJUeXBlIjoiR09PR0xFIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTc0NTIwMTkzMCwiZXhwIjoxNzQ1ODA2NzMwfQ.bqbod_5vqC5ITDoE-CVj-_t3rg4HwJsWC60Ucpf0ODw"
      );

      const cache = args[1]?.cache ?? "no-store";

      return [
        args[0],
        {
          ...args[1],
          headers,
          cache,
        },
      ];
    },
  },
});
