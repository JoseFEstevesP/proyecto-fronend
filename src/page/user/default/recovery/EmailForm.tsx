import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { useCallback, useContext } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Btn } from '../../../../components/button/Btn';
import LinkPer from '../../../../components/link/LinkPer';
import { API_ROUTES } from '../../../../constants/apiRoutes';
import { ContextMsg } from '../../../../context/msg/MsgContext';
import { processErrorResponse } from '../../../../functions/handleError';
import useRenderInputs from '../../../../hooks/useRenderInputs';
import { system } from '../../../../systemText';
import styleBtn from './../../../../components/button/Btn.module.scss';
import {
	RecoveryPassEmailDTOSchema,
	RecoveryPassEmailDTOSchemaType,
} from './dto/email.dto';
import { EmailFormProps } from './dto/recoveryType';
import style from './Recovery.module.scss';

const EmailForm = ({ setViewForm, handlePost, setEmail }: EmailFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RecoveryPassEmailDTOSchemaType>({
		resolver: zodResolver(RecoveryPassEmailDTOSchema),
	});

	const { setMsg } = useContext(ContextMsg);
	const { renderInput } = useRenderInputs<RecoveryPassEmailDTOSchemaType>({
		errors,
		register,
	});

	const handleDataEmail = useCallback(
		async (data: RecoveryPassEmailDTOSchemaType) => {
			try {
				const response = await handlePost({
					data,
					url: API_ROUTES.POST_RECOVERY_PASSWORD,
				});

				if (response) {
					setMsg({ type: 'default', msg: response.msg });
					setViewForm({ email: false, code: true, password: false });
					setEmail(data.email);
				}
			} catch (err) {
				const error = err as AxiosError;
				processErrorResponse({
					error: error.response?.data as FieldValues,
					setMsg,
				});
			}
		},
		[handlePost, setEmail, setMsg, setViewForm],
	);

	return (
		<form
			className={style.recoveryForm__form}
			onSubmit={handleSubmit(handleDataEmail)}
		>
			{renderInput({
				name: 'email',
				placeholder: system.email.placeHolder,
				label: system.email.label,
				type: 'email',
				iconName: 'email',
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

export default EmailForm;
