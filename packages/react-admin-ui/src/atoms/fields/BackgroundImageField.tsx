import ImageUploadField, { ImageUploadFieldProps } from './ImageUploadField';

export function BackgroundImageField(props: BackgroundImageFieldProps) {
    return <ImageUploadField kind={'backgroundImage'} {...props} />;
}

export type BackgroundImageFieldProps = ImageUploadFieldProps;

// noinspection JSUnusedGlobalSymbols
export default BackgroundImageField;
