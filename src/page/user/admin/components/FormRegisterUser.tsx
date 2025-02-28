import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useContext } from 'react';
import { useForm } from 'react-hook-form';
import useModal from '../../../../components/modal/hooks/useModal';
import Modal from '../../../../components/modal/Modal';
import { API_ROUTES } from '../../../../constants/apiRoutes';
import { ContextToken } from '../../../../context/token/TokenContext';
import useRegister from '../../../../hooks/useRegister';
import { userMessages } from '../../msg';
import {
	UserAdminDTOSchemaType,
	UserAdminUserDTOSchema,
} from '../dto/UserAdminUser.dto';
import useRolAndPharmacy from '../hooks/useRolAndPharmacy';
import FormCodeActivation from './FormCodeActivation';
import FormUser from './FormUser';

const FormRegisterUser = () => {
	const { token } = useContext(ContextToken);
	const { isOpen, handleClose, handleOpen } = useModal({});
	const {  rolData } = useRolAndPharmacy();

	const formUserMethods = useForm<UserAdminDTOSchemaType>({
		resolver: zodResolver(UserAdminUserDTOSchema),
	});

	const { handleSubmitRegister, loading } = useRegister<UserAdminDTOSchemaType>(
		{
			url: token
				? API_ROUTES.POST_REGISTER_USER_PROTECTED
				: API_ROUTES.POST_REGISTER_USER,
			setError: formUserMethods.setError,
		},
	);

	const handleDataRegisterUser = useCallback(
		(data: UserAdminDTOSchemaType) => {
			handleSubmitRegister({
				data,
				reset: formUserMethods.reset,
				to: '/options/user/',
			});
		},
		[handleSubmitRegister, formUserMethods.reset],
	);

	return (
		<>
			{!token && (
				<Modal
					isOpen={isOpen}
					handleClose={handleClose}
					title={userMessages.register.active}
				>
					<FormCodeActivation handleClose={handleClose} />
				</Modal>
			)}
			<FormUser<UserAdminDTOSchemaType>
				handleSubmit={formUserMethods.handleSubmit(handleDataRegisterUser)}
				control={formUserMethods.control}
				errors={formUserMethods.formState.errors}
				register={formUserMethods.register}
				rolData={rolData}
				loading={loading}
				handleOpen={handleOpen}
				optionalPassword={true}
			/>
		</>
	);
};

export default FormRegisterUser;
