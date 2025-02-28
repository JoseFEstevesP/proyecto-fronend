import { z } from 'zod';
import { LimitFetchData, OrderEnum } from '../enum/data';
import { systemMessages } from '../msg';

export const FilterDataDTO = z.object({
	search: z.string().optional(),
	orderProperty: z.string().optional(),
	order: z
		.nativeEnum(OrderEnum, {
			message: systemMessages.globalDTO.order.invalid,
		})
		.optional(),
	limit: z
		.nativeEnum(LimitFetchData, {
			message: systemMessages.globalDTO.limit.invalid,
		})
		.optional(),
	statusIncidentReport: z.string().optional(),
});

export type FilterDataDTOType = z.infer<typeof FilterDataDTO>;
