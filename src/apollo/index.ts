import { ApolloClient, InMemoryCache } from '@apollo/client';

const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql`;
export const client = new ApolloClient({
  uri: apiUrl,
  cache: new InMemoryCache(),
});
