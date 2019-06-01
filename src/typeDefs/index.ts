import { gql } from "apollo-server";
import { user } from "./user";

const root = gql`
	type Query {
		root: String
	}
	type Mutation {
		root: String
	}
`;

export const typeDefs = [root, user];
