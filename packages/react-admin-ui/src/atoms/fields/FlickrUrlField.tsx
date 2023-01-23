import UrlField, { UrlFieldProps } from './UrlField';

export function FlickrUrlField(props: FlickrUrlFieldProps) {
    return <UrlField kind={'flickrUrl'} {...props} />;
}

export type FlickrUrlFieldProps = UrlFieldProps;

// noinspection JSUnusedGlobalSymbols
export default FlickrUrlField;
