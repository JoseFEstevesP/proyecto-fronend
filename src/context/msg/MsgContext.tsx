import { createContext } from 'react';
import { MsgContextType } from './msg';

export const ContextMsg = createContext<MsgContextType>({
	msg: { type: 'default', msg: '' },
	setMsg: () => {},
});
