import { AxiosError } from 'axios';
import { useCallback, useContext, useState } from 'react';
import { FieldValues, UseFormSetError } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FETCH_AXIOS } from '../constants/axios';
import { ContextMsg } from '../context/msg/MsgContext';
import { ContextToken } from '../context/token/TokenContext';
import { processErrorResponse } from '../functions/handleError';
import { UseRegisterReturn } from './UseHooksType';

const useRegister = <T extends FieldValues>({
	url,
	handleGetData,
	setError,
}: {
	url: string;
	handleGetData?: () => void;
	setError?: UseFormSetError<T>;
}): UseRegisterReturn<T> => {
	const [loading, setLoading] = useState<boolean>(false);
	const { setMsg } = useContext(ContextMsg);
	const { token } = useContext(ContextToken);
	const navigate = useNavigate();

	const handleSubmitRegister = useCallback(
		async ({
			data,
			reset,
			to,
			additionalData,
		}: {
			data: FormData | T;
			reset?: () => void;
			to?: string;
			additionalData?: object;
		}) => {
			setLoading(true);

			try {
				const newData =
					data instanceof FormData
						? data
						: {
								uid: crypto.randomUUID(),
								...data,
								...additionalData,
							};

				const headers = {
					...(token ? { Authorization: `Bearer ${token}` } : {}),
					...(data instanceof FormData
						? { 'Content-Type': 'multipart/form-data' }
						: { 'Content-Type': 'application/json' }),
				};

				const res = await FETCH_AXIOS.post(url, newData, { headers });
				if (res) {
					setMsg({ type: 'default', msg: res.data.msg });
					handleGetData?.();
					reset?.();
					if (to) {
						navigate(to);
					}
				}
			} catch (err) {
				const error = err as AxiosError;
				processErrorResponse({
					error: error.response?.data as FieldValues,
					setMsg,
					setError,
				});
			} finally {
				setLoading(false);
			}
		},
		[handleGetData, navigate, setError, setMsg, token, url],
	);

	return { handleSubmitRegister, loading };
};

export default useRegister;
