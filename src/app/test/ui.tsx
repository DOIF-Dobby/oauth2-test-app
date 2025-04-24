"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { stockQueries } from "@/queries/stock/stock-queries";
import { testMutations } from "@/queries/test/test-mutations";

export default function TestUI() {
  const { data: response } = useQuery(stockQueries.stocks());

  const api = useMutation({
    ...testMutations.test2(),
    onSuccess: (res) => {
      console.log("onSuccess");

      console.log(res);
      console.log(res.detail.name);
    },
    onError: (error) => {
      console.log("onError");
      console.log(error);
    },
  });

  return (
    <div>
      <div>
        {response?.detail.content.map((stock) => (
          <div key={stock.stockId}>{stock.nameKor}</div>
        ))}
      </div>
      <button
        onClick={() => {
          api.mutate({
            name: "MJ",
            age: 33,
          });
        }}
      >
        호출
      </button>
    </div>
  );
}
