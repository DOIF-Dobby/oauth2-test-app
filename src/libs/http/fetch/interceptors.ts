import { httpStatusHelper } from "../http-status";

export async function throwErrorResponseInterceptor(response: Response) {
  const httpStatus = httpStatusHelper.of(response.status);
  if (httpStatus && httpStatusHelper.isError(httpStatus)) {
    throw response;
  }

  return response;
}
