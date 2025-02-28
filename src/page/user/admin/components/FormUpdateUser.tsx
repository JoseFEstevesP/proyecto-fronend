import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useModal from '../../../../components/modal/hooks/useModal';
import Modal from '../../../../components/modal/Modal';
import { API_ROUTES } from '../../../../constants/apiRoutes';
import { ContextToken } from '../../../../context/token/TokenContext';
import useGet from '../../../../hooks/useGet';
import useUpdate from '../../../../hooks/useUpdate';
import useValidate from '../../../../hooks/useValidate';
import { ValueAll } from '../../../../typeGlobal';
import { Permission } from '../../../rol/enum/enum';
import { userMessages } from '../../msg';
import {
	UserAdminUserUpdateDTOSchema,
	UserAdminUserUpdateDTOSchemaType,
} from '../dto/UserAdminUserUpdate.dto';
import { DataUpdate } from '../interfaces';
import FormUser from './FormUser';
import UpdatePassword from './UpdatePassword';

const FormUpdateUser = ({ data: dataDefault }: { data: DataUpdate }) => {
	const { token } = useContext(ContextToken);
	const formUserMethods = useForm<UserAdminUserUpdateDTOSchemaType>({
		resolver: zodResolver(UserAdminUserUpdateDTOSchema),
		defaultValues: dataDefault,
	});

	const { handleUpdate, loading } = useUpdate({
		setError: formUserMethods.setError,
	});

	const [rolData, setRolData] = useState<ValueAll[] | null>(null);

	const { getData } = useGet();
	const { handleData } = useValidate();
	const handleDataRol = useCallback(async () => {
		if (token && handleData({ per: Permission.rol })) {
			const rol = await getData({ url: API_ROUTES.GET_ROLES });
			setRolData(rol);
		}
		
	}, [getData, handleData, token]);

	useEffect(() => {
		handleDataRol();
	}, [handleDataRol]);

	const handleDataRegisterUser = useCallback(
		(data: UserAdminUserUpdateDTOSchemaType) => {
			handleUpdate({
				url: API_ROUTES.UPDATE_USER,
				data: { ...dataDefault, ...data },
				reset: formUserMethods.reset,
				to: '/options/user/',
			});
		},
		[dataDefault, formUserMethods.reset, handleUpdate],
	);

	const updatePasswordModal = useModal({});

	return (
		<>
			<Modal
				handleClose={updatePasswordModal.handleClose}
				isOpen={updatePasswordModal.isOpen}
				title={userMessages.password.update.title}
			>
				<UpdatePassword uidUser={dataDefault.uid} />
			</Modal>
			<FormUser<UserAdminUserUpdateDTOSchemaType>
				handleSubmit={formUserMethods.handleSubmit(handleDataRegisterUser)}
				control={formUserMethods.control}
				errors={formUserMethods.formState.errors}
				register={formUserMethods.register}
				rolData={rolData}
				loading={loading}
				handleOpenUpdatePassword={updatePasswordModal.handleOpen}
			/>
		</>
	);
};
export default FormUpdateUser;
