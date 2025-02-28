
export const API_ROUTES = {
	// User Management
	GET_USER: '/user',
	GET_USER_PROFILE: '/user/profile',
	POST_USER_LOGIN: '/user/login',
	POST_REGISTER_USER: '/user',
	POST_REGISTER_USER_PROTECTED: '/user/protect',
	POST_ACTIVATE_USER: '/user/activated',
	UPDATE_USER: '/user',
	UPDATE_PASSWORD: '/user/updatePassword',
	DELETE_USER: '/user/delete',
	POST_RECOVERY_NEW_PASSWORD: '/user/newPassword',
	POST_RECOVERY_PASSWORD: '/user/recoveryPassword',
	POST_RECOVERY_CODE: '/user/recoveryCode',

	// Role Management
	GET_ROLES: '/rol/all',
	GET_ROLE_USER: '/rol/one',
	GET_ROLE_PER: '/rol/per',
	POST_REGISTER_ROL: '/rol',
	UPDATE_ROL: '/rol',
	DELETE_ROL: '/rol/delete',
	GET_ROL: '/rol',


};
