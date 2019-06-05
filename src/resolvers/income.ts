import { IDataSources } from "@dataSources/index";
import { IResolver } from "@resolvers/index";

export const income: IResolver = {
	Query: {
		incomes: async (_: any, __: any, { dataSources }: IDataSources) =>
			await dataSources.incomes.getAll(),
		income: (_: any, { id }: { id: string }, { dataSources }: IDataSources) =>
			dataSources.incomes.getById(id)
	}
	// Mutation: {
	//     addIncome(income: IncomeInput!): IncomeMutationResponse!
	// 	deleteIncome(id: ID!): ID!
	// }
};
