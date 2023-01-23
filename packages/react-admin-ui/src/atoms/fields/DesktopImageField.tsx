import ImageUploadField, { ImageUploadFieldProps } from './ImageUploadField';

export function DesktopImageField(props: DesktopImageFieldProps) {
    return <ImageUploadField kind={'desktopImage'} {...props} />;
}

export type DesktopImageFieldProps = ImageUploadFieldProps;

// noinspection JSUnusedGlobalSymbols
export default DesktopImageField;
