import { useState } from 'react';
import { logout } from '../../functions/logout';
import { Btn } from '../button/Btn';
import { Icons } from '../icon/Icons';
import LinkPer from '../link/LinkPer';
import ItemNav from './ItemNav';
import styles from './Menu.module.scss';
import { VerticalMenuProps } from './menuType';
import SubMenu from './SubMenu';

const MenuNew = ({ items, className }: VerticalMenuProps) => {
	const [active, setActive] = useState(false);
	const [showMenu, setShowMenu] = useState(true);

	return (
		<aside
			className={`${styles.menu}  ${showMenu ? styles['menu--show'] : ''} ${active ? styles['menu--active'] : ''} ${className}`}
		>
			<header
				className={`${styles.menu__header} ${active ? styles['menu__header--active'] : ''}`}
			>
				<Icons
					type='fpIcons'
					iconName='logo'
					className={`${styles.menu__logoMin} ${active ? styles['menu__logoMin--active'] : ''}`}
				/>
				<Btn
					title='boton menu'
					className={styles.menu__btn}
					onClick={() => setActive(!active)}
				>
					<div
						className={`${styles.menu__bar} ${active ? styles['menu__bar--active'] : ''}`}
					></div>
				</Btn>
				<Btn
					title='mostrar menu'
					className={`${styles.menu__btnShow} ${showMenu ? styles['menu__btnShow--show'] : ''} ${active ? styles['menu__btnShow--active'] : ''}`}
					onClick={() => setShowMenu(!showMenu)}
					icon={{
						iconName: 'arrow',
						type: 'fpIcons',
						className: `${styles.menu__iconArrow} ${showMenu ? styles['menu__iconArrow--show'] : ''}`,
					}}
				/>
			</header>

			<div
				className={`${styles.menu__contentLogoutAndProfile} ${active ? styles['menu__contentLogoutAndProfile--active'] : ''}`}
			>
				<LinkPer
					to='/options/profile'
					className={styles.menu__linkProfile}
					icon={{
						iconName: 'profile',
						type: 'fpIcons',
						className: styles.menu__iconLink,
					}}
				/>
				<Btn
					title='Cerrar sesión'
					onClick={logout}
					icon={{
						iconName: 'exit',
						type: 'fpIcons',
						className: styles.menu__iconLink,
					}}
				/>
			</div>

			<nav className={styles.menu__nav}>
				<ul className={styles.menu__list}>
					{items.map((item, index) => (
						<li key={index} className={styles.menu__item}>
							{item?.sub ? (
								<SubMenu key={index} item={item} active={active} />
							) : (
								<ItemNav key={index} item={item} active={active} />
							)}
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
};
export default MenuNew;
