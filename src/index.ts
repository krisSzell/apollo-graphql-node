import "module-alias/register";
import mongoose from "mongoose";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "@typeDefs/index";
import { resolvers } from "@resolvers/index";
import { dataSources } from "@dataSources/index";

require("custom-env").env(true);

const { MONGO_DB_CONNECTION_STRING = "", PORT = 8080 } = process.env;

mongoose.connect(MONGO_DB_CONNECTION_STRING, { useNewUrlParser: true });
mongoose.connection.once("open", () => console.log("Successfully connected to MongoDB!"));

const server = new ApolloServer({ typeDefs, resolvers, dataSources });
const app = express();
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
	console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
