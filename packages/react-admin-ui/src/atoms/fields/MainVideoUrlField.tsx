import UrlField, { UrlFieldProps } from './UrlField';

export function MainVideoUrlField(props: MainVideoUrlFieldProps) {
    return <UrlField kind={'mainVideoUrl'} {...props} />;
}

export type MainVideoUrlFieldProps = UrlFieldProps;

// noinspection JSUnusedGlobalSymbols
export default MainVideoUrlField;
