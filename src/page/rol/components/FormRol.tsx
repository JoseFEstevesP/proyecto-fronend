import { useCallback, useEffect, useMemo } from 'react';
import { FieldValues, useWatch } from 'react-hook-form';
import { Btn } from '../../../components/button/Btn';
import FormStyle from '../../../components/form/formStyle/FormStyle';
import { transformEnum } from '../../../helper/transformEnum';
import useRenderInputs from '../../../hooks/useRenderInputs';
import {
	Permission,
	permissionTranslations,
	RolType,
	RolTypeText,
} from '../enum/enum';
import { transformEnumPermissions } from '../function/transformEnumPermissions';
import { RolFormType } from '../interfaces';
import { rolMessages } from '../msg';
import styleBtn from './../../../components/button/Btn.module.scss';
import style from './FormRol.module.scss';

const FormRol = <T extends FieldValues>({
	handleSubmit,
	errors,
	control,
	register,
	loading,
	setValue,
}: RolFormType<T>) => {
	const { renderInput, renderSelectMultiple, renderSelect } =
		useRenderInputs<T>({
			control,
			errors,
			register,
		});

	const permissions: Permission[] = useWatch({
		control,
		name: 'permissions',
	});

	const permissionsData = useMemo(
		() =>
			transformEnumPermissions({
				transformEnum: Permission,
				text: permissionTranslations,
			}),
		[],
	);

	useEffect(() => {
		if (
			permissions?.includes(Permission.super) &&
			!(permissions.length === 1 && permissions[0] === Permission.super)
		) {
			setValue('permissions', [Permission.super]);
		}
	}, [permissions, setValue]);

	const renderPermissions = useCallback(() => {
		if (permissions?.includes(Permission.super)) {
			return permissionsData.filter(
				permission => permission.value === Permission.super,
			);
		}
		return permissionsData;
	}, [permissions, permissionsData]);

	return (
		<FormStyle className={style.formRol}>
			<form onSubmit={handleSubmit} className={style.formRol__form}>
				{renderInput({
					name: 'name',
					label: rolMessages.name.input.label,
					placeholder: rolMessages.name.input.placeholder,
					iconName: 'user',
				})}
				{renderInput({
					name: 'description',
					label: rolMessages.description.input.label,
					placeholder: rolMessages.description.input.placeholder,
					iconName: 'description',
				})}
				{renderSelectMultiple({
					name: 'permissions',
					label: rolMessages.permissions.input.label,
					placeholder: rolMessages.permissions.input.placeholder,
					options: renderPermissions(),
					iconName: 'rol',
					enableSearch: true,
				})}
				{renderSelect({
					name: 'typeRol',
					label: rolMessages.type.input.label,
					placeholder: rolMessages.type.input.placeholder,
					options: transformEnum({ transformEnum: RolType, text: RolTypeText }),
					iconName: 'typeRol',
				})}
				<Btn
					title={rolMessages.btn.default}
					className={`${styleBtn['btn--form']} ${style.formRol__btn}`}
					text={rolMessages.btn.default}
					type='submit'
					disabled={loading}
				/>
			</form>
		</FormStyle>
	);
};

export default FormRol;
