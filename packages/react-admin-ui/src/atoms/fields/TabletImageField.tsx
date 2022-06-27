import ImageUploadField, {ImageUploadFieldProps} from "./ImageUploadField";

export function TabletImageField(props: TabletImageFieldProps) {
    return <ImageUploadField kind={'tabletImage'} {...props} />;
}

export interface TabletImageFieldProps extends ImageUploadFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default TabletImageField;
