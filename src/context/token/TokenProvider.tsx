import { useState } from 'react';
import { TokenParameter } from './token';
import { ContextToken } from './TokenContext';

export const TokenProvider = ({ children }: TokenParameter) => {
	const [token, setToken] = useState<string | null>(
		localStorage.getItem('jwt'),
	);
	return (
		<ContextToken.Provider value={{ token, setToken }}>
			{children}
		</ContextToken.Provider>
	);
};
