import { proxyApiRequest } from "@/libs/http/proxy-api-request";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return proxyApiRequest(request);
}

export async function POST(request: NextRequest) {
  return await proxyApiRequest(request);
}
