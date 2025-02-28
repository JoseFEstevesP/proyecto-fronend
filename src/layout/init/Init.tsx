import { ReactElement } from 'react';
import Footer from '../../components/footer/Footer';
import { TitlePage } from '../../components/titlePage/TitlePage';
import style from './Init.module.scss';

const Init = ({
	title,
	children,
}: {
	title: string;
	children: ReactElement;
}) => {
	return (
		<TitlePage title={title}>
			<section className={style.init}>
				<main>{children}</main>
				<Footer />
			</section>
		</TitlePage>
	);
};
export default Init;
