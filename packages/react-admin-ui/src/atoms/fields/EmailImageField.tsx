import ImageUploadField, {ImageUploadFieldProps} from "./ImageUploadField";

export function EmailImageField(props: EmailImageFieldProps) {
    return <ImageUploadField kind={'emailImage'} {...props} />;
}

export interface EmailImageFieldProps extends ImageUploadFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default EmailImageField;
