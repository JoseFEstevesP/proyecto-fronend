import { z } from 'zod';
import { PHONE_REGEX } from '../../../../constants/regex';
import { NationalityEnum, SexEnum } from '../../../../enum/data';
import { userMessages } from '../../msg';
export const UserAdminUserDTOSchema = z.object({
	v_e: z.nativeEnum(NationalityEnum, {
		message: userMessages.v_e.invalid,
	}),

	ci: z.string(),
	// .min(6, userMessages.ci.minLength)
	// .max(8, userMessages.ci.maxLength)
	// .regex(/^\d+$/, {
	// 	message: userMessages.ci.invalidCharacters,
	// }),

	first_name: z
		.string()
		.regex(/^[a-zA-ZÀ-ÿ\s]+$/, {
			message: userMessages.first_name.invalidCharacters,
		})
		.min(3, userMessages.first_name.minLength)
		.max(255, userMessages.first_name.maxLength),

	middle_name: z
		.string()
		.regex(/^[a-zA-ZÀ-ÿ\s]+$/, {
			message: userMessages.middle_name.invalidCharacters,
		})
		.min(3, userMessages.middle_name.minLength)
		.max(255, userMessages.middle_name.maxLength),

	first_surname: z
		.string()
		.regex(/^[a-zA-ZÀ-ÿ\s]+$/, {
			message: userMessages.first_surname.invalidCharacters,
		})
		.min(3, userMessages.first_surname.minLength)
		.max(255, userMessages.first_surname.maxLength),

	last_surname: z
		.string()
		.regex(/^[a-zA-ZÀ-ÿ\s]+$/, {
			message: userMessages.last_surname.invalidCharacters,
		})
		.min(3, userMessages.last_surname.minLength)
		.max(255, userMessages.last_surname.maxLength),

	sex: z.nativeEnum(SexEnum, {
		message: userMessages.sex.invalid,
	}),

	email: z.string().email({ message: userMessages.email.invalidEmail }),

	phone: z.string().regex(PHONE_REGEX, {
		message: userMessages.phone.format,
	}),

	password: z
		.string()
		.min(8, userMessages.password.minLength)
		.max(20, userMessages.password.maxLength)
		.regex(/[A-Z]/, { message: userMessages.password.uppercase })
		.regex(/[a-z]/, { message: userMessages.password.lowercase })
		.regex(/\d/, { message: userMessages.password.number })
		.regex(/[!@#$%^&*()-_,.?":{}|<>]/, {
			message: userMessages.password.symbol,
		}),

	uidRol: z.string().optional(),
	uid: z.string().optional(),
	uidPharmacy: z.string().optional().nullable(),
});

export type UserAdminDTOSchemaType = z.infer<typeof UserAdminUserDTOSchema>;
