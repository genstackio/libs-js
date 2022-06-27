import ImageUploadField, {ImageUploadFieldProps} from "./ImageUploadField";

export function MainQuoteImageField(props: MainQuoteImageFieldProps) {
    return <ImageUploadField kind={'mainQuoteImage'} {...props} />;
}

export interface MainQuoteImageFieldProps extends ImageUploadFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default MainQuoteImageField;
