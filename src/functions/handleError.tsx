import {
	FieldErrors,
	FieldValues,
	Path,
	UseFormSetError,
} from 'react-hook-form';
import { HandleErrorParams } from './functionInterface';

export const processErrorResponse = <T extends FieldValues>({
	error,
	setError,
	setMsg,
}: HandleErrorParams<T>) => {
	const errorKeys = Object.keys(error);

	if (errorKeys.includes('all') || errorKeys.includes('uidPatients')) {
		errorKeys.forEach(key => {
			const errorMessage = error[key]?.message;
			if (errorMessage) {
				setMsg({ type: 'error', msg: errorMessage });
			}
		});
	} else {
		if (setError) {
			handleError<T>({ error, setError });
		}
	}
};

export const handleError = <T extends FieldValues>({
	error,
	setError,
}: {
	error: FieldErrors<T>;
	setError: UseFormSetError<T>;
}) => {
	const errorKeys = Object.keys(error) as Path<T>[];

	errorKeys.forEach(key => {
		const errorMessage = error[key]?.message;
		if (errorMessage) {
			setError(key, {
				type: 'manual',
				message: errorMessage as string | undefined,
			});
		}
	});
};
