import { AxiosError } from 'axios';
import { useCallback, useContext, useEffect, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { API_ROUTES } from '../constants/apiRoutes';
import { ContextMsg } from '../context/msg/MsgContext';
import { processErrorResponse } from '../functions/handleError';
import { UserResponse } from '../page/user/admin/interfaces';
import useGet from './useGet';

const useProfile = () => {
	const [data, setData] = useState<UserResponse | null>(null);
	const { getData } = useGet();
	const { setMsg } = useContext(ContextMsg);

	const getDataProfile = useCallback(async () => {
		try {
			const dataProfile = await getData({
				url: API_ROUTES.GET_USER_PROFILE,
			});
			if (dataProfile) {
				setData(dataProfile);
			}
		} catch (err) {
			const error = err as AxiosError;
			processErrorResponse({
				error: error.response?.data as FieldValues,
				setMsg,
			});
		}
	}, [getData, setMsg]);

	useEffect(() => {
		if (!data) {
			getDataProfile();
		}
	}, [data, getDataProfile]);

	return { data };
};

export default useProfile;
