import LinkPer from '../../../components/link/LinkPer';
import style from './Error404.module.scss';

const Error404 = () => {
	return (
		<section className={style.error404}>
			<div className={style.error404__content}>
				<h1 className={style.error404__title}>!Error 404¡</h1>
				<h2 className={style.error404__subTitle}>Página no encontrada</h2>
				<p className={style.error404__paragraph}>
					Lo sentimos, la página que estás buscando no existe o ha sido
					eliminada.
				</p>
				<LinkPer
					to='/'
					text='Volver al inicio'
					className={style.error404__link}
					icon={{
						iconName: 'link',
						type: 'fpIcons',
					}}
				/>
			</div>
		</section>
	);
};
export default Error404;
