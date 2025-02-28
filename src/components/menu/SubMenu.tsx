import { useState } from 'react';
import { Btn } from '../button/Btn';
import { Icons } from '../icon/Icons';
import ItemNav from './ItemNav';
import styles from './Menu.module.scss';
import { MenuItem } from './menuType';

const SubMenu = ({ item, active }: { item: MenuItem; active: boolean }) => {
	const [show, setShow] = useState(false);
	return (
		<nav className={styles.subMenu}>
			<Btn
				title={item.text}
				className={`${styles.subMenu__btn} ${active ? styles['subMenu__btn--active'] : ''}`}
				onClick={() => setShow(!show)}
			>
				<Icons
					iconName={item.icon}
					className={`${styles.subMenu__iconLink} `}
					type='fpIcons'
				/>
				<b
					className={`${styles.menu__text} ${active ? styles['menu__text--active'] : ''}`}
				>
					{item.text}
				</b>
				<Icons
					iconName='arrow'
					className={`${styles.subMenu__iconSub} ${active ? styles['subMenu__iconSub--active'] : ''}`}
					type='fpIcons'
				/>
			</Btn>

			<ul
				className={`${styles.subMenu__list} ${show ? styles['subMenu__list--show'] : ''}`}
			>
				{item.sub?.map((subItem, index) => (
					<li key={index} className={styles.subMenu__item}>
						<ItemNav key={index} item={subItem} active={active} />
					</li>
				))}
			</ul>
		</nav>
	);
};
export default SubMenu;
