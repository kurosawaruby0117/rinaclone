require("dotenv").config();

import logger from "morgan"
import express from "express"
import {ApolloServer,gql} from "apollo-server-express";


import {typeDefs,resolvers} from "./schema";
import { getUser } from "./users/users.utils";


const server=new ApolloServer({
    resolvers,
    typeDefs,
    introspection: true,
    playground: true,
    context:async({req})=>{
        return {
           user:await getUser(req.headers.token)
    }}
})

const PORT=process.env.PORT;

const app=express();
app.use(logger("tiny"));
app.use("/static",express.static(("upload")));
server.applyMiddleware({ app });
app.listen({port:PORT},()=>{
    console.log(`Server is running on http://localhost:4000/graphql`)
});

  