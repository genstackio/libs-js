import ImageUploadField, {ImageUploadFieldProps} from "./ImageUploadField";

export function UserImageUploadField(props: UserImageUploadFieldProps) {
    return (
        <ImageUploadField maxSizeBytes={1500000} minSizeBytes={1} accept={'image/*'} {...props} />
    );
}

export interface UserImageUploadFieldProps extends ImageUploadFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default UserImageUploadField;
