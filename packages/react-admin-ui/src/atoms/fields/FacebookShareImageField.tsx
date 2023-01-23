import ImageUploadField, { ImageUploadFieldProps } from './ImageUploadField';

export function FacebookShareImageField(props: FacebookShareImageFieldProps) {
    return <ImageUploadField kind={'facebookShareImage'} {...props} />;
}

export type FacebookShareImageFieldProps = ImageUploadFieldProps;

// noinspection JSUnusedGlobalSymbols
export default FacebookShareImageField;
