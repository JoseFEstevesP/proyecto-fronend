import { AxiosError } from 'axios';
import { useCallback, useContext, useState } from 'react';
import { FieldValues, UseFormSetError } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FETCH_AXIOS } from '../constants/axios';
import { ContextMsg } from '../context/msg/MsgContext';
import { ContextToken } from '../context/token/TokenContext';
import { processErrorResponse } from '../functions/handleError';

const useUpdate = <T extends FieldValues>({
	setError,
}: {
	setError?: UseFormSetError<T>;
}) => {
	const { token } = useContext(ContextToken);
	const { setMsg } = useContext(ContextMsg);
	const [loading, setLoading] = useState<boolean>(false);
	const navigate = useNavigate();

	const handleUpdate = useCallback(
		async <TUpdate,>({
			data,
			url,
			reset,
			to,
			additionalData,
		}: {
			url: string;
			data: TUpdate;
			reset?: () => void;
			to?: string;
			additionalData?: object;
		}) => {
			setLoading(true);
			try {
				const res = await FETCH_AXIOS.patch(
					url,
					{ ...data, ...additionalData },
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);
				if (res) {
					setMsg({ type: 'default', msg: res.data.msg });
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
		[navigate, setError, setMsg, token],
	);
	return { handleUpdate, loading };
};
export default useUpdate;
