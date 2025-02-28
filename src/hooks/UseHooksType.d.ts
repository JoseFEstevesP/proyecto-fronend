export interface UseRegisterReturn<T> {
	handleSubmitRegister: (params: {
		data: FormData | T;
		reset?: () => void;
		to?: string;
		additionalData?: object;
	}) => Promise<void>;
	loading: boolean;
}
