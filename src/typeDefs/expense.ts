import { gql } from "apollo-server";

export const expense = gql`
	type Expense {
		id: ID!
		budgetId: String!
		value: Int!
		createdAt: Int!
		comment: String
	}
	extend type Query {
		expenses: [Expense]!
		expense(id: ID!): Expense
	}
	input ExpenseInput {
		budgetId: String!
		value: Int!
		comment: String
	}
	type ExpenseMutationResponse implements MutationResponse {
		expense: Expense
		success: Boolean!
		message: String
	}
	extend type Mutation {
		addExpense(expense: ExpenseInput!): ExpenseMutationResponse!
		deleteExpense(id: ID!): ID!
	}
`;
