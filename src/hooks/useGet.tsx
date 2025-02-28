import { useCallback, useContext, useState } from 'react';
import { FETCH_AXIOS } from '../constants/axios';
import { ContextToken } from '../context/token/TokenContext';
import { ParamsDataGet } from '../typeGlobal';

const useGet = () => {
	const [loading, setLoading] = useState(false);
	const { token } = useContext(ContextToken);

	const getData = useCallback(
		async <T extends ParamsDataGet>({
			url,
			params,
		}: {
			url: string;
			params?: T;
		}) => {
			setLoading(true);
			try {
				const res = await FETCH_AXIOS.get(url, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
					params,
				});
				return res.data;
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		},
		[token],
	);

	return { getData, loading };
};

export default useGet;
