import { Icons } from '../icon/Icons';
import style from './Btn.module.scss';
import { BtnProps } from './btnProps';

export const Btn = ({
	className = '',
	disabled = false,
	icon = { className: '', iconName: '', type: 'fpIcons' },
	title,
	text,
	type = 'button',
	children,
	...props
}: BtnProps) => {
	return (
		<button
			title={title}
			type={type}
			className={`${style.btn} ${disabled ? style['btn--disabled'] : ''} ${className} `}
			disabled={disabled}
			aria-disabled={disabled}
			aria-label={title}
			aria-hidden={disabled}
			{...(disabled && { tabIndex: -1 })}
			{...props}
		>
			{text || children}
			{icon.iconName && (
				<Icons
					iconName={icon.iconName}
					className={`${icon.className} ${style.btn__icon}`}
					type={icon.type}
				/>
			)}
			{disabled && (
				<Icons
					iconName='padlock'
					className={style.btn__iconDisabled}
					type='fpIcons'
				/>
			)}
		</button>
	);
};
