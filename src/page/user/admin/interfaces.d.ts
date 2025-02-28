import { FormEventHandler } from 'react';
import { NationalityEnum, SexEnum } from '../../../enum/data';
import { UseRenderInputsType } from '../../../hooks/useRenderInputsType';
import { Permission } from '../rol/enum/permissions';

export interface UseRolAndPharmacy {
	url: string;
	setData: (data: ValueAll[]) => void;
	permission: Permission;
}

export interface UserFormType<T> extends UseRenderInputsType<T> {
	handleSubmit: FormEventHandler<HTMLFormElement>;
	rolData: ValueAll[] | null;
	loading?: boolean;
	handleOpen?: () => void;
	optionalPassword?: boolean;
	handleOpenUpdatePassword?: () => void;
}

export interface UserCodeActivation {
	handleClose: () => void;
}

export interface UserStructure {
	rows: UserResponse[];
	count: number;
	currentPage: number;
	nextPage: null;
	previousPage: null;
	limit: number;
	pages: number;
}

export interface UserResponse {
	uid: string;
	v_e: NationalityEnum;
	ci: string;
	first_name: string;
	middle_name: string;
	first_surname: string;
	last_surname: string;
	sex: SexEnum;
	phone: string;
	email: string;
	uidRol: string;
	uidPharmacy: null | string;
	rol: {
		name: string;
	};
	pharmacyAS: {
		name: string;
	} | null;
}

export interface DataUpdate extends UserAdminUserUpdateDTOSchemaType {
	uid: string;
}
