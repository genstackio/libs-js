import UrlField, { UrlFieldProps } from './UrlField';

export function MainLongVideoUrlField(props: MainLongVideoUrlFieldProps) {
    return <UrlField kind={'mainLongVideoUrl'} {...props} />;
}

export type MainLongVideoUrlFieldProps = UrlFieldProps;

// noinspection JSUnusedGlobalSymbols
export default MainLongVideoUrlField;
