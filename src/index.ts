import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
require("custom-env").env(true);

const { MONGO_DB_CONNECTION = "", PORT = 8080 } = process.env;
// import router from "./router";
// import { connectionString } from "./secrets";
// const { PORT = 8080 } = process.env;

console.log(MONGO_DB_CONNECTION);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mongoose.connection;
mongoose.connect(MONGO_DB_CONNECTION);

app.get("/", (_req: any, res: any) => res.send("Hello World with Express"));
// app.use("/api", router);

if (require.main === module) {
	app.listen(PORT, () => {
		console.log(`Running BudgetApp on port ${PORT}`);
	});
}

export default app;
