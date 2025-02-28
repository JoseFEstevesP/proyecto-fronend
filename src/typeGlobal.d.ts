import { OrderEnum } from './enum/data';

export interface Error {
	message: string;
	property?: string;
}

export interface ErrorType {
	errors: Error[];
}

export interface ParamsData {
	status?: boolean;
	limit?: string;
	page?: number;
	orderProperty?: string;
	order?: OrderEnum;
	search?: string;
}

export interface ParamsDataGet extends ParamsData {
	[key: string]: string | number | boolean | undefined | FileList;
}

export interface FindAllData<T> {
	rows: T[];
	count: number;
	currentPage: number;
	nextPage: null;
	previousPage: null;
	limit: number;
	pages: number;
}

interface ValueAll {
	value: string;
	label: string;
}
