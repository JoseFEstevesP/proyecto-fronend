export interface EmailFormProps {
	setViewForm: React.Dispatch<
		React.SetStateAction<{
			email: boolean;
			code: boolean;
			password: boolean;
		}>
	>;
	setEmail: (value: React.SetStateAction<string | null>) => void;
	handlePost: ({
		data,
		token,
		url,
	}: {
		data: {
			[key: string]: string;
		};
		token?: string;
		url: string;
	}) => Promise<{ msg: string }>;
}

export interface CodeFormProps {
	setViewForm: React.Dispatch<
		React.SetStateAction<{
			email: boolean;
			code: boolean;
			password: boolean;
		}>
	>;
	handlePost: ({
		data,
		token,
		url,
	}: {
		data: {
			[key: string]: string;
		};
		token?: string;
		url: string;
	}) => Promise<{ token: string }>;
	email: string;
	setToken: React.Dispatch<React.SetStateAction<string | null>>;
}
