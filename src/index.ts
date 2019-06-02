import mongoose from "mongoose";
import { ApolloServer, IResolvers } from "apollo-server";
import { typeDefs } from "@typeDefs/index";
import { resolvers } from "@resolvers/index";
import { dataSources } from "@dataSources/index";



require("custom-env").env(true);

const { MONGO_DB_CONNECTION = "", PORT = 8080 } = process.env;
// import router from "./router";
// import { connectionString } from "./secrets";
// const { PORT = 8080 } = process.env;

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});

// console.log(MONGO_DB_CONNECTION);

// const db = mongoose.connection;
// mongoose.connect(MONGO_DB_CONNECTION);
