import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { useCallback, useContext } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Btn } from '../../../../components/button/Btn';
import styleBtn from '../../../../components/button/Btn.module.scss';
import LinkPer from '../../../../components/link/LinkPer';
import { API_ROUTES } from '../../../../constants/apiRoutes';
import { ContextMsg } from '../../../../context/msg/MsgContext';
import { processErrorResponse } from '../../../../functions/handleError';
import useRenderInputs from '../../../../hooks/useRenderInputs';
import { system } from '../../../../systemText';
import {
	RecoveryPassPasswordDTOSchema,
	RecoveryPassPasswordDTOSchemaType,
} from './dto/newPassword.dto';
import style from './Recovery.module.scss';

interface PasswordFormProps {
	setViewForm: React.Dispatch<
		React.SetStateAction<{
			email: boolean;
			code: boolean;
			password: boolean;
		}>
	>;
	handlePost: ({
		data,
		token,
		url,
	}: {
		data: {
			[key: string]: string;
		};
		token?: string;
		url: string;
	}) => Promise<{ msg: string }>;
	token: string;
}

const PasswordForm = ({
	handlePost,
	setViewForm: setVewForm,
	token,
}: PasswordFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RecoveryPassPasswordDTOSchemaType>({
		resolver: zodResolver(RecoveryPassPasswordDTOSchema),
	});
	const navigate = useNavigate();
	const { setMsg } = useContext(ContextMsg);
	const { renderInput } = useRenderInputs<RecoveryPassPasswordDTOSchemaType>({
		errors,
		register,
	});

	const handleDataNewPassword = useCallback(
		async (data: RecoveryPassPasswordDTOSchemaType) => {
			try {
				const res = await handlePost({
					data,
					url: API_ROUTES.POST_RECOVERY_NEW_PASSWORD,
					token,
				});
				if (res) {
					setMsg({ type: 'default', msg: res.msg });
					setVewForm({ email: true, code: false, password: false });
					navigate('/');
				}
			} catch (err) {
				const error = err as AxiosError;
				processErrorResponse({
					error: error.response?.data as FieldValues,
					setMsg,
				});
			}
		},
		[handlePost, navigate, setMsg, setVewForm, token],
	);

	return (
		<form
			className={style.recoveryForm__form}
			onSubmit={handleSubmit(handleDataNewPassword)}
		>
			{renderInput({
				name: 'newPassword',
				label: system.password.labelNew,
				placeholder: system.password.placeHolderNew,
				type: 'password',
				iconName: 'password',
			})}
			{renderInput({
				name: 'confirmPassword',
				label: system.password.labelNewRepeat,
				placeholder: system.password.placeHolderNewRepeat,
				type: 'password',
				iconName: 'password',
			})}
			<LinkPer
				to='/'
				text={system.login}
				icon={{ iconName: 'link', type: 'fpIcons' }}
			/>
			<Btn
				title='Recuperar la contraseña'
				text='Enviar'
				type='submit'
				className={styleBtn['btn--form']}
			/>
		</form>
	);
};

export default PasswordForm;
