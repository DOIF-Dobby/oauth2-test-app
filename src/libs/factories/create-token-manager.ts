import { jwtDecode } from "jwt-decode";
import { getCookiesStore } from "../cookie/get-cookie-store";

type CreateTokenManagerOptions = {
  accessTokenName: string;
};

export function createTokenManager(options: CreateTokenManagerOptions) {
  const { accessTokenName } = options;

  return {
    setAccessToken: async (token: string) => {
      const decoded = jwtDecode(token);
      const expires = decoded.exp ? new Date(decoded.exp * 1000) : undefined;

      const cookieStore = await getCookiesStore();

      cookieStore.set(accessTokenName, token, {
        httpOnly: true,
        expires,
      });
    },
    getAccessToken: async () => {
      const cookieStore = await getCookiesStore();
      return cookieStore.get(accessTokenName);
    },
  };
}
