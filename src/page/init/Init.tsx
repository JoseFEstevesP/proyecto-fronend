import styles from './Init.module.scss';
const Init = () => {
	return (
		<>
			<div className={styles.welcomeSection}>
				<h1 className={styles.welcomeHeading}>¡Bienvenidos!</h1>
				<p className={styles.welcomeText}>
					Estamos encantados de tenerlos aquí. En este espacio encontrarán
					información, eventos y muchos más.
				</p>
			</div>
		</>
	);
};
export default Init;
