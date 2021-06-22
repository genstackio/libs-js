import UrlField, {UrlFieldProps} from "./UrlField";

export function TwitterField(props: TwitterFieldProps) {
    return (
        <UrlField kind={'twitter'} {...props} />
    );
}

export interface TwitterFieldProps extends UrlFieldProps {}

export default TwitterField
