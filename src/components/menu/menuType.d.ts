export interface Data {
	to: string;
	text: string;
}
export interface MenuProps {
	data: Data[];
	viewOptions?: boolean;
	className?: string;
}

export interface DataMenu {
	text: string;
	to?: string;
	icon: string;
}

export interface MenuItem extends DataMenu {
	sub?: DataMenu[];
}

interface VerticalMenuProps {
	items: MenuItem[];
	className?: string;
}
