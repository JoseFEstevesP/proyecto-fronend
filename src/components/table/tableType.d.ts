export interface Column {
	key: string;
	label: string;
}

export interface TableProps {
	columns: Column[];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any[];
	currentPage: number;
	totalPages: number;
	onPageChange: (value: number) => void;
}
