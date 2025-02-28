import { Input } from '../components/input/Input';
import { ErrorInput } from '../components/input/inputProps';

import { FieldValues } from 'react-hook-form';
import { InputFile } from '../components/inputFile/InputFile';
import { SelectMultiple } from '../components/select/SelectMultiple';
import { SelectSingle } from '../components/select/SelectSingle';
import {
	RenderInputType,
	RenderSelectMultipleType,
	RenderSelectType,
	UseRenderInputsType,
} from './useRenderInputsType';

const useRenderInputs = <T extends FieldValues>({
	register,
	errors,
	control,
}: UseRenderInputsType<T>) => {
	const renderInput = ({
		name,
		placeholder,
		label,
		type = 'text',
		className,
		iconName,
		disabled,
	}: RenderInputType) => (
		<Input
			name={name}
			placeholder={placeholder}
			type={type}
			register={register}
			error={errors && (errors[name] as ErrorInput)}
			label={label}
			className={className}
			iconName={iconName}
			disabled={disabled}
		/>
	);

	const renderInputFile = ({
		name,
		placeholder,
		label,
		type = 'file',
		className,
		iconName,
		disabled,
	}: RenderInputType) => (
		<InputFile
			name={name}
			placeholder={placeholder}
			type={type}
			register={register}
			error={errors && (errors[name] as ErrorInput)}
			label={label}
			className={className}
			iconName={iconName}
			disabled={disabled}
		/>
	);

	const renderSelect = ({
		name,
		placeholder,
		options,
		label,
		className,
		defaultValue,
		disabled,
		enableSearch,
		iconName,
	}: RenderSelectType) => (
		<SelectSingle<T>
			name={name}
			placeholder={placeholder}
			options={options}
			error={errors && (errors[name] as ErrorInput)}
			control={control}
			label={label}
			className={className}
			defaultValue={defaultValue}
			disabled={disabled}
			enableSearch={enableSearch}
			iconName={iconName}
		/>
	);

	const renderSelectMultiple = ({
		name,
		placeholder,
		options,
		label,
		className,
		defaultValue,
		disabled,
		enableSearch,
		iconName,
	}: RenderSelectMultipleType) => (
		<SelectMultiple
			name={name}
			placeholder={placeholder}
			options={options}
			error={errors && (errors[name] as ErrorInput)}
			control={control}
			label={label}
			className={className}
			defaultValue={defaultValue}
			disabled={disabled}
			enableSearch={enableSearch}
			iconName={iconName}
		/>
	);

	return { renderInput, renderSelect, renderSelectMultiple, renderInputFile };
};
export default useRenderInputs;
