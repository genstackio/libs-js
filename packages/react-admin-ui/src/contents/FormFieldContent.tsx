import Field from '../atoms/Field';
import { WithClassName } from '../withs';

const defaultForcedDisabledFields: Record<string, boolean> = {};
const defaultForcedRequiredFields: Record<string, boolean> = {};
const defaultForcedAutoFocusFields: Record<string, boolean> = {};

export function FormFieldContent({
    className,
    name,
    required: rawRequired = undefined,
    disabled: rawDisabled = undefined,
    autoFocus: rawAutoFocus = undefined,
    errors = undefined,
    options: {
        field,
        forcedDisabledFields = defaultForcedDisabledFields,
        forcedRequiredFields = defaultForcedRequiredFields,
        forcedAutoFocusFields = defaultForcedAutoFocusFields,
    } = {},
}: FormFieldContentProps) {
    const disabled = rawDisabled || !!forcedDisabledFields?.[name];
    const required = rawRequired || !!forcedRequiredFields?.[name];
    const autoFocus = rawAutoFocus || !!forcedAutoFocusFields?.[name];

    return (
        <Field
            name={name}
            {...field}
            {...(undefined !== className ? { className } : {})}
            {...(undefined !== errors ? { errors } : {})}
            {...(undefined !== autoFocus ? { autoFocus } : {})}
            {...(undefined !== disabled ? { disabled } : {})}
            {...(undefined !== required ? { required } : {})}
        />
    );
}

export interface FormFieldContentProps extends WithClassName {
    name: string;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    options?: any;
    errors?: any;
}

export default FormFieldContent;
