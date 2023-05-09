import Field from '../atoms/Field';
import { WithClassName } from '../withs';

export function FormFieldContent({
    className,
    name,
    required = undefined,
    disabled = undefined,
    autoFocus = undefined,
    errors = undefined,
    options: { field } = {},
}: FormFieldContentProps) {
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
