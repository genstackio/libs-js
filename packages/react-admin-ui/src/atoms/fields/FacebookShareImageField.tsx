import ImageUploadField, {ImageUploadFieldProps} from "./ImageUploadField";

export function FacebookShareImageField(props: FacebookShareImageFieldProps) {
    return <ImageUploadField kind={'facebookShareImage'} {...props} />;
}

export interface FacebookShareImageFieldProps extends ImageUploadFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default FacebookShareImageField;
