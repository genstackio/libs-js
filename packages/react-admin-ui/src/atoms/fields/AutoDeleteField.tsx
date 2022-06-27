import SwitchField, {SwitchFieldProps} from "./SwitchField";

export function AutoDeleteField(props: AutoDeleteFieldProps) {
    return <SwitchField kind={'autoDelete'} {...props} />
}

export interface AutoDeleteFieldProps extends SwitchFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default AutoDeleteField;
