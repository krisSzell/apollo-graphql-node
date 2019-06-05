import { gql } from "apollo-server-express";
import { user } from "./user";
import { income } from "@typeDefs/income";
import { expense } from "@typeDefs/expense";
import { budget } from "@typeDefs/budget";

const root = gql`
	type Query {
		root: String
	}
	type Mutation {
		root: String
	}
	interface MutationResponse {
		success: Boolean!
		message: String
	}
`;

export const typeDefs = [root, user, income, expense, budget];
