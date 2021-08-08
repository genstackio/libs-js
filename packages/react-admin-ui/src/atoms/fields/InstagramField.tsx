import UrlField, { UrlFieldProps } from './UrlField';

export function InstagramField(props: InstagramFieldProps) {
    return <UrlField kind={'instagram'} {...props} />;
}

export type InstagramFieldProps = UrlFieldProps;

// noinspection JSUnusedGlobalSymbols
export default InstagramField;
