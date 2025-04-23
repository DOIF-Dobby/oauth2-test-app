import { defineQuery, defineQueryKeys } from "@/libs/query/define-query";
import { stockService } from "@/services/stock/stock-service";

export const stockQueryKeys = defineQueryKeys({
  stocks: ["/stocks"],
});

export const stockQueries = defineQuery({
  stocks: () => ({
    queryKey: stockQueryKeys.stocks,
    queryFn: stockService.getStock,
  }),
});
