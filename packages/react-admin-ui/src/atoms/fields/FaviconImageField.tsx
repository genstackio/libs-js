import ImageUploadField, { ImageUploadFieldProps } from './ImageUploadField';

export function FaviconImageField(props: FaviconImageFieldProps) {
    return <ImageUploadField kind={'faviconImage'} {...props} />;
}

export type FaviconImageFieldProps = ImageUploadFieldProps;

// noinspection JSUnusedGlobalSymbols
export default FaviconImageField;
