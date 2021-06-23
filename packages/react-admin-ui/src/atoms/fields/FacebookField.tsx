import UrlField, { UrlFieldProps } from './UrlField';

export function FacebookField(props: FacebookFieldProps) {
    return <UrlField kind={'facebook'} {...props} />;
}

export type FacebookFieldProps = UrlFieldProps;

export default FacebookField;
