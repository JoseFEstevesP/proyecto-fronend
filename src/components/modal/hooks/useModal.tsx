import { useCallback, useEffect, useState } from 'react';
import { UseModalProps, UseModalReturn } from '../modalProps';

const useModal = ({ initState = false }: UseModalProps): UseModalReturn => {
	const [isOpen, setIsOpen] = useState<boolean>(initState);

	const handleOpen = useCallback((): void => setIsOpen(true), []);
	const handleClose = useCallback((): void => setIsOpen(false), []);

	useEffect(() => {
		document.documentElement.style.overflow = isOpen ? 'hidden' : 'auto';

		return () => {
			document.documentElement.style.overflow = 'auto';
		};
	}, [isOpen]);

	return { isOpen, handleOpen, handleClose, setIsOpen };
};

export default useModal;
