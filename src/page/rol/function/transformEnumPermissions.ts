import { TransformEnumType } from '../../../helper/transformEnumType';

export const transformEnumPermissions = ({
	transformEnum,
	text,
}: {
	transformEnum: TransformEnumType;
	text: Record<string, string>;
}) => {
	return Object.values(transformEnum).map(item => {
		return {
			value: item,
			label: text[item],
		};
	});
};
