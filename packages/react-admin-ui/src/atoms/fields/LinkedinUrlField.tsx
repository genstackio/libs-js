import UrlField, { UrlFieldProps } from './UrlField';

export function LinkedinUrlField(props: LinkedinUrlFieldProps) {
    return <UrlField kind={'linkedinUrl'} {...props} />;
}

export type LinkedinUrlFieldProps = UrlFieldProps;

// noinspection JSUnusedGlobalSymbols
export default LinkedinUrlField;
