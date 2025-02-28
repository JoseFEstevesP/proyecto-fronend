import { useCallback } from 'react';
import { Btn } from '../button/Btn';
import './switch.scss';

const Switch = ({ active, setActive }) => {
	const handleActive = useCallback(() => {
		setActive(!active);
	}, [active, setActive]);
	return (
		<Btn
			title='switch'
			className={`switch ${active && 'switch--active'}`}
			onClick={handleActive}
		/>
	);
};
export default Switch;
