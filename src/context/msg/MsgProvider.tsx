import { ReactNode, useState } from 'react';
import { ContextMsg } from './MsgContext';
import { MsgState } from './msg';

export const MsgProvider = ({ children }: { children: ReactNode }) => {
	const [msg, setMsg] = useState<MsgState>({ type: 'default', msg: '' });
	return (
		<ContextMsg.Provider value={{ msg, setMsg }}>
			{children}
		</ContextMsg.Provider>
	);
};
