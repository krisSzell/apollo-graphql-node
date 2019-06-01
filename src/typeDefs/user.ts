import { gql } from "apollo-server";

export const user = gql`
	type User {
		id: String!
		firstName: String
		lastName: String
		email: String
	}

	extend type Query {
		users: [User]!
	}

	extend type Mutation {
		registerUser(
			firstName: String!
			lastName: String!
			email: String!
			password: String!
			confirmPassword: String!
		): User!
		deleteUser(id: String!, email: String!, password: String!, confirmPassword: String!): User!
	}
`;
