export const rolMessages = {
	name: {
		minLength: 'Mínimo de 6 caracteres',
		maxLength: 'Máximo de 8 caracteres',
		required: 'El nombre es requerida',

		input: {
			label: 'Nombre',
			placeholder: 'Nombre del rol',
		},
	},
	description: {
		minLength: 'Mínimo de 3 caracteres',
		maxLength: 'Máximo de 255 caracteres',
		required: 'La descripción es requerida',

		input: {
			label: 'Descripción',
			placeholder: 'Descripción del rol',
		},
	},
	permissions: {
		required: 'Los permisos son requeridos',

		input: {
			label: 'Permisos',
			placeholder: 'Permisos del rol',
		},
	},
	type: {
		valid: 'Parámetros no válidos, solo se acepta administrador o usuario',
		input: {
			label: 'Tipo de rol',
			placeholder: 'Tipo de rol',
		},
	},
	btn: {
		default: 'Enviar',
	},
	page: {
		delete: {
			confirm: '¿Estás seguro de que quieres eliminar este rol?',
			title: 'Eliminar rol',
		},
		register: {
			title: 'Registro de rol',
		},
	},
};
