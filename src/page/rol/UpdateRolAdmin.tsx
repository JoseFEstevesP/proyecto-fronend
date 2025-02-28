import { useParams } from 'react-router-dom';
import Error404 from '../error/404/Error404';
import style from './../style/FormPageStyle.module.scss';
import FormUpdateRol from './components/FormUpdateRol';

const UpdateRolAdmin = () => {
	const { data } = useParams();

	if (!data) {
		return <Error404 />;
	}

	return (
		<section className={style.formPageStyle}>
			<FormUpdateRol data={JSON.parse(data ?? '{}')} />
		</section>
	);
};
export default UpdateRolAdmin;
