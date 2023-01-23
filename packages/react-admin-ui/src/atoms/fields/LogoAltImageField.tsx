import ImageUploadField, { ImageUploadFieldProps } from './ImageUploadField';

export function LogoAltImageField(props: LogoAltImageFieldProps) {
    return <ImageUploadField kind={'logoAltImage'} {...props} />;
}

export type LogoAltImageFieldProps = ImageUploadFieldProps;

// noinspection JSUnusedGlobalSymbols
export default LogoAltImageField;
