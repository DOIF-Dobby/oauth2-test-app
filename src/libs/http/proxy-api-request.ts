import { NextRequest, NextResponse } from "next/server";
import { apiFetch } from "./fetch/api-fetch";
import { HttpMethod } from "./http-method";
import { JsonResponse } from "./fetch/return-fetch-json";

export async function proxyApiRequest(request: NextRequest) {
  const pathname = resolvePathname(request);
  const method = request.method;
  let requestBody;

  if (!["GET", "HEAD"].includes(method)) {
    try {
      requestBody = await request.json();
    } catch {
      requestBody = {};
    }
  }

  const headers = new Headers(request.headers);
  headers.set("Accept", "application/json");
  headers.set("Content-Type", "application/json");

  try {
    const response = await apiFetch(pathname, {
      method: request.method as HttpMethod,
      headers: headers,
      body: requestBody,
    });

    return NextResponse.json(response.body, {
      headers: response.headers,
      status: response.status,
      statusText: response.statusText,
      url: response.url,
    });
  } catch (err) {
    const jsonErr = err as JsonResponse;

    return NextResponse.json(jsonErr.body, {
      headers: jsonErr.headers,
      status: jsonErr.status,
      statusText: jsonErr.statusText,
      url: jsonErr.url,
    });
  }
}

/**
 * NextRequest에서 pathname 얻기
 */
export function resolvePathname(request: NextRequest, prefix: string = "/api") {
  const { pathname } = request.nextUrl;
  return pathname.startsWith(prefix) ? pathname.replace(prefix, "") : pathname;
}
