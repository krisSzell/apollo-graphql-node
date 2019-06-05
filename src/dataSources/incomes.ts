import incomesRepository from "@repositories/incomesRepository";
import { DataSource } from "apollo-datasource";

export default class IncomesDataSource extends DataSource {
	getAll = async () => await incomesRepository.getAll();
	getById = async (id: string) => await incomesRepository.getById(id);
}

export const incomes = new IncomesDataSource();
