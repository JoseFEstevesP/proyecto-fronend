import { z } from 'zod';
import { UserAdminUserDTOSchema } from './UserAdminUser.dto';

export const UserAdminUserUpdateDTOSchema = UserAdminUserDTOSchema.omit({
	password: true,
}).extend({
	uidPharmacy: z.string().optional().nullable(),
});

export type UserAdminUserUpdateDTOSchemaType = z.infer<
	typeof UserAdminUserUpdateDTOSchema
>;
