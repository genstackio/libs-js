import UrlField, { UrlFieldProps } from './UrlField';

export function BannerVideoUrlField(props: BannerVideoUrlFieldProps) {
    return <UrlField kind={'bannerVideoUrl'} {...props} />;
}

export type BannerVideoUrlFieldProps = UrlFieldProps;

// noinspection JSUnusedGlobalSymbols
export default BannerVideoUrlField;
