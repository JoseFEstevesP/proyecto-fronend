import { z } from 'zod';
import { userMessages } from '../../../msg';

export const RecoveryPassPasswordDTOSchema = z
	.object({
		newPassword: z
			.string()
			.min(8, { message: userMessages.password.minLength })
			.max(20, { message: userMessages.password.maxLength })
			.regex(/[A-Z]/, { message: userMessages.password.uppercase })
			.regex(/[a-z]/, { message: userMessages.password.lowercase })
			.regex(/\d/, { message: userMessages.password.number })
			.regex(/[!@#$%^&*()-_,.?":{}|<>]/, {
				message: userMessages.password.symbol,
			}),
		confirmPassword: z.string(),
	})
	.superRefine((data, ctx) => {
		if (data.confirmPassword !== data.newPassword) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: ['confirmPassword'],
				message: userMessages.password.compare,
			});
		}
	});

export type RecoveryPassPasswordDTOSchemaType = z.infer<
	typeof RecoveryPassPasswordDTOSchema
>;
