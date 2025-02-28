import { useCallback, useMemo, useState } from 'react';
import { LimitFetchData, OrderEnum } from '../enum/data';
import { ParamsData } from '../typeGlobal';

const useFilter = ({ orderProperty }: { orderProperty: string }) => {
	// Definimos el valor inicial del filtro usando useMemo
	const initialFilter = useMemo(
		() => ({
			limit: LimitFetchData['d-20'],
			order: OrderEnum.ASC,
			orderProperty,
		}),
		[orderProperty],
	);

	// Estado para el filtro
	const [filter, setFilter] = useState<ParamsData>(initialFilter);

	// Función para manejar la paginación
	const handlePagination = useCallback((page: number) => {
		setFilter(prevFilter => ({ ...prevFilter, page }));
	}, []);

	// Función para manejar la actualización de los filtros
	const handleFilterData = useCallback((data: ParamsData) => {
		setFilter(prevFilter => ({ ...prevFilter, ...data }));
	}, []);

	// Función para restablecer los filtros al valor inicial
	const handleResetData = useCallback(() => {
		setFilter(initialFilter);
	}, [initialFilter]);

	return {
		filter,
		handlePagination,
		handleFilterData,
		handleResetData,
	};
};

export default useFilter;
