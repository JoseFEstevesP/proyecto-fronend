import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { API_ROUTES } from '../../../constants/apiRoutes';
import useUpdate from '../../../hooks/useUpdate';
import {
	UserAdminRolDTOSchema,
	UserAdminRolDTOSchemaType,
} from '../dto/UserAdminRol.dto';
import { DataUpdate } from '../interfaces';
import FormRol from './FormRol';

const FormUpdateRol = ({ data: dataDefault }: { data: DataUpdate }) => {
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
		defaultValues: dataDefault,
	});

	const { handleUpdate, loading } = useUpdate({ setError });

	const handleDataUpdateRol = useCallback(
		(data: UserAdminRolDTOSchemaType) => {
			handleUpdate({
				url: API_ROUTES.UPDATE_ROL,
				data: { ...dataDefault, ...data },
				reset,
				to: '/options/rol',
			});
		},
		[dataDefault, handleUpdate, reset],
	);

	return (
		<FormRol<UserAdminRolDTOSchemaType>
			handleSubmit={handleSubmit(handleDataUpdateRol)}
			control={control}
			errors={errors}
			register={register}
			loading={loading}
			setValue={setValue}
		/>
	);
};
export default FormUpdateRol;
