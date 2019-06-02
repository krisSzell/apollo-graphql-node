import incomesRepository from "@repositories/incomesRepository";
import { DataSource } from "apollo-datasource";

export default class IncomesDataSource extends DataSource {
	async all() {
		return await incomesRepository.getAll();
	}

	async byId(id: string) {
		return await incomesRepository.getById(id);
	}
}

export const incomes = new IncomesDataSource();
