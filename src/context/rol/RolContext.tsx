import { createContext } from 'react';
import { RolContextType } from './rol';

export const ContextRol = createContext<RolContextType>({
	rol: null,
	setRol: () => {},
});
