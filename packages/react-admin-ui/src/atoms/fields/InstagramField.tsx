import UrlField, {UrlFieldProps} from "./UrlField";

export function InstagramField(props: InstagramFieldProps) {
    return (
        <UrlField kind={'instagram'} {...props} />
    );
}

export interface InstagramFieldProps extends UrlFieldProps {}

export default InstagramField
