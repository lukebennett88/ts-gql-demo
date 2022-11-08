import { createFetcher } from "@ts-gql/fetch";

export const fetchGraphQL = createFetcher(process.env.GRAPHQL_API_URL!);
