import { z } from 'zod';
import { userMessages } from '../../../msg';

export const RecoveryPassCodeDTOSchema = z.object({
	code: z
		.string()
		.length(7, { message: userMessages.code.invalid })
		.regex(/^\d{7}$/, {
			message: userMessages.code.format,
		}),
});

export type RecoveryPassCodeDTOSchemaType = z.infer<
	typeof RecoveryPassCodeDTOSchema
>;
