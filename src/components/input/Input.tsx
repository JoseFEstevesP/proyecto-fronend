import { Icons } from '../icon/Icons';
import styles from './Input.module.scss';
import { InputProps } from './inputProps';
import { renderErrorMessage } from './renderErrorMessage';

export const Input = ({
	name,
	placeholder,
	error,
	className,
	type = 'text',
	register,
	label,
	disabled = false,
	iconName,
}: InputProps) => {
	return (
		<div className={`${styles.input} ${className ? className : ''}`}>
			{label && (
				<label htmlFor={name} className={styles.input__label}>
					{label}
				</label>
			)}
			<div
				className={`${styles.input__container} ${error ? styles.input__error : ''} ${disabled ? styles['input__container--disabled'] : ''}`}
			>
				{iconName && (
					<div className={styles.input__contentIcon}>
						<Icons
							type='fpIcons'
							iconName={iconName}
							className={`${styles.input__icon} ${error ? styles['input__icon--error'] : ''}`}
						/>
					</div>
				)}
				<input
					id={name}
					placeholder={placeholder}
					type={type}
					{...register(name)}
					className={styles.input__input}
					disabled={disabled}
					aria-invalid={error ? 'true' : 'false'}
					aria-describedby={`${name}-error`}
					list={`${name}-list`}
				/>
				{disabled && (
					<Icons
						iconName='padlock'
						className={styles.input__iconDisabled}
						type='fpIcons'
					/>
				)}
			</div>
			{error && (
				<span className={styles.input__containerError}>
					{renderErrorMessage(error?.message)}
				</span>
			)}
		</div>
	);
};
