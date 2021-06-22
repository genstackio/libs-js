import CheckboxField, {CheckboxFieldProps} from "./CheckboxField";

export function RememberPasswordField(props: RememberPasswordFieldProps) {
    return (
        <CheckboxField kind={'rememberPassword'} {...props} />
    );
}

export interface RememberPasswordFieldProps extends CheckboxFieldProps {
}

export default RememberPasswordField
