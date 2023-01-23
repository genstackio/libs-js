import ImageUploadField, { ImageUploadFieldProps } from './ImageUploadField';

export function BannerImageField(props: BannerImageFieldProps) {
    return <ImageUploadField kind={'bannerImage'} {...props} />;
}

export type BannerImageFieldProps = ImageUploadFieldProps;

// noinspection JSUnusedGlobalSymbols
export default BannerImageField;
