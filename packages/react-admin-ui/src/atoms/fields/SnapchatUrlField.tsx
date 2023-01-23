import UrlField, { UrlFieldProps } from './UrlField';

export function SnapchatUrlField(props: SnapchatUrlFieldProps) {
    return <UrlField kind={'snapchatUrl'} {...props} />;
}

export type SnapchatUrlFieldProps = UrlFieldProps;

// noinspection JSUnusedGlobalSymbols
export default SnapchatUrlField;
