import IncomesDataSource, { incomes } from "@dataSources/incomes";

export interface IDataSources {
	dataSources: {
		incomes: IncomesDataSource;
	};
}

export const dataSources = () => ({
	incomes
});
