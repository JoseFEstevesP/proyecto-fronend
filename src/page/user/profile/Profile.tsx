import { SEX_TEXT } from '../../../constants/sexObjet';
import useProfile from '../../../hooks/useProfile'; // Importa el nuevo hook
import style from './Profile.module.scss';
// TODO: terminar la pagina del perfil de usuario
const Profile = () => {
	const { data } = useProfile();

	return (
		<>
			{data && (
				<section className={style.profile}>
					<h1 className={style.profile__title}>Página de perfil</h1>
					<section
						className={`${style.profile__user} ${style.profile__contentData}`}
					>
						<h2 className={style.profile__dataTitle}>Datos de usuario</h2>
						<ul className={style.profile__dataList}>
							<li className={style.profile__dataItem}>
								Primer nombre:
								<span>{data.first_name}</span>
							</li>
							<li className={style.profile__dataItem}>
								Segundo nombre:
								<span>{data.middle_name}</span>
							</li>
							<li className={style.profile__dataItem}>
								Primer apellido:
								<span>{data.first_surname}</span>
							</li>
							<li className={style.profile__dataItem}>
								Segundo apellido:
								<span>{data.last_surname}</span>
							</li>
							<li className={style.profile__dataItem}>
								Cédula:
								<span>{`${data.v_e}-${data.ci}`}</span>
							</li>
							<li className={style.profile__dataItem}>
								Sexo:
								<span>{SEX_TEXT[data.sex]}</span>
							</li>
							<li className={style.profile__dataItem}>
								Correo:
								<span>{data.email}</span>
							</li>
							<li className={style.profile__dataItem}>
								Teléfono:
								<span>{data.phone}</span>
							</li>
							<li className={style.profile__dataItem}>
								Nombre del rol:
								<span>{data.rol.name}</span>
							</li>
							{data.pharmacyAS && (
								<>
									<li className={style.profile__dataItem}>
										Nombre de la farmacia:
										<span>{data.pharmacyAS.name}</span>
									</li>
									
								</>
							)}
						</ul>
					</section>
					<section
						className={`${style.profile__actions} ${style.profile__contentData}`}
					>
						<ul className={style.profile__dataList}>
							<li className={style.profile__dataItem}>Editar</li>
							<li className={style.profile__dataItem}>Eliminar</li>
						</ul>
					</section>
				</section>
			)}
		</>
	);
};

export default Profile;
