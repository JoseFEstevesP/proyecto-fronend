import { useCallback, useContext } from 'react';
import { TypeRol } from '../context/rol/rol';
import { ContextRol } from '../context/rol/RolContext';
import { Permission } from '../page/rol/enum/enum';

const useValidate = () => {
	const { rol } = useContext(ContextRol);

	const handleData = useCallback(
		({ per }: { per: string }) => {
			return rol?.permissions.some(
				item => item === per || item === Permission.super,
			);
		},
		[rol],
	);

	const handleTypeRol = useCallback(
		({ typeRol }: { typeRol: TypeRol }) => {
			return rol?.typeRol === typeRol;
		},
		[rol],
	);

	return { handleData, handleName: handleTypeRol };
};
export default useValidate;
