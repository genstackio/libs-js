import ImageUploadField, {ImageUploadFieldProps} from "./ImageUploadField";

export function MobileImageField(props: MobileImageFieldProps) {
    return <ImageUploadField kind={'mobileImage'} {...props} />;
}

export interface MobileImageFieldProps extends ImageUploadFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default MobileImageField;
