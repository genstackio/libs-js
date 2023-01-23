import ImageUploadField, { ImageUploadFieldProps } from './ImageUploadField';

export function AppleTouchImageField(props: AppleTouchImageFieldProps) {
    return <ImageUploadField kind={'appleTouchImage'} {...props} />;
}

export type AppleTouchImageFieldProps = ImageUploadFieldProps;

// noinspection JSUnusedGlobalSymbols
export default AppleTouchImageField;
