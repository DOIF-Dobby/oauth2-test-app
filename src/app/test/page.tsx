// export const dynamic = "force-static";

import TestUI from "./ui";

export default async function Page() {
  // const state = await getDehydratedQueries([stockQueries.stocks()]);

  return (
    // <Hydrate state={state}>
    <TestUI />
    // </Hydrate>
  );
}
