import { createContext } from 'react';
import { TokenContextType } from './token';

export const ContextToken = createContext<TokenContextType>({
	token: null,
	setToken: () => {},
});
