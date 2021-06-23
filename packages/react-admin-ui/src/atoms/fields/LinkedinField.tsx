import UrlField, { UrlFieldProps } from './UrlField';

export function LinkedinField(props: LinkedinFieldProps) {
    return <UrlField kind={'linkedin'} {...props} />;
}

export type LinkedinFieldProps = UrlFieldProps;

export default LinkedinField;
