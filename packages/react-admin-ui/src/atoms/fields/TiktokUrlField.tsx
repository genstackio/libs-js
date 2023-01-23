import UrlField, { UrlFieldProps } from './UrlField';

export function TiktokUrlField(props: TiktokUrlFieldProps) {
    return <UrlField kind={'tiktokUrl'} {...props} />;
}

export type TiktokUrlFieldProps = UrlFieldProps;

// noinspection JSUnusedGlobalSymbols
export default TiktokUrlField;
