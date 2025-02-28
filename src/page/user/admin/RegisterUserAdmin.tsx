import style from './../../style/FormPageStyle.module.scss';
import FormRegisterUser from './components/FormRegisterUser';

const RegisterUserAdmin = () => {
	return (
		<section className={style.formPageStyle}>
			<FormRegisterUser />
		</section>
	);
};
export default RegisterUserAdmin;
