import UrlField, { UrlFieldProps } from './UrlField';

export function FacebookUrlField(props: FacebookUrlFieldProps) {
    return <UrlField kind={'facebookUrl'} {...props} />;
}

export type FacebookUrlFieldProps = UrlFieldProps;

// noinspection JSUnusedGlobalSymbols
export default FacebookUrlField;
