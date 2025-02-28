import React from 'react';
import { system } from '../../systemText';
import { Btn } from '../button/Btn';
import style from './Search.module.scss';
import { SearchInputProps } from './searchProps';

const SearchImport: React.FC<SearchInputProps> = ({ onChange }) => {
	return (
		<>
			<div
				className={`${style.search__inputContainer} ${style['search__inputContainer--borderBottom']}`}
				title='Buscar'
			>
				<input
					placeholder='Buscar...'
					type='search'
					className={style.search__input}
					onChange={e => onChange?.(e.target.value)}
					form={'search'}
				/>
				<Btn
					title={system.btn.search}
					type={'button'}
					className={style.search__btn}
					icon={{
						iconName: 'search',
						type: 'fpIcons',
						className: style.search__icon,
					}}
				/>
			</div>
		</>
	);
};

export default SearchImport;
