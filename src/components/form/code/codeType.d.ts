import { FormEventHandler } from 'react';
import { UseRenderInputsType } from '../../../hooks/useRenderInputsType';

export interface CodeProp<T> extends UseRenderInputsType<T> {
	handleSubmit: FormEventHandler<HTMLFormElement>;
	label: string;
}
