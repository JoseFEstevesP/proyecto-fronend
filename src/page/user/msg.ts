export const userMessages = {
	ci: {
		minLength: 'La cédula debe tener al menos 6 caracteres.',
		maxLength: 'La cédula no puede tener más de 8 caracteres.',
		invalidCharacters: 'La cédula solo puede contener números.',
		input: {
			label: 'Cédula',
			placeHolder: 'Ingrese su cédula',
		},
	},
	code: {
		title: 'código de activación de cuenta',
		placeHolder: 'Ingrese el código',
		titleBtn: 'Enviar el Código',
		invalid: 'El código debe tener exactamente 7 caracteres.',
		format: 'El código debe ser numérico y contener solo dígitos.',
		dto: {
			minLength: 'Mínimo de 13 caracteres',
			maxLength: 'Máximo de 16 caracteres',
			invalidCharacters: 'Caracteres no válidos, solo se acepta números',
		},
	},
	email: {
		invalidEmail: 'El correo electrónico no es válido.',
		format: 'El correo electrónico debe tener un formato válido.',
		input: {
			label: 'Correo electrónico',
			placeHolder: 'Ingrese su correo electrónico',
		},
	},
	first_name: {
		invalidCharacters: 'El nombre solo puede contener letras y espacios.',
		minLength: 'El nombre debe tener al menos 3 caracteres.',
		maxLength: 'El nombre no puede tener más de 255 caracteres.',
		input: {
			label: 'Nombre',
			placeHolder: 'Ingrese su nombre',
		},
	},
	first_surname: {
		invalidCharacters:
			'El primer apellido solo puede contener letras y espacios.',
		minLength: 'El primer apellido debe tener al menos 3 caracteres.',
		maxLength: 'El primer apellido no puede tener más de 255 caracteres.',
		input: {
			label: 'Primer apellido',
			placeHolder: 'Ingrese su primer apellido',
		},
	},
	last_surname: {
		invalidCharacters:
			'El segundo apellido solo puede contener letras y espacios.',
		minLength: 'El segundo apellido debe tener al menos 3 caracteres.',
		maxLength: 'El segundo apellido no puede tener más de 255 caracteres.',
		input: {
			label: 'Segundo apellido',
			placeHolder: 'Ingrese su segundo apellido',
		},
	},
	middle_name: {
		invalidCharacters:
			'El segundo nombre solo puede contener letras y espacios.',
		minLength: 'El segundo nombre debe tener al menos 3 caracteres.',
		maxLength: 'El segundo nombre no puede tener más de 255 caracteres.',
		input: {
			label: 'Segundo nombre',
			placeHolder: 'Ingrese su segundo nombre',
		},
	},
	password: {
		minLength: 'La contraseña debe tener al menos 8 caracteres.',
		maxLength: 'La contraseña no puede tener más de 20 caracteres.',
		uppercase: 'La contraseña debe contener al menos una letra mayúscula.',
		lowercase: 'La contraseña debe contener al menos una letra minúscula.',
		number: 'La contraseña debe contener al menos un número.',
		symbol: 'La contraseña debe contener al menos un símbolo.',
		compare: 'Las contraseñas no coinciden.',
		input: {
			label: 'Contraseña',
			placeHolder: 'Ingrese su contraseña',
		},
		update: {
			title: 'Actualizar contraseña',
			placeHolderNew: 'Ingrese su nueva contraseña',
			labelNew: 'Nueva contraseña',
			placeHolderNewRepeat: 'Repita su nueva contraseña',
			labelNewRepeat: 'Repita su nueva contraseña',
		},
	},
	phone: {
		format: 'El formato del teléfono es incorrecto.',
		input: {
			label: 'Teléfono',
			placeHolder: 'Ingrese su teléfono',
		},
	},
	sex: {
		required: 'El sexo es requerido.',
		invalid: 'Sexo no válido.',
		input: {
			label: 'Sexo',
			placeHolder: 'Ingrese su sexo',
		},
	},
	uidPharmacy: {
		optional: 'La farmacia es opcional.',
		input: {
			label: 'Farmacia',
			placeHolder: 'Ingrese la farmacia',
		},
	},
	uidRol: {
		optional: 'El rol es opcional.',
		input: {
			label: 'Rol',
			placeHolder: 'Ingrese el rol',
		},
	},
	v_e: {
		required: 'La nacionalidad es requerida.',
		invalid: 'Nacionalidad no válida.',
		input: {
			label: 'Nacionalidad',
			placeHolder: 'Ingrese su nacionalidad',
		},
	},
	login: {
		forgotPassword: 'Recuperar contraseña',
		loginBtn: 'Iniciar sesión',
		link: 'Iniciar sesión',
		register: 'Registrarse',
	},
	btn: {
		default: 'Enviar',
		passwordUpdate: 'Actualizar contraseña',
		active: 'Activar cuenta',
	},
	register: {
		active: 'Activar cuenta',
	},
	page: {
		delete: {
			confirm: '¿Estás seguro de que quieres eliminar este usuario?',
			title: 'Eliminar usuario',
		},
		register: {
			title: 'Registro de usuario',
		},
		pharmacyNotAssignat: 'Farmacia no asignada',
	},
};
