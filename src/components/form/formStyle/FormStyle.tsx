import { Icons } from '../../icon/Icons';
import style from './FormStyle.module.scss';

const FormStyle = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<section className={`${style.formStyle} ${className}`}>
			<h1 className={style.formStyle__logo}>
				<Icons type='fpIcons' iconName='logo' />
			</h1>
			{children}
		</section>
	);
};
export default FormStyle;
