import { returnFetchJson } from "./return-fetch-json";

export const clientFetch = returnFetchJson({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
