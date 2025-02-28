import { UseFormRegister } from 'react-hook-form';
import { ErrorStructure } from '../../typeGlobal';

type FormValues<T> = T;

export type ErrorInput = ErrorStructure | undefined;

export type TypeInput =
	| 'text'
	| 'number'
	| 'search'
	| 'date'
	| 'email'
	| 'password'
	| 'file';

export interface InputProps {
	name: string;
	placeholder?: string;
	error: ErrorInput;
	className?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	register: UseFormRegister<FormValues<any>>;
	type?: TypeInput;
	label?: string;
	disabled?: boolean;
	iconName?: string;
}
