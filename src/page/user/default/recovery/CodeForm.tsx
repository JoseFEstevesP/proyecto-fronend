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
	RecoveryPassCodeDTOSchema,
	RecoveryPassCodeDTOSchemaType,
} from './dto/code.dto';
import { CodeFormProps } from './dto/recoveryType';
import style from './Recovery.module.scss';

const CodeForm = ({
	handlePost,
	email,
	setToken,
	setViewForm: setVewForm,
}: CodeFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RecoveryPassCodeDTOSchemaType>({
		resolver: zodResolver(RecoveryPassCodeDTOSchema),
	});
	const { setMsg } = useContext(ContextMsg);
	const { renderInput } = useRenderInputs<RecoveryPassCodeDTOSchemaType>({
		errors,
		register,
	});

	const handleDataCode = useCallback(
		async (data: RecoveryPassCodeDTOSchemaType) => {
			const newData = email ? { ...data, email } : data;
			try {
				const res = await handlePost({
					data: newData,
					url: API_ROUTES.POST_RECOVERY_CODE,
				});
				if (res) {
					setVewForm({ email: false, code: false, password: true });
					setToken(res.token);
				}
			} catch (err) {
				const error = err as AxiosError;
				processErrorResponse({
					error: error.response?.data as FieldValues,
					setMsg,
				});
			}
		},
		[email, handlePost, setMsg, setToken, setVewForm],
	);

	return (
		<form
			className={style.recoveryForm__form}
			onSubmit={handleSubmit(handleDataCode)}
		>
			{renderInput({
				name: 'code',
				placeholder: system.code.placeHolder,
				label: system.code.label,
				iconName: 'shield',
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

export default CodeForm;
