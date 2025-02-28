import { Login } from '../../../components/login/Login';
import Init from '../../../layout/init/Init';

export const LoginUser = () => {
	return (
		<Init title='Inicio'>
			<Login to='options' />
		</Init>
	);
};
