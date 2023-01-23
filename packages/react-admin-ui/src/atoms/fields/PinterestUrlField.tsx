import UrlField, { UrlFieldProps } from './UrlField';

export function PinterestUrlField(props: PinterestUrlFieldProps) {
    return <UrlField kind={'pinterestUrl'} {...props} />;
}

export type PinterestUrlFieldProps = UrlFieldProps;

// noinspection JSUnusedGlobalSymbols
export default PinterestUrlField;
