import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");

  const res = await fetch(
    `http://localhost:8080/oauth2/authenticate?code=${code}&provider=GOOGLE`,
    {
      method: "POST",
    }
  );

  const auhorization = res.headers.get("authorization");
  console.log(`authorization: ${auhorization}`);

  const body = await res.json();
  console.log(body);

  const accessToken = auhorization?.replace("Bearer ", "");

  if (accessToken) {
    const cookieStore = await cookies();
    cookieStore.set("passive-income.access-token", accessToken);
  }

  redirect("/test");
}
