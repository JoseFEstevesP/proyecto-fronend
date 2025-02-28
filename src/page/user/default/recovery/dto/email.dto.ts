import { z } from 'zod';
import { userMessages } from '../../../msg';

export const RecoveryPassEmailDTOSchema = z.object({
	email: z.string().email({ message: userMessages.email.format }),
});

export type RecoveryPassEmailDTOSchemaType = z.infer<
	typeof RecoveryPassEmailDTOSchema
>;
