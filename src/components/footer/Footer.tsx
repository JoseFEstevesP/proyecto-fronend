import { Icons } from '../icon/Icons';
import style from './Footer.module.scss';

const Footer = ({ className }: { className?: string }) => {
	return (
		<footer className={`${style.footer} ${className}`}>
			<section className={style.footer__container}>
				<div className={style.footer__section}>
					<strong>Eco de montaña alta</strong>
					<p className={style.footer__sectionText}>
						Sistema de comunicación
						<br />
						Comunidad de Venezuela
					</p>
				</div>
				<div className={style.footer__section}>
					<strong>Contacto</strong>
					<p className={style.footer__sectionContact}>
						<strong>Dirección:</strong>
						Parque Central, Edif Mohedano, Caracas, Venezuela
					</p>
					<p className={style.footer__sectionContact}>
						<strong>Teléfono:</strong>
						+58 212-5721037
					</p>
					<p className={style.footer__sectionContact}>
						<strong>Correo:</strong>
						correo@gmai.gob.ve
					</p>
				</div>
				<div className={style.footer__section}>
					<strong>Siguenos:</strong>
					<div className={style.footer__sectionSocial}>
						<a
							href='https://www.facebook.com/farmapatriaVE/?locale=es_LA'
							target='_blank'
							rel='noreferrer'
							className={style.footer__sectionSocialLink}
						>
							<Icons iconName='facebook' type='fpIcons' />
						</a>
						<a
							href='https://www.instagram.com/farmapatriav/?hl=es'
							target='_blank'
							rel='noreferrer'
							className={style.footer__sectionSocialLink}
						>
							<Icons iconName='instagram' type='fpIcons' />
						</a>
					</div>
				</div>
			</section>
			<p>
				© 2023 Farmapatria. Todos los derechos reservados.
				<br />
				Política de Privacidad | Términos de Uso
			</p>
		</footer>
	);
};
export default Footer;
