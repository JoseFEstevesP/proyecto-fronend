import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Btn } from '../../../../components/button/Btn';
import { API_ROUTES } from '../../../../constants/apiRoutes';
import useRenderInputs from '../../../../hooks/useRenderInputs';
import useUpdate from '../../../../hooks/useUpdate';
import { userMessages } from '../../msg';
import {
	UserUpdatePasswordAdminUserDTOSchema,
	UserUpdatePasswordAdminUserDTOSchemaType,
} from '../dto/UserUpdatePasswordAdmin.dto';
import styleBtn from './../../../../components/button/Btn.module.scss';
import style from './UpdatePassword.module.scss';

const UpdatePassword = ({ uidUser }: { uidUser: string }) => {
	const {
		handleSubmit,
		formState: { errors },
		reset,
		register,
		setError,
	} = useForm<UserUpdatePasswordAdminUserDTOSchemaType>({
		resolver: zodResolver(UserUpdatePasswordAdminUserDTOSchema),
	});

	const { loading, handleUpdate } = useUpdate({ setError });

	const { renderInput } = useRenderInputs({
		register,
		errors,
	});

	useEffect(() => {
		if (uidUser) {
			reset({ uidUser });
		}
	}, [reset, uidUser]);

	const handleRegister = useCallback(
		(data: UserUpdatePasswordAdminUserDTOSchemaType) => {
			handleUpdate({
				reset,
				data: { ...data, uidUser },
				url: API_ROUTES.UPDATE_PASSWORD,
				to: '/options/user/',
			});
		},
		[handleUpdate, reset, uidUser],
	);

	return (
		<form
			className={style.updatePassword}
			onSubmit={handleSubmit(handleRegister)}
		>
			{renderInput({
				name: 'newPassword',
				placeholder: userMessages.password.update.placeHolderNew,
				label: userMessages.password.update.labelNew,
				type: 'password',
				iconName: 'password',
			})}
			{renderInput({
				name: 'confirmPassword',
				placeholder: userMessages.password.update.placeHolderNewRepeat,
				label: userMessages.password.update.labelNewRepeat,
				type: 'password',
				iconName: 'password',
			})}
			<Btn
				title={userMessages.btn.default}
				className={`${styleBtn['btn--form']}`}
				text={userMessages.btn.default}
				type='submit'
				disabled={loading}
			/>
		</form>
	);
};
export default UpdatePassword;
