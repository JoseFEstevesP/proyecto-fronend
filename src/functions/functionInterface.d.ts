import { FieldErrors, UseFormSetError } from 'react-hook-form';

export interface HandleErrorParams<T> {
	error: FieldErrors<T>;
	setMsg: (msg: MsgState) => void;
	setError?: UseFormSetError<T>;
}
