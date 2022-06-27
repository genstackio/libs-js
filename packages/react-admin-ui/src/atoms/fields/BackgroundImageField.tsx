import ImageUploadField, {ImageUploadFieldProps} from "./ImageUploadField";

export function BackgroundImageField(props: BackgroundImageFieldProps) {
    return <ImageUploadField kind={'backgroundImage'} {...props} />;
}

export interface BackgroundImageFieldProps extends ImageUploadFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default BackgroundImageField;
