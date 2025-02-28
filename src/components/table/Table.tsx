import Pagination from '../pagination/Pagination';
import style from './Table.module.scss';
import { TableProps } from './tableType';

const Table = ({
	columns,
	data,
	currentPage,
	totalPages,
	onPageChange,
}: TableProps) => {
	return (
		<div className={style.table}>
			<div className={style.table__wrapper}>
				<table className={style.table__content}>
					<thead className={style.table__head}>
						<tr className={style.table__row}>
							{columns.map(column => (
								<th
									key={column.key}
									className={`${style.table__cell} ${style['table__cell--header']}`}
								>
									{column.label}
								</th>
							))}
						</tr>
					</thead>
					<tbody className={style.table__body}>
						{data.map((row, index) => (
							<tr key={index} className={style.table__row}>
								{columns.map(column => (
									<td key={column.key} className={style.table__cell}>
										{row[column.key]}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className={style.table__pagination}>
				<Pagination
					pages={totalPages}
					currentPage={currentPage}
					handleData={onPageChange}
				/>
			</div>
		</div>
	);
};

export default Table;
