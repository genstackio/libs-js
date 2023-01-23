import ImageUploadField, { ImageUploadFieldProps } from './ImageUploadField';

export function MainImageField(props: MainImageFieldProps) {
    return <ImageUploadField kind={'mainImage'} {...props} />;
}

export type MainImageFieldProps = ImageUploadFieldProps;

// noinspection JSUnusedGlobalSymbols
export default MainImageField;
