import Field from '../atoms/Field';

export function FormFieldContent({
    name,
    required = undefined,
    disabled = undefined,
    autoFocus = undefined,
    options: { field } = {},
}: FormFieldContentProps) {
    return (
        <Field
            name={name}
            {...field}
            {...(undefined !== autoFocus ? { autoFocus } : {})}
            {...(undefined !== disabled ? { disabled } : {})}
            {...(undefined !== required ? { required } : {})}
        />
    );
}

export interface FormFieldContentProps {
    name: string;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    options?: any;
}

export default FormFieldContent;
