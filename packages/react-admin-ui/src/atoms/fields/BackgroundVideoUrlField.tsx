import UrlField, { UrlFieldProps } from './UrlField';

export function BackgroundVideoUrlField(props: BackgroundVideoUrlFieldProps) {
    return <UrlField kind={'backgroundVideoUrl'} {...props} />;
}

export type BackgroundVideoUrlFieldProps = UrlFieldProps;

// noinspection JSUnusedGlobalSymbols
export default BackgroundVideoUrlField;
