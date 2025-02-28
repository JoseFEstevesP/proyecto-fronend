import { useCallback, useState } from 'react';
import useModal from '../../modal/hooks/useModal';

const useModalImage = () => {
	const { isOpen, handleOpen, handleClose } = useModal({});
	const [image, setImage] = useState<{ url: string; title?: string } | null>(
		null,
	);
	const handleOpenImage = useCallback(
		(url: string, title?: string) => {
			handleOpen();
			setImage({ url, title });
		},
		[handleOpen],
	);

	return {
		isOpen,
		handleOpenImage,
		handleClose,
		imageUrl: image?.url,
		imageTitle: image?.title,
	};
};
export default useModalImage;
