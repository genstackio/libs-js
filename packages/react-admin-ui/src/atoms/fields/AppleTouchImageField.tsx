import ImageUploadField, {ImageUploadFieldProps} from "./ImageUploadField";

export function AppleTouchImageField(props: AppleTouchImageFieldProps) {
    return <ImageUploadField kind={'appleTouchImage'} {...props} />;
}

export interface AppleTouchImageFieldProps extends ImageUploadFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default AppleTouchImageField;
