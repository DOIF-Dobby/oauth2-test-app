// export const dynamic = "force-static";

import { stockQueries } from "@/queries/stock/stock-queries";
import TestUI from "./ui";
import {
  getDehydratedQueries,
  Hydrate,
} from "@/libs/query/get-dehydrate-query";

export default async function Page() {
  const state = await getDehydratedQueries([stockQueries.stocks()]);

  return (
    <Hydrate state={state}>
      <TestUI />
    </Hydrate>
  );
}
