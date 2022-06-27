import ImageUploadField, {ImageUploadFieldProps} from "./ImageUploadField";

export function MainImageField(props: MainImageFieldProps) {
    return <ImageUploadField kind={'mainImage'} {...props} />;
}

export interface MainImageFieldProps extends ImageUploadFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default MainImageField;
