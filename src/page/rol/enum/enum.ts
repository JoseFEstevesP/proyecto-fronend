export enum OrderRolProperty {
	name = 'name',
	permissions = 'permissions',
	typeRol = 'typeRol',
}

export const textOrderRol = {
	name: 'Nombre',
	permissions: 'Permisos',
	typeRol: 'Tipo de Rol',
};

export enum RolType {
	admin = 'admin',
	user = 'user',
}
export const RolTypeText = {
	admin: 'Administrador',
	user: 'Usuario',
};

export enum Permission {
	super = 'SUPER',
	user = 'USER',
	userProfile = 'USER_PROFILE',
	userAdd = 'USER_ADD',
	userRead = 'USER_READ',
	userReadOne = 'USER_READ_ONE',
	userUpdate = 'USER_UPDATE',
	userDelete = 'USER_DELETE',
	rol = 'ROL',
	rolAdd = 'ROL_ADD',
	rolRead = 'ROL_READ',
	rolReadOne = 'ROL_READ_ONE',
	rolUpdate = 'ROL_UPDATE',
	rolDelete = 'ROL_DELETE',
}

export const permissionTranslations = {
	SUPER: 'Super Usuario',
	USER: 'Usuario',
	USER_PROFILE: 'Perfil de Usuario',
	USER_ADD: 'Agregar Usuario',
	USER_READ: 'Leer Usuario',
	USER_READ_ONE: 'Leer Un Usuario',
	USER_UPDATE: 'Actualizar Usuario',
	USER_DELETE: 'Eliminar Usuario',
	ROL: 'Rol',
	ROL_ADD: 'Agregar Rol',
	ROL_READ: 'Leer Rol',
	ROL_READ_ONE: 'Leer Un Rol',
	ROL_UPDATE: 'Actualizar Rol',
	ROL_DELETE: 'Eliminar Rol',
};
