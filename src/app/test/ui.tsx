"use client";

import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { BaseResponseContent, BaseResponseDetail, Stock } from "./types";
import { clientFetch } from "@/libs/http/client-fetch";

// interface Props {
// data: BaseResponseContent<Stock>;
// }

type Test = {
  name: string;
  age: number;
};

export default function TestUI() {
  const { data: response } = useSuspenseQuery({
    queryKey: ["/stocks"],
    queryFn: async () => {
      const res = await clientFetch<BaseResponseContent<Stock>>("/api/stocks");
      return res.body;
    },
  });

  const api = useMutation({
    mutationFn: async (data: Test) => {
      const res = await clientFetch<BaseResponseDetail<Test>>("/api/test2", {
        method: "POST",
        body: data,
      });

      return res.body;
    },
    onSuccess: (res) => {
      console.log(res);
      console.log(res.detail.name);
    },
  });

  console.log(response);

  return (
    <div>
      <div>
        {response.detail.content.map((stock) => (
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
