import ImageUploadField, { ImageUploadFieldProps } from './ImageUploadField';

export function MobileImageField(props: MobileImageFieldProps) {
    return <ImageUploadField kind={'mobileImage'} {...props} />;
}

export type MobileImageFieldProps = ImageUploadFieldProps;

// noinspection JSUnusedGlobalSymbols
export default MobileImageField;
