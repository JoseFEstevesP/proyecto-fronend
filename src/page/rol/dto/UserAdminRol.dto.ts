import { z } from 'zod';
import { Permission, RolType } from '../enum/enum';
import { rolMessages } from '../msg';

export const UserAdminRolDTOSchema = z.object({
	name: z
		.string()
		.min(6, rolMessages.name.minLength)
		.max(20, rolMessages.name.maxLength),

	description: z
		.string()
		.min(6, rolMessages.description.minLength)
		.max(20, rolMessages.description.maxLength),

	typeRol: z.nativeEnum(RolType, {
		message: rolMessages.type.valid,
	}),

	permissions: z.array(z.nativeEnum(Permission), {
		message: rolMessages.permissions.required,
	}),
});

export type UserAdminRolDTOSchemaType = z.infer<typeof UserAdminRolDTOSchema>;
