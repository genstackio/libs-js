import UrlField, {UrlFieldProps} from "./UrlField";

export function BannerVideoUrlField(props: BannerVideoUrlFieldProps) {
    return <UrlField kind={'bannerVideoUrl'} {...props} />
}

export interface BannerVideoUrlFieldProps extends UrlFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default BannerVideoUrlField;
