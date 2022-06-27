import ImageUploadField, {ImageUploadFieldProps} from "./ImageUploadField";

export function TwitterShareImageField(props: TwitterShareImageFieldProps) {
    return <ImageUploadField kind={'twitterShareImage'} {...props} />;
}

export interface TwitterShareImageFieldProps extends ImageUploadFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default TwitterShareImageField;
