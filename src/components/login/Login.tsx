import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { ContextToken } from '../../context/token/TokenContext';
import useRenderInputs from '../../hooks/useRenderInputs';
import { userMessages } from '../../page/user/msg';
import { Btn } from '../button/Btn';
import styleBtn from '../button/Btn.module.scss';
import FormStyle from '../form/formStyle/FormStyle';
import LinkPer from '../link/LinkPer';
import { LoginDTOSchema, LoginDTOSchemaType } from './dto/login.dto';
import useLogin from './hooks/useLogin';
import style from './Login.module.scss';
import { LoginProperty } from './loginProps';

export const Login = ({ to = '' }: LoginProperty) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<LoginDTOSchemaType>({ resolver: zodResolver(LoginDTOSchema) });

	const { handleSubmitLogin, loading } = useLogin({ setError });

	const { renderInput } = useRenderInputs<LoginDTOSchemaType>({
		errors,
		register,
	});

	const { token } = useContext(ContextToken);
	if (token) return <Navigate to={to} />;

	return (
		<FormStyle className={style.login}>
			<form
				onSubmit={handleSubmit(handleSubmitLogin)}
				className={style.login__form}
			>
				{renderInput({
					name: 'ci',
					label: userMessages.ci.input.label,
					placeholder: userMessages.ci.input.placeHolder,
					iconName: 'ci',
					type: 'number',
				})}
				{renderInput({
					name: 'password',
					label: userMessages.password.input.label,
					placeholder: userMessages.password.input.placeHolder,
					type: 'password',
					iconName: 'password',
				})}
				<div className={style.login__linksContainer}>
					<LinkPer
						to='/registerUser'
						className={style.login__links}
						text={userMessages.login.register}
						icon={{
							iconName: 'link',
							type: 'fpIcons',
							className: style.login__linksIcon,
						}}
					/>
					<LinkPer
						to='/recovery'
						className={style.login__links}
						text={userMessages.login.forgotPassword}
						icon={{
							iconName: 'link',
							type: 'fpIcons',
							className: style.login__linksIcon,
						}}
					/>
				</div>
				<Btn
					title={userMessages.login.loginBtn}
					className={styleBtn['btn--form']}
					text={userMessages.login.loginBtn}
					type='submit'
					disabled={loading}
				/>
			</form>
		</FormStyle>
	);
};
