import { Icons } from '../icon/Icons';
import style from './Loader.module.scss';

const Loader = ({ classNames }: { classNames?: string }) => {
	return (
		<div className={`${style.loader} ${classNames}`}>
			<Icons iconName='logo' type='fpIcons' className={style.loader__icon} />
			<div className={style.loader__sniper}></div>
		</div>
	);
};
export default Loader;
