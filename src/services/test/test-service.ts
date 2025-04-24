import { BaseResponseDetail } from "@/types/base-type";
import { Test } from "./test-type";
import { HttpMethod } from "@/libs/http/http-method";
import { apiFetch } from "@/libs/http/fetch/api-fetch";

export const testService = {
  test2: async (data: Test) => {
    const res = await apiFetch<BaseResponseDetail<Test>>("/test2", {
      method: HttpMethod.POST,
      body: data,
    });

    return res.body;
  },
};
