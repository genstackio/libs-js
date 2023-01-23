import ImageUploadField, { ImageUploadFieldProps } from './ImageUploadField';

export function TwitterShareImageField(props: TwitterShareImageFieldProps) {
    return <ImageUploadField kind={'twitterShareImage'} {...props} />;
}

export type TwitterShareImageFieldProps = ImageUploadFieldProps;

// noinspection JSUnusedGlobalSymbols
export default TwitterShareImageField;
