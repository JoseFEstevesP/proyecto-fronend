import { useCallback, useContext, useEffect, useState } from 'react';
import { API_ROUTES } from '../../../../constants/apiRoutes';
import { ContextToken } from '../../../../context/token/TokenContext';
import useGet from '../../../../hooks/useGet';
import useValidate from '../../../../hooks/useValidate';
import { ValueAll } from '../../../../typeGlobal';
import { Permission } from '../../../rol/enum/enum';
import { UseRolAndPharmacy } from '../interfaces';

const useRolAndPharmacy = () => {
	const { token } = useContext(ContextToken);
	const { getData } = useGet();
	const { handleData } = useValidate();
	const [rolData, setRolData] = useState<ValueAll[] | null>(null);

	const fetchData = useCallback(
		async ({ url, setData, permission }: UseRolAndPharmacy): Promise<void> => {
			if (token && handleData({ per: permission })) {
				const data: ValueAll[] = await getData({ url });
				setData(data);
			}
		},
		[token, handleData, getData],
	);

	const getRolAndPharmacy = useCallback(() => {
		fetchData({
			url: API_ROUTES.GET_ROLES,
			setData: setRolData,
			permission: Permission.rol,
		});
	}, [fetchData]);

	useEffect(() => {
		getRolAndPharmacy();
	}, [getRolAndPharmacy]);

	return { rolData };
};

export default useRolAndPharmacy;
