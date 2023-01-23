import ImageUploadField, { ImageUploadFieldProps } from './ImageUploadField';

export function ThumbnailImageField(props: ThumbnailImageFieldProps) {
    return <ImageUploadField kind={'thumbnailImage'} {...props} />;
}

export type ThumbnailImageFieldProps = ImageUploadFieldProps;

// noinspection JSUnusedGlobalSymbols
export default ThumbnailImageField;
