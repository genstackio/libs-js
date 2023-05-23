import Img, { ImgProps } from '../nucleons/Img';
import { useCustomization } from '../hooks/useCustomization';

const defaultStaticCdn = 'https://statics.default';

export function StaticImg({ src, ...props }: StaticImgProps) {
    const { tenant } = useCustomization();
    const uri = `/tenants/${tenant}/images/${src}`;
    return <Img {...props} src={`${process.env.STATICS_CDN || defaultStaticCdn}${uri}`} />;
}

export type StaticImgProps = ImgProps;

export default StaticImg;
