import ImageUploadField, {ImageUploadFieldProps} from "./ImageUploadField";

export function LogoAltImageField(props: LogoAltImageFieldProps) {
    return <ImageUploadField kind={'logoAltImage'} {...props} />;
}

export interface LogoAltImageFieldProps extends ImageUploadFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default LogoAltImageField;
