import { FetchArgs } from "return-fetch";
import { JsonRequestInit, JsonResponse } from "./return-fetch-json";
import { isServer } from "@/utils/is-server";
import { serverFetch } from "./server-fetch";
import { clientFetch } from "./client-fetch";

export function apiFetch<T>(
  url: FetchArgs[0],
  init?: JsonRequestInit
): Promise<JsonResponse<T>> {
  return isServer ? serverFetch(url, init) : clientFetch(url, init);
}
