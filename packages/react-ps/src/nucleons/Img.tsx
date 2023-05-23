import withPdfStyle from '../hocs/withPdfStyle';
import { Image } from '@react-pdf/renderer/lib/react-pdf.cjs';

// noinspection HtmlRequiredAltAttribute
export const Img = withPdfStyle<ImgProps>((props: ImgProps) => <Image {...props} />);

export type ImgProps = any;

export default Img;
