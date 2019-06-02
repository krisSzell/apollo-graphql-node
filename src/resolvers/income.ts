import { IDataSources } from "@dataSources/index";
import { IResolver } from "@resolvers/index";

export const income: IResolver = {
	Query: {
		incomes: (_: any, __: any, { dataSources }: IDataSources) => dataSources.incomes.all(),
		income: (_: any, { id }: { id: string }, { dataSources }: IDataSources) =>
			dataSources.incomes.byId(id)
	}
};
