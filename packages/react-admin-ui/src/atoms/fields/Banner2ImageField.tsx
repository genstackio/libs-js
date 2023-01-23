import ImageUploadField, { ImageUploadFieldProps } from './ImageUploadField';

export function Banner2ImageField(props: Banner2ImageFieldProps) {
    return <ImageUploadField kind={'banner2Image'} {...props} />;
}

export type Banner2ImageFieldProps = ImageUploadFieldProps;

// noinspection JSUnusedGlobalSymbols
export default Banner2ImageField;
