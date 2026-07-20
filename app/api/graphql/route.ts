import { dbConnect } from "@/app/libs/dbconnect";
import UserModel from "@/app/models/User.model";
import { gql } from "@apollo/client";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const typeDefs =gql`
  type User {
    name: String
    age: Int!
  }

  type DBUser{
     firstname:String
    lastname:String
    email:String
  }

  type Query {
    hello: String
    person: User
    userdb:[DBUser!]!
  }
`;

const resolvers = {
  Query: {
    hello: () => "This is what you should return",
    person: () => {
      return {
        name: "Onifade Joshua",
        age: 12,
      };
    },

    userdb:async()=>{
      await dbConnect()

      const users = await UserModel.find()
      console.log(users);
      

      return users
    }
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
