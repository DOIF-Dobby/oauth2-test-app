import { parseJsonSafely } from "@/utils/json-utils";
import returnFetch, {
  FetchArgs,
  ReturnFetchDefaultOptions,
} from "return-fetch";
import { HttpMethodOption } from "./http-option";

export type JsonRequestInit = Omit<
  NonNullable<FetchArgs[1]>,
  "body" | "method"
> & {
  body?: object;
  method?: HttpMethodOption;
};

export type ResponseGenericBody<T> = Omit<
  Awaited<ReturnType<typeof fetch>>,
  keyof Body | "clone"
> & {
  body: T;
};

export type JsonResponse<T = unknown> = ResponseGenericBody<T>;

export function returnFetchJson(args?: ReturnFetchDefaultOptions) {
  const baseFetch = returnFetch(args);

  return async function <T>(
    url: FetchArgs[0],
    init?: JsonRequestInit
  ): Promise<JsonResponse<T>> {
    const response = await baseFetch(url, {
      ...init,
      body: init?.body && JSON.stringify(init.body),
    });

    const body = parseJsonSafely(await response.text()) as T;

    return {
      headers: response.headers,
      ok: response.ok,
      redirected: response.redirected,
      status: response.status,
      statusText: response.statusText,
      type: response.type,
      url: response.url,
      body,
    } as JsonResponse<T>;
  };
}
