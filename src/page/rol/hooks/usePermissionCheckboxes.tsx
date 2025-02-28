import { useCallback, useEffect, useState } from 'react';
import { Permission } from '../enum/enum';

const usePermissionCheckboxes = ({
	initialPermissions = [],
	handleCheck,
}: {
	initialPermissions?: string[];
	handleCheck: (selectedPermissions: string[]) => void;
}) => {
	const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);
	const [isSuperUserChecked, setIsSuperUserChecked] = useState(false);

	useEffect(() => {
		if (initialPermissions.length > 0) {
			setSelectedPermissions(initialPermissions);
			setIsSuperUserChecked(initialPermissions.includes(Permission.super));
		}
	}, [initialPermissions]);

	const handleData = useCallback((value: string) => {
		setSelectedPermissions(prev => {
			const isCurrentlySelected = prev.includes(value);
			const updatedPermissions = isCurrentlySelected
				? prev.filter(item => item !== value)
				: [...prev, value];

			if (value === Permission.super) {
				setIsSuperUserChecked(!isCurrentlySelected);
				return isCurrentlySelected ? updatedPermissions : [Permission.super];
			}

			return updatedPermissions;
		});
	}, []);

	useEffect(() => {
		handleCheck(selectedPermissions);
	}, [handleCheck, selectedPermissions]);

	return {
		selectedPermissions,
		isSuperUserChecked,
		handleData,
	};
};

export default usePermissionCheckboxes;
