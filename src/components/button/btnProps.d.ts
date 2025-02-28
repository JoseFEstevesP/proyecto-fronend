import { HTMLProps } from 'react';
import { IconParameter } from '../icon/icon';

export type NameIcon =
	| 'logo'
	| 'cintillo'
	| 'delete'
	| 'edit'
	| 'pdf'
	| 'copi'
	| 'user'
	| 'close'
	| 'search'
	| 'interrogant'
	| 'medicationRequest'
	| 'userPatientData'
	| 'userData'
	| 'pharmacy'
	| 'calendar'
	| 'eye_hidden'
	| 'eye_visible'
	| 'exit'
	| 'search'
	| 'checkOn'
	| 'checkOff'
	| 'add'
	| 'addUser'
	| 'addMedication'
	| 'addPharmacy'
	| 'addMedicationRequest'
	| 'addPharmacyRequest'
	| 'addUserPatientData'
	| 'QR'
	| 'camQR'
	| 'camQRClose';

export interface BtnProps extends HTMLProps<HTMLButtonElement> {
	className?: string;
	disabled?: boolean;
	icon?: IconParameter;
	title?: string;
	text?: string;
	type?: 'button' | 'submit' | 'reset';
	children?: React.ReactNode;
}
