import { UseFormSetValue } from 'react-hook-form';
import { UseRenderInputsType } from '../../hooks/useRenderInputsType';
import { UserAdminRolDTOSchemaType } from './dto/UserAdminRol.dto';
import { Permission } from './enum/enum';

export interface RolStructure {
	rows: RolResponse[];
	count: number;
	currentPage: number;
	nextPage: null;
	previousPage: null;
	limit: number;
	pages: number;
}

export interface RolResponse {
	uid: string;
	name: string;
	description: string;
	typeRol: string;
	permissions: Permission[];
}

export interface RolFormType<T> extends UseRenderInputsType<T> {
	handleSubmit: FormEventHandler<HTMLFormElement>;
	loading?: boolean;
	setValue: UseFormSetValue<UserAdminRolDTOSchemaType>;
}

interface DataUpdate extends UserAdminRolDTOSchemaType {
	uid: string;
}
