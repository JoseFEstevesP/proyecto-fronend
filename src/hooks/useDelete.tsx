import { AxiosError } from 'axios';
import { useCallback, useContext } from 'react';
import { FieldValues } from 'react-hook-form';
import { FETCH_AXIOS } from '../constants/axios';
import { ContextMsg } from '../context/msg/MsgContext';
import { ContextToken } from '../context/token/TokenContext';
import { processErrorResponse } from '../functions/handleError';

const useDelete = ({
	url,
	handleGetData,
}: {
	url: string;
	handleGetData: () => void;
}) => {
	const { token } = useContext(ContextToken);
	const { setMsg } = useContext(ContextMsg);

	const handleDelete = useCallback(
		async ({ uid }: { uid: string | undefined }) => {
			try {
				const res = await FETCH_AXIOS.delete(`${url}/${uid}`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				if (res) {
					handleGetData();
					setMsg({ msg: res.data.msg, type: 'default' });
				}
			} catch (err) {
				const error = err as AxiosError;
				processErrorResponse({
					error: error.response?.data as FieldValues,
					setMsg,
				});
			}
		},
		[url, token, setMsg, handleGetData],
	);
	return { handleDelete };
};
export default useDelete;
