import { Link } from 'react-router-dom';
import { Icons } from '../icon/Icons';
import style from './LinkPer.module.scss';
import { LinkProp } from './linkPerType';

const LinkPer = ({
	to,
	text,
	icon = { className: '', iconName: '', type: 'fpIcons' },
	className,
}: LinkProp) => {
	return (
		<Link to={to} className={`${style.link} ${className}`}>
			{text && <span className={style.link__text}>{text}</span>}
			{icon.iconName && (
				<Icons
					type={icon.type}
					iconName={icon.iconName}
					className={`${style.link__icon} ${icon.className}`}
				/>
			)}
		</Link>
	);
};
export default LinkPer;
