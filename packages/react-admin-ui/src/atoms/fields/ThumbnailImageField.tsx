import ImageUploadField, {ImageUploadFieldProps} from "./ImageUploadField";

export function ThumbnailImageField(props: ThumbnailImageFieldProps) {
    return <ImageUploadField kind={'thumbnailImage'} {...props} />;
}

export interface ThumbnailImageFieldProps extends ImageUploadFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default ThumbnailImageField;
