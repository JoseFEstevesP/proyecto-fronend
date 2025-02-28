import { useCallback } from 'react';
import style from './Image.module.scss';

const Image = ({
	url,
	title,
	openModal,
	alt = 'image',
	classNames,
}: {
	url: string;
	alt?: string;
	title?: string;
	openModal?: (url: string, title?: string) => void;
	classNames?: string;
}) => {
	const handleDataImage = useCallback(() => {
		if (!openModal) return;
		openModal(url, title);
	}, [openModal, title, url]);

	return (
		<div className={`${style.image} ${classNames}`}>
			{title && <h3 className={style.image__title}>{title}</h3>}

			<div className={style.image__container}>
				<img
					src={url}
					alt={title ?? alt}
					onClick={handleDataImage}
					className={style.image__img}
				/>
			</div>
		</div>
	);
};
export default Image;
