import { gql } from "@apollo/client";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const typeDefs = gql`
  type User {
    name: String
    age: Int!
  }
  type Query {
    hello: String
    person: User
  }
`;

const resolvers = {
  Query: {
    hello: () => "This is what you should return",
    person: () => {
      return {
        name: "Onifade Joshua",
        age:12
      };
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(apolloServer);
export const GET = (request: Request) => {
  return handler(request);
};

export const POST = (request: Request) => {
  return handler(request);
};
