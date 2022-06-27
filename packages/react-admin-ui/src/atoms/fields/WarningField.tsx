// noinspection JSUnusedGlobalSymbols

import TextareaField, {TextareaFieldProps} from "./TextareaField";

export function WarningField(props: WarningFieldProps) {
    return <TextareaField kind={"warning"} {...props} />;
}

export interface WarningFieldProps extends TextareaFieldProps {
}

export default WarningField;
