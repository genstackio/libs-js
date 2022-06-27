import ImageUploadField, {ImageUploadFieldProps} from "./ImageUploadField";

export function BannerImageField(props: BannerImageFieldProps) {
    return <ImageUploadField kind={'bannerImage'} {...props} />;
}

export interface BannerImageFieldProps extends ImageUploadFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default BannerImageField;
