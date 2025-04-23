import { returnFetchJson } from "./return-fetch-json";

export const serverFetch = returnFetchJson({
  baseUrl: process.env.BACKEND_API_HOST,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  interceptors: {
    request: async (args) => {
      const { cookies } = await import("next/headers");
      const headers = new Headers(args[1]?.headers);

      // cookie를 사용하면 SSR 모드로 빌드
      const cookieStore = await cookies();
      const accessToken = cookieStore.get("passive-income.access-token");

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
  },
});
