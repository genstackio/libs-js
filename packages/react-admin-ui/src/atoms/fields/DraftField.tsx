import SwitchField, {SwitchFieldProps} from "./SwitchField";

export function DraftField(props: DraftFieldProps) {
    return <SwitchField kind={'draft'} {...props} />
}

export interface DraftFieldProps extends SwitchFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default DraftField;
