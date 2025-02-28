import { FieldValues } from 'react-hook-form';
import useRenderInputs from '../../../hooks/useRenderInputs';
import { userMessages } from '../../../page/user/msg';
import { Btn } from '../../button/Btn';
import styleBtn from '../../button/Btn.module.scss';
import style from './Code.module.scss';
import { CodeProp } from './codeType';

const Code = <T extends FieldValues>({
	handleSubmit,
	register,
	errors,
	label,
}: CodeProp<T>) => {
	const { renderInput } = useRenderInputs<T>({
		errors,
		register,
	});

	return (
		<form onSubmit={handleSubmit} className={style.code}>
			{renderInput({
				name: 'code',
				label,
				placeholder: userMessages.code.placeHolder,
				iconName: 'shield',
			})}
			<Btn
				title={userMessages.code.titleBtn}
				text={userMessages.code.titleBtn}
				type='submit'
				className={styleBtn['btn--form']}
			/>
		</form>
	);
};
export default Code;
