import { useState } from 'react';
import FormStyle from '../../../../components/form/formStyle/FormStyle';
import usePost from '../../../../hooks/usePost';
import Init from '../../../../layout/init/Init';
import CodeForm from './CodeForm';
import EmailForm from './EmailForm';
import PasswordForm from './NewPasswordForm';
import style from './Recovery.module.scss';

const RecoveryPassword = () => {
	const [email, setEmail] = useState<string | null>(null);
	const [token, setToken] = useState<string | null>(null);
	const { handlePost } = usePost({});

	const [viewForm, setViewForm] = useState({
		email: true,
		code: false,
		password: false,
	});

	const renderForm = () => {
		if (viewForm.email) {
			return (
				<EmailForm
					setEmail={setEmail}
					setViewForm={setViewForm}
					handlePost={handlePost}
				/>
			);
		}

		if (viewForm.code && email) {
			return (
				<CodeForm
					email={email}
					handlePost={handlePost}
					setToken={setToken}
					setViewForm={setViewForm}
				/>
			);
		}

		if (viewForm.password && token) {
			return (
				<PasswordForm
					handlePost={handlePost}
					setViewForm={setViewForm}
					token={token}
				/>
			);
		}

		return null;
	};

	return (
		<Init title='Recuperar contraseña'>
			<FormStyle className={style.recoveryForm}>{renderForm()}</FormStyle>
		</Init>
	);
};

export default RecoveryPassword;
