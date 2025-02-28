import { AxiosError } from 'axios';
import { useCallback, useContext, useState } from 'react';
import { FieldValues, UseFormSetError } from 'react-hook-form';
import { FETCH_AXIOS } from '../constants/axios';
import { ContextMsg } from '../context/msg/MsgContext';
import { processErrorResponse } from '../functions/handleError';
import { PostOptions } from './usePostType';

const usePost = <T extends FieldValues>({
	setError,
}: {
	setError?: UseFormSetError<T>;
}) => {
	const [loading, setLoading] = useState<boolean>(false);
	const { setMsg } = useContext(ContextMsg);

	const handlePost = useCallback(
		async ({ data, token, url }: PostOptions) => {
			setLoading(true);
			try {
				const headers = token ? { Authorization: `Bearer ${token}` } : {};

				const response = await FETCH_AXIOS.post(url, data, { headers });

				return response.data;
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
		[setError, setMsg],
	);

	return { loading, handlePost };
};

export default usePost;
