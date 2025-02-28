import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FilterDataDTO, FilterDataDTOType } from '../../dto/filterDataDTO';
import { LimitFetchData, OrderEnum } from '../../enum/data';
import { transformEnum } from '../../helper/transformEnum';
import useRenderInputs from '../../hooks/useRenderInputs';
import { Btn } from '../button/Btn';
import style from './style/Filter.module.scss';

const Filter = ({
	classNames,
	handleData,
	resetFilter,
	Order,
}: {
	Order: {
		OrderProperty: Record<string, string>;
		defaultOrderProperty: string;
		textOrderProperty: Record<string, string>;
	};
	classNames?: string;
	handleData: (data: FilterDataDTOType) => void;
	resetFilter: () => void;
}) => {
	const defaultValues = useMemo(
		() => ({
			orderProperty: Order.defaultOrderProperty,
			order: OrderEnum.ASC,
			limit: LimitFetchData['d-20'],
		}),
		[Order.defaultOrderProperty],
	);

	const {
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm<FilterDataDTOType>({
		resolver: zodResolver(FilterDataDTO),
	});

	useEffect(() => {
		reset(defaultValues);
	}, [defaultValues, reset]);

	const { renderSelect } = useRenderInputs<FilterDataDTOType>({
		errors,
		control,
	});

	const handleResetFilter = useCallback(() => {
		reset(defaultValues);
		resetFilter();
	}, [defaultValues, reset, resetFilter]);

	return (
		<form
			onSubmit={handleSubmit(handleData)}
			className={`${style.filter} ${classNames}`}
		>
			{renderSelect({
				name: 'order',
				options: transformEnum({ transformEnum: OrderEnum }),
				placeholder: 'Ordern',
				className: style.filter__select,
			})}
			{renderSelect({
				name: 'orderProperty',
				options: transformEnum({
					transformEnum: Order.OrderProperty,
					text: Order.textOrderProperty,
				}),
				placeholder: 'Ordenar por',
				className: style.filter__select,
			})}
			{renderSelect({
				name: 'limit',
				options: transformEnum({ transformEnum: LimitFetchData }),
				placeholder: 'Limite de datos',
				className: style.filter__select,
			})}
			<Btn
				title='Aplicar filtro'
				type='submit'
				icon={{ iconName: 'filter', type: 'fpIcons' }}
				className={style.filter__btn}
			/>
			<Btn
				title='Resetear filtro'
				onClick={handleResetFilter}
				icon={{ iconName: 'filterOff', type: 'fpIcons' }}
				className={style.filter__btn}
			/>
		</form>
	);
};
export default Filter;
