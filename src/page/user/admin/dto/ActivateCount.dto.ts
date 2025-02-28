import { z } from 'zod';
import { userMessages } from '../../msg';

export const ActivateCountDTOSchema = z.object({
	code: z
		.string()
		.min(13, userMessages.code.dto.minLength)
		.max(16, userMessages.code.dto.maxLength)
		.regex(/^\d+$/, {
			message: userMessages.code.dto.invalidCharacters,
		}),
});

export type ActivateCountDTOSchemaType = z.infer<typeof ActivateCountDTOSchema>;
