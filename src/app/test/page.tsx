// export const dynamic = "force-dynamic";

import { serverFetch } from "@/libs/http/server-fetch";
import TestUI from "./ui";
import { BaseResponseContent, Stock } from "./types";
import { getDehydratedQueries, Hydrate } from "@/libs/query/react-query-utils";

export default async function Page() {
  const state = await getDehydratedQueries([
    {
      queryKey: ["/stocks"],
      queryFn: async () => {
        const res = await serverFetch<BaseResponseContent<Stock>>("/stocks");
        return res.body;
      },
    },
  ]);

  return (
    <Hydrate state={state}>
      <TestUI />
    </Hydrate>
  );
}
