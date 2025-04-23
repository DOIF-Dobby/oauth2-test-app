import { BaseResponseContent } from "@/types/base-type";
import { Stock } from "./stock-type";
import { apiFetch } from "@/libs/http/api-fetch";

export const stockService = {
  getStock: async () => {
    const res = await apiFetch<BaseResponseContent<Stock>>("/stocks");
    return res.body;
  },
};
