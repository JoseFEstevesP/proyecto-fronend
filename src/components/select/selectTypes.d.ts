import { Control } from 'react-hook-form';
import { ValueAll } from '../../typeGlobal';
import { ErrorInput } from '../input/inputProps';

export interface SelectProps<T> {
	name: Path<T>;
	label?: string;
	placeholder: string;
	options: ValueAll[];
	error: ErrorInput;
	className?: string;
	defaultValue?: string;
	disabled?: boolean;
	enableSearch?: boolean;
	iconName?: string;
	control: Control<T>;
}

export interface SelectMultipleProps<T> extends SelectProps<T> {
	defaultValue?: string[];
}
