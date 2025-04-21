"use client";

interface Props {
  data: object;
}

export default function TestUI({ data }: Props) {
  // const { data: stocks } = useQuery({
  //   queryKey: ["/stocks"],
  //   queryFn: async () => {
  //     const res = await fetch("http://localhost:8080/stocks", {
  //       headers: {
  //         Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTU2MTkzNTAyOTA3NzQ3NjMxNDUiLCJ1c2VySWQiOjEsImVtYWlsIjoiZG9pZi5kb2JieUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IkRvYmJ5IiwicHJvdmlkZXJUeXBlIjoiR09PR0xFIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTc0NTIwMTkzMCwiZXhwIjoxNzQ1ODA2NzMwfQ.bqbod_5vqC5ITDoE-CVj-_t3rg4HwJsWC60Ucpf0ODw`,
  //       },
  //     });

  //     return await res.json();
  //   },
  //   initialData: data,
  // });

  // console.log(stocks);

  console.log(data);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
