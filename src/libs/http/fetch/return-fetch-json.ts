import { parseJsonSafely } from "@/utils/json-utils";
import returnFetch, {
  FetchArgs,
  ReturnFetchDefaultOptions,
} from "return-fetch";
import { HttpMethod } from "../http-method";

export type JsonRequestInit = Omit<
  NonNullable<FetchArgs[1]>,
  "body" | "method"
> & {
  body?: object;
  method?: HttpMethod;
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
    try {
      const response = await baseFetch(url, {
        ...init,
        body: init?.body && JSON.stringify(init.body),
      });
      return await buildJsonResponse(response);
    } catch (error) {
      if (error instanceof Response) {
        throw await buildJsonResponse(error);
      }

      throw error;
    }
  };
}

async function buildJsonResponse<T>(
  response: Response
): Promise<JsonResponse<T>> {
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
}
