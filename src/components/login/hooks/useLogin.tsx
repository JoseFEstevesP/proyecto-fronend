import { AxiosError } from 'axios';
import { useCallback, useContext, useState } from 'react';
import { FieldValues, UseFormSetError } from 'react-hook-form';
import { API_ROUTES } from '../../../constants/apiRoutes';
import { FETCH_AXIOS } from '../../../constants/axios';
import { ContextMsg } from '../../../context/msg/MsgContext';
import { ContextToken } from '../../../context/token/TokenContext';
import { processErrorResponse } from '../../../functions/handleError';
import { LoginDTOSchemaType } from '../dto/login.dto';

const useLogin = <T extends FieldValues>({
	setError,
}: {
	setError: UseFormSetError<T>;
}) => {
	const [loading, setLoading] = useState(false);
	const { setToken } = useContext(ContextToken);
	const { setMsg } = useContext(ContextMsg);

	const handleSubmitLogin = useCallback(
		async (data: LoginDTOSchemaType) => {
			setLoading(true);
			try {
				const res = await FETCH_AXIOS.post(API_ROUTES.POST_USER_LOGIN, data);
				const { jwt } = res.data;
				setToken(jwt);
				localStorage.setItem('jwt', jwt);
			} catch (err) {
				const error = err as AxiosError;
				processErrorResponse({
					error: error.response?.data as FieldValues,
					setError,
					setMsg,
				});
			} finally {
				setLoading(false);
			}
		},
		[setError, setMsg, setToken],
	);

	return { handleSubmitLogin, loading };
};

export default useLogin;
