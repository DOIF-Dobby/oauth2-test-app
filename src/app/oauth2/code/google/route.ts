import { tokenManager } from "@/libs/instances/token-manager";
import { serverFetch } from "@/libs/http/fetch/server-fetch";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");

  const res = await serverFetch(
    `/oauth2/authenticate?code=${code}&provider=GOOGLE`,
    {
      method: "POST",
    }
  );

  const auhorization = res.headers.get("authorization");
  console.log(`authorization: ${auhorization}`);

  const accessToken = auhorization?.replace("Bearer ", "");

  if (accessToken) {
    await tokenManager.setAccessToken(accessToken);
  }

  redirect("/test");
}
