import { Btn } from '../button/Btn';
import style from './Modal.module.scss';
import { ModalProps } from './modalProps';

const Modal = ({
	className = '',
	children,
	isOpen,
	handleClose,
	title,
}: ModalProps) => {
	return (
		<dialog className={`${className} ${style.modal}`} open={isOpen}>
			<section
				className={`${style.modal__content} ${isOpen ? style['modal__content--open'] : ''}`}
			>
				<div className={style.modal__header}>
					<h2 className={style.modal__title}>{title}</h2>
					<Btn
						className={style.modal__btn}
						icon={{
							iconName: 'close',
							className: `${style.modal__icon}`,
							type: 'fpIcons',
						}}
						onClick={handleClose}
					/>
				</div>
				<div className={style.modal__children}>{children}</div>
			</section>
		</dialog>
	);
};
export default Modal;
