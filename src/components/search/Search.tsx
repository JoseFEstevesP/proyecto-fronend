import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { system } from '../../systemText';
import { Btn } from '../button/Btn';
import { renderErrorMessage } from '../input/renderErrorMessage';
import { SearchDTOSchema, SearchDTOSchemaType } from './dto/search.dto';
import style from './Search.module.scss';
import { SearchProps } from './searchProps';

const Search = ({ handleData, classNames }: SearchProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<SearchDTOSchemaType>({
		resolver: zodResolver(SearchDTOSchema),
	});

	const submit = useCallback(
		(data: SearchDTOSchemaType) => {
			handleData({ search: data.search.trim() });
			reset();
		},
		[handleData, reset],
	);

	return (
		<form
			role='search'
			className={`${style.search} ${classNames}`}
			onSubmit={handleSubmit(submit)}
		>
			<div className={`${style.search__inputContainer} `} title='Buscar'>
				<input
					placeholder='Buscar...'
					type='search'
					{...register('search')}
					className={style.search__input}
					aria-invalid={!!errors.search}
					aria-describedby={errors.search ? 'search-error' : undefined}
				/>
				<Btn
					title={system.btn.search}
					type={'submit'}
					className={style.search__btn}
					icon={{
						iconName: 'search',
						type: 'fpIcons',
						className: style.search__icon,
					}}
				/>
			</div>
			{errors.search && (
				<span className={style.search__containerError}>
					{errors.search.message && renderErrorMessage(errors.search.message)}
				</span>
			)}
		</form>
	);
};

export default Search;
