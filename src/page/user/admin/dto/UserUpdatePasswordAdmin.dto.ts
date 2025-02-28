import { z } from 'zod';
import { userMessages } from '../../msg';

export const UserUpdatePasswordAdminUserDTOSchema = z
	.object({
		newPassword: z
			.string()
			.min(8, userMessages.password.minLength)
			.max(20, userMessages.password.maxLength)
			.regex(/[A-Z]/, { message: userMessages.password.uppercase })
			.regex(/[a-z]/, { message: userMessages.password.lowercase })
			.regex(/\d/, { message: userMessages.password.number })
			.regex(/[!@#$%^&*()-_,.?":{}|<>]/, {
				message: userMessages.password.symbol,
			}),
		confirmPassword: z
			.string()
			.min(8, userMessages.password.minLength)
			.max(20, userMessages.password.maxLength)
			.regex(/[A-Z]/, { message: userMessages.password.uppercase })
			.regex(/[a-z]/, { message: userMessages.password.lowercase })
			.regex(/\d/, { message: userMessages.password.number })
			.regex(/[!@#$%^&*()-_,.?":{}|<>]/, {
				message: userMessages.password.symbol,
			}),
		uidUser: z.string(),
	})
	.refine(data => data.newPassword === data.confirmPassword, {
		message: userMessages.password.compare,
		path: ['newPassword'],
	});

export type UserUpdatePasswordAdminUserDTOSchemaType = z.infer<
	typeof UserUpdatePasswordAdminUserDTOSchema
>;
