import ImageUploadField, { ImageUploadFieldProps } from './ImageUploadField';

export function FlyerImageField(props: FlyerImageFieldProps) {
    return <ImageUploadField kind={'flyerImage'} {...props} />;
}

export type FlyerImageFieldProps = ImageUploadFieldProps;

// noinspection JSUnusedGlobalSymbols
export default FlyerImageField;
