import { serverFetch } from "@/libs/http/fetch/server-fetch";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");

  const res = await serverFetch(`http://localhost:8000/api/auth/login/google`, {
    method: "POST",
    body: {
      authorizationCode: code,
    },
  });

  console.log(res.body);

  // const auhorization = res.headers.get("authorization");
  // console.log(`authorization: ${auhorization}`);

  // const accessToken = auhorization?.replace("Bearer ", "");

  // if (accessToken) {
  //   await tokenManager.setAccessToken(accessToken);
  // }

  redirect("/test");
}
