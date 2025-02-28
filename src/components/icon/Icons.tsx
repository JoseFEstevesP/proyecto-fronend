import { useEffect, useState } from 'react';
import { IconParameter } from './icon';
import style from './Icons.module.scss';

const iconPack = {
	fpIcons: import('./../../assets/icon-min.svg'),
};

export const Icons = ({
	className = '',
	iconName,
	type = 'fpIcons',
}: IconParameter) => {
	const [typeIconPack, setTypeIconPack] = useState<string>();

	useEffect(() => {
		(iconPack[type] as Promise<{ default: string }>).then(res => {
			setTypeIconPack(res.default);
		});
	}, [type]);

	return (
		<svg
			role='img'
			className={`${style.icon} ${className} `}
			aria-hidden='true'
		>
			<use href={`${typeIconPack}#${iconName}`}></use>
		</svg>
	);
};
