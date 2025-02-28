import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';

export const downloadComponent = ({
	element,
	name,
}: {
	element: HTMLElement;
	name: string;
}) => {
	html2canvas(element).then(canvas => {
		canvas.toBlob(blob => {
			if (blob) {
				saveAs(blob, `${name}.png`);
			}
		}, 'image/png');
	});
};
