import { ReactElement } from 'react';
import Footer from '../../components/footer/Footer';
import MenuNew from '../../components/menu/MenuNew';
import { MenuItem } from '../../components/menu/menuType';
import { TitlePage } from '../../components/titlePage/TitlePage';
import style from './DefaultPage.module.scss';

const DefaultPage = ({
	title,
	children,
	itemMenu,
}: {
	title: string;
	children: ReactElement;
	itemMenu: MenuItem[];
}) => {
	return (
		<TitlePage title={title}>
			<section className={style.defaultPage}>
				<MenuNew className={style.defaultPage__menu} items={itemMenu} />
				<main className={style.defaultPage__main}>{children}</main>
				<Footer className={style.defaultPage__footer} />
			</section>
		</TitlePage>
	);
};
export default DefaultPage;
