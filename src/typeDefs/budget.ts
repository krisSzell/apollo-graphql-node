import { gql } from "apollo-server";

export const budget = gql`
	type Budget {
		id: ID!
		year: Int!
		month: Int!
		incomes: [Income]
		expenses: [Expense]
	}
	extend type Query {
		budgets: [Budget]!
		budget(id: ID!): Budget
	}
`;
