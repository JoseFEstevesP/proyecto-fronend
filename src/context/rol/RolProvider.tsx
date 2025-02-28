import { AxiosError } from 'axios';
import { useCallback, useContext, useEffect, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { API_ROUTES } from '../../constants/apiRoutes';
import { processErrorResponse } from '../../functions/handleError';
import useGet from '../../hooks/useGet';
import { ContextMsg } from '../msg/MsgContext';
import { ContextToken } from '../token/TokenContext';
import { RolParameter, RolStricture } from './rol';
import { ContextRol } from './RolContext';

export const RolProvider = ({ children }: RolParameter) => {
	const { token, setToken } = useContext(ContextToken);

	const [rol, setRol] = useState<RolStricture | null>(null);

	const { getData } = useGet();
	const { setMsg } = useContext(ContextMsg);

	const fetchUserRole = useCallback(async () => {
		try {
			const res = await getData({ url: API_ROUTES.GET_ROLE_PER });
			setRol(res);
		} catch (err) {
			const error = err as AxiosError;
			processErrorResponse({
				error: error.response?.data as FieldValues,
				setMsg,
			});
			setToken(null);
			localStorage.removeItem('token');
		}
	}, [getData, setMsg, setRol, setToken]);

	useEffect(() => {
		if (token && !rol) {
			fetchUserRole();
		}
	}, [fetchUserRole, rol, token]);

	return (
		<ContextRol.Provider value={{ rol, setRol }}>
			{children}
		</ContextRol.Provider>
	);
};
