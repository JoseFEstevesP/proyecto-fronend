import { Btn } from '../button/Btn';
import style from './Pagination.module.scss';
import { PaginationProps } from './paginationType';

const Pagination = ({ pages, currentPage, handleData }: PaginationProps) => {
	const getPageNumbers = () => {
		const pageNumbers: number[] = [];
		const maxButtons = 5;
		let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
		let endPage = startPage + maxButtons - 1;

		if (endPage > pages) {
			endPage = pages;
			startPage = Math.max(1, endPage - maxButtons + 1);
		}

		for (let i = startPage; i <= endPage; i++) {
			pageNumbers.push(i);
		}
		return pageNumbers;
	};

	const handlePageClick = (pageNumber: number) => {
		if (pageNumber !== currentPage) {
			handleData(pageNumber);
		}
	};

	return (
		<nav className={style.pagination} aria-label='Pagination'>
			<Btn
				title='Paginación anterior'
				className={`${style.pagination__button} ${currentPage === 1 ? style['pagination__button--disabled'] : ''}`}
				onClick={() => handlePageClick(currentPage - 1)}
				disabled={currentPage === 1}
				icon={{
					iconName: 'arrow',
					className: style.pagination__icon,
					type: 'fpIcons',
				}}
			/>

			{getPageNumbers().map(number => (
				<Btn
					title={`Ir a la página ${number}`}
					key={number}
					className={`${style.pagination__button} ${
						number === currentPage ? style['pagination__button--active'] : ''
					}`}
					onClick={() => handlePageClick(number)}
				>
					{number}
				</Btn>
			))}

			<Btn
				title='Paginación siguiente'
				className={`${style.pagination__button} ${
					currentPage === pages ? style['pagination__button--disabled'] : ''
				}`}
				onClick={() => handlePageClick(currentPage + 1)}
				disabled={currentPage === pages}
				icon={{
					iconName: 'arrow',
					className: `${style.pagination__icon} ${style['pagination__icon--right']}`,
					type: 'fpIcons',
				}}
			/>
		</nav>
	);
};

export default Pagination;
