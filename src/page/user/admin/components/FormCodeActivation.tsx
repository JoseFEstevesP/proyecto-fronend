import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { useCallback, useContext } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import Code from '../../../../components/form/code/Code';
import { API_ROUTES } from '../../../../constants/apiRoutes';
import { FETCH_AXIOS } from '../../../../constants/axios';
import { ContextMsg } from '../../../../context/msg/MsgContext';
import { processErrorResponse } from '../../../../functions/handleError';
import { userMessages } from '../../msg';
import {
	ActivateCountDTOSchema,
	ActivateCountDTOSchemaType,
} from '../dto/ActivateCount.dto';
import { UserCodeActivation } from '../interfaces';

const FormCodeActivation = ({ handleClose }: UserCodeActivation) => {
	const { setMsg } = useContext(ContextMsg);

	const activateCountMethods = useForm<ActivateCountDTOSchemaType>({
		resolver: zodResolver(ActivateCountDTOSchema),
	});

	const handleDataActivateCount = useCallback(
		async (data: ActivateCountDTOSchemaType) => {
			try {
				const res = await FETCH_AXIOS.post(API_ROUTES.POST_ACTIVATE_USER, data);
				setMsg({ msg: res.data.msg, type: 'default' });
				handleClose?.();
				activateCountMethods.reset?.();
			} catch (err) {
				const error = err as AxiosError;
				processErrorResponse({
					error: error.response?.data as FieldValues,
					setMsg,
					setError: activateCountMethods.setError,
				});
			}
		},
		[setMsg, handleClose, activateCountMethods],
	);
	return (
		<Code<ActivateCountDTOSchemaType>
			errors={activateCountMethods.formState.errors}
			handleSubmit={activateCountMethods.handleSubmit(handleDataActivateCount)}
			register={activateCountMethods.register}
			label={userMessages.code.title}
		/>
	);
};
export default FormCodeActivation;
