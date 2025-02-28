import { useContext } from 'react';
import { FieldValues } from 'react-hook-form';
import { Btn } from '../../../../components/button/Btn';
import styleBtn from '../../../../components/button/Btn.module.scss';
import FormStyle from '../../../../components/form/formStyle/FormStyle';
import LinkPer from '../../../../components/link/LinkPer';
import { ContextToken } from '../../../../context/token/TokenContext';
import { NationalityEnum, SexEnum, SexText } from '../../../../enum/data';
import { transformEnum } from '../../../../helper/transformEnum';
import useRenderInputs from '../../../../hooks/useRenderInputs';
import useValidate from '../../../../hooks/useValidate';
import { Permission } from '../../../rol/enum/enum';
import { userMessages } from '../../msg';
import { UserFormType } from '../interfaces';
import style from './FormUser.module.scss';

const FormUser = <T extends FieldValues>({
	handleSubmit,
	errors,
	control,
	register,
	rolData,
	loading,
	handleOpen,
	optionalPassword,
	handleOpenUpdatePassword,
}: UserFormType<T>) => {
	const { token } = useContext(ContextToken);
	const { handleData } = useValidate();

	const { renderInput, renderSelect } = useRenderInputs<T>({
		control,
		// error,
		errors,
		register,
	});

	return (
		<>
			<FormStyle className={style.formUser}>
				<form onSubmit={handleSubmit} className={style.formUser__form}>
					{renderSelect({
						name: 'v_e',
						placeholder: userMessages.v_e.input.placeHolder,
						options: transformEnum({ transformEnum: NationalityEnum }),
						label: userMessages.v_e.input.label,
						iconName: 'nationality',
					})}
					{renderInput({
						name: 'ci',
						placeholder: userMessages.ci.input.placeHolder,
						label: userMessages.ci.input.label,
						iconName: 'ci',
					})}
					{renderInput({
						name: 'first_name',
						placeholder: userMessages.first_name.input.placeHolder,
						label: userMessages.first_name.input.label,
						iconName: 'userData',
					})}
					{renderInput({
						name: 'middle_name',
						placeholder: userMessages.middle_name.input.placeHolder,
						label: userMessages.middle_name.input.label,
						iconName: 'userData',
					})}
					{renderInput({
						name: 'first_surname',
						placeholder: userMessages.first_surname.input.placeHolder,
						label: userMessages.first_surname.input.label,
						iconName: 'userData',
					})}
					{renderInput({
						name: 'last_surname',
						placeholder: userMessages.last_surname.input.placeHolder,
						label: userMessages.last_surname.input.label,
						iconName: 'userData',
					})}
					{renderSelect({
						name: 'sex',
						placeholder: userMessages.sex.input.placeHolder,
						options: transformEnum({ transformEnum: SexEnum, text: SexText }),
						label: userMessages.sex.input.label,
						iconName: 'sex',
					})}
					{renderInput({
						name: 'email',
						placeholder: userMessages.email.input.placeHolder,
						label: userMessages.email.input.label,
						type: 'email',
						iconName: 'email',
					})}
					{renderInput({
						name: 'phone',
						placeholder: userMessages.phone.input.placeHolder,
						label: userMessages.phone.input.label,
						iconName: 'phone',
					})}

					{optionalPassword &&
						renderInput({
							name: 'password',
							placeholder: userMessages.password.input.placeHolder,
							label: userMessages.password.input.label,
							type: 'password',
							iconName: 'password',
						})}

					{token &&
						handleData({ per: Permission.rol }) &&
						rolData &&
						renderSelect({
							name: 'uidRol',
							placeholder: userMessages.uidRol.input.placeHolder,
							options: rolData,
							label: userMessages.uidRol.input.label,
							iconName: 'rol',
							enableSearch: true,
						})}	

					{!token && (
						<div className={style.formUser__links}>
							<LinkPer
								to='/'
								text={userMessages.login.link}
								icon={{ iconName: 'link', type: 'fpIcons' }}
							/>
							<Btn
								title={userMessages.btn.active}
								text={userMessages.btn.active}
								onClick={handleOpen}
								className={style.formUser__linkBtn}
								icon={{ iconName: 'padlock', type: 'fpIcons' }}
							/>
						</div>
					)}

					{handleOpenUpdatePassword && (
						<div className={style.formUser__updatePassword}>
							<Btn
								title={userMessages.btn.passwordUpdate}
								text={userMessages.btn.passwordUpdate}
								onClick={handleOpenUpdatePassword}
								className={style.formUser__linkBtn}
								icon={{ iconName: 'password', type: 'fpIcons' }}
							/>
						</div>
					)}

					<Btn
						title={userMessages.btn.default}
						className={`${styleBtn['btn--form']} ${style.formUser__btn}`}
						text={userMessages.btn.default}
						type='submit'
						disabled={loading}
					/>
				</form>
			</FormStyle>
		</>
	);
};

export default FormUser;
