import UrlField, {UrlFieldProps} from "./UrlField";

export function LinkedinField(props: LinkedinFieldProps) {
    return (
        <UrlField kind={'linkedin'} {...props} />
    );
}

export interface LinkedinFieldProps extends UrlFieldProps {}

export default LinkedinField
