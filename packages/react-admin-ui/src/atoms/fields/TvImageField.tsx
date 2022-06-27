import ImageUploadField, {ImageUploadFieldProps} from "./ImageUploadField";

export function TvImageField(props: TvImageFieldProps) {
    return <ImageUploadField kind={'tvImage'} {...props} />;
}

export interface TvImageFieldProps extends ImageUploadFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default TvImageField;
