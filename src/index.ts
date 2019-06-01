import mongoose from "mongoose";
import { ApolloServer } from "apollo-server";
import { typeDefs } from "./typeDefs";
require("custom-env").env(true);

const { MONGO_DB_CONNECTION = "", PORT = 8080 } = process.env;
// import router from "./router";
// import { connectionString } from "./secrets";
// const { PORT = 8080 } = process.env;

const server = new ApolloServer({ typeDefs });

console.log(MONGO_DB_CONNECTION);

const db = mongoose.connection;
mongoose.connect(MONGO_DB_CONNECTION);
