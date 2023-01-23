import ImageUploadField, { ImageUploadFieldProps } from './ImageUploadField';

export function TabletImageField(props: TabletImageFieldProps) {
    return <ImageUploadField kind={'tabletImage'} {...props} />;
}

export type TabletImageFieldProps = ImageUploadFieldProps;

// noinspection JSUnusedGlobalSymbols
export default TabletImageField;
