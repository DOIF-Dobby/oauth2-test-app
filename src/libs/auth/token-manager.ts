import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

const ACCESS_TOKEN_NAME = "passive-income.access-token";

export const tokenManager = {
  setAccessToken: async (token: string) => {
    const decoded = jwtDecode(token);
    const expires = decoded.exp ? new Date(decoded.exp * 1000) : undefined;

    const cookieStore = await cookies();

    cookieStore.set(ACCESS_TOKEN_NAME, token, {
      httpOnly: true,
      expires,
    });
  },
  getAccessToken: async () => {
    const cookieStore = await cookies();
    return cookieStore.get(ACCESS_TOKEN_NAME);
  },
};
