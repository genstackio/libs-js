import UrlField, {UrlFieldProps} from "./UrlField";

export function FacebookField(props: FacebookFieldProps) {
    return (
        <UrlField kind={'facebook'} {...props} />
    );
}

export interface FacebookFieldProps extends UrlFieldProps {}

export default FacebookField
