import { tokenManager } from "../../auth/token-manager";
import { throwErrorResponseInterceptor } from "./interceptors";
import { returnFetchJson } from "./return-fetch-json";

export const serverFetch = returnFetchJson({
  baseUrl: process.env.BACKEND_API_HOST,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  interceptors: {
    request: async (args) => {
      const headers = new Headers(args[1]?.headers);
      const accessToken = await tokenManager.getAccessToken();

      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken.value}`);
      }

      return [
        args[0],
        {
          ...args[1],
          headers,
        },
      ];
    },
    response: throwErrorResponseInterceptor,
  },
});
