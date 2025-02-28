import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { API_ROUTES } from '../../../constants/apiRoutes';
import useRegister from '../../../hooks/useRegister';
import {
	UserAdminRolDTOSchema,
	UserAdminRolDTOSchemaType,
} from '../dto/UserAdminRol.dto';
import FormRol from './FormRol';

const FormRegisterRol = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		reset,
		setValue,
		setError,
	} = useForm<UserAdminRolDTOSchemaType>({
		resolver: zodResolver(UserAdminRolDTOSchema),
	});

	const { handleSubmitRegister, loading } =
		useRegister<UserAdminRolDTOSchemaType>({
			url: API_ROUTES.POST_REGISTER_ROL,
			setError,
		});

	const handleDataRegisterRol = useCallback(
		(data: UserAdminRolDTOSchemaType) => {
			handleSubmitRegister({
				data,
				reset,
				to: '/options/rol',
			});
		},
		[handleSubmitRegister, reset],
	);

	return (
		<FormRol<UserAdminRolDTOSchemaType>
			handleSubmit={handleSubmit(handleDataRegisterRol)}
			control={control}
			errors={errors}
			register={register}
			loading={loading}
			setValue={setValue}
		/>
	);
};

export default FormRegisterRol;
