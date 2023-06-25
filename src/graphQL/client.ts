import { GraphQLClient } from 'graphql-request'

export const client = new GraphQLClient(
  import.meta.env.VITE_TREND_TROVE_GRAPHQL_URL,
  {
    headers: {
      Authorization: import.meta.env.VITE_AUTHORIZATION_KEY,
    },
  }
)
