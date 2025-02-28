import { NavLink } from 'react-router-dom';
import { Icons } from '../icon/Icons';
import styles from './Menu.module.scss';
import { MenuItem } from './menuType';

const ItemNav = ({ item, active }: { item: MenuItem; active: boolean }) => {
	return (
		item.to && (
			<NavLink
				title={item.text}
				to={item.to}
				className={({ isActive }) =>
					`${styles.menu__link} ${isActive ? styles['menu__link--routeActive'] : ''} ${active ? styles['menu__link--active'] : ''}`
				}
				end
			>
				<Icons
					iconName={item.icon}
					type='fpIcons'
					className={styles.menu__iconLink}
				/>
				<b
					className={`${styles.menu__text} ${active ? styles['menu__text--active'] : ''}`}
				>
					{item.text}
				</b>
			</NavLink>
		)
	);
};
export default ItemNav;
