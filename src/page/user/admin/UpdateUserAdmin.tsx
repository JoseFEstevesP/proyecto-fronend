import { useParams } from 'react-router-dom';
import Error404 from '../../error/404/Error404';
import style from './../../style/FormPageStyle.module.scss';
import FormUpdateUser from './components/FormUpdateUser';

const UpdateUserAdmin = () => {
	const { data } = useParams();

	if (!data) {
		return <Error404 />;
	}

	return (
		<section className={style.formPageStyle}>
			<FormUpdateUser data={JSON.parse(data ?? '{}')} />
		</section>
	);
};
export default UpdateUserAdmin;
