import UrlField, { UrlFieldProps } from './UrlField';

export function TwitterField(props: TwitterFieldProps) {
    return <UrlField kind={'twitter'} {...props} />;
}

export type TwitterFieldProps = UrlFieldProps;

export default TwitterField;
