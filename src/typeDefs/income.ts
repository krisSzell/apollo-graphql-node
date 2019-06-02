import { gql } from "apollo-server";

export const income = gql`
	type Income {
		id: ID!
		budgetId: String!
		value: Int!
		createdAt: Int!
		comment: String
	}
	extend type Query {
		incomes: [Income]!
		income(id: ID!): Income
	}
	input IncomeInput {
		budgetId: String!
		value: Int!
		comment: String
	}
	type IncomeMutationResponse implements MutationResponse {
		income: Income
		success: Boolean!
		message: String
	}
	extend type Mutation {
		addIncome(income: IncomeInput!): IncomeMutationResponse!
		deleteIncome(id: ID!): ID!
	}
`;
