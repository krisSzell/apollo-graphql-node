import { Request } from "express";

export interface IIncome {
	id?: any;
	budgetId: string;
	value: number;
	createdAt?: number;
	comment?: string;
}

export interface IIncomeRequest extends Request {
	body: IIncome;
}
