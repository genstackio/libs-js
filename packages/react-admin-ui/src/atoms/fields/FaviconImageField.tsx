import ImageUploadField, {ImageUploadFieldProps} from "./ImageUploadField";

export function FaviconImageField(props: FaviconImageFieldProps) {
    return <ImageUploadField kind={'faviconImage'} {...props} />;
}

export interface FaviconImageFieldProps extends ImageUploadFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default FaviconImageField;
