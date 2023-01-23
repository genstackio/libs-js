import ImageUploadField, { ImageUploadFieldProps } from './ImageUploadField';

export function LogoImageField(props: LogoImageFieldProps) {
    return <ImageUploadField kind={'logoImage'} {...props} />;
}

export type LogoImageFieldProps = ImageUploadFieldProps;

// noinspection JSUnusedGlobalSymbols
export default LogoImageField;
