// export const dynamic = "force-dynamic";

import { apiFetch } from "@/utils/api-fetch";
import TestUI from "./ui";

export default async function Page() {
  // const res = await fetch("http://localhost:8080/stocks", {
  //   headers: {
  //     Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTU2MTkzNTAyOTA3NzQ3NjMxNDUiLCJ1c2VySWQiOjEsImVtYWlsIjoiZG9pZi5kb2JieUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IkRvYmJ5IiwicHJvdmlkZXJUeXBlIjoiR09PR0xFIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTc0NTIwMTkzMCwiZXhwIjoxNzQ1ODA2NzMwfQ.bqbod_5vqC5ITDoE-CVj-_t3rg4HwJsWC60Ucpf0ODw`,
  //   },
  // });

  // const data = await res.json();

  // const res = await axios.get("http://localhost:8080/stocks", {
  //   headers: {
  //     Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTU2MTkzNTAyOTA3NzQ3NjMxNDUiLCJ1c2VySWQiOjEsImVtYWlsIjoiZG9pZi5kb2JieUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IkRvYmJ5IiwicHJvdmlkZXJUeXBlIjoiR09PR0xFIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTc0NTIwMTkzMCwiZXhwIjoxNzQ1ODA2NzMwfQ.bqbod_5vqC5ITDoE-CVj-_t3rg4HwJsWC60Ucpf0ODw`,
  //   },
  // });

  // const data = res.data;

  const res = await apiFetch("/stocks", {
    cache: "default",
    next: {
      revalidate: 20,
    },
  });

  const data = await res.json();

  return <TestUI data={data} />;
}
