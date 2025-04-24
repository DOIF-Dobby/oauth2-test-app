import { createDehydrator } from "../factories/create-dehydrator";
import { getQueryClient } from "./get-query-client";

export const { getDehydratedQuery, getDehydratedQueries, Hydrate } =
  createDehydrator({ getQueryClient });
