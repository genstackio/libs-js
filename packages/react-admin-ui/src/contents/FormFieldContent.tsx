import Field from '../atoms/Field';

export function FormFieldContent({
    name,
    required = undefined,
    disabled = undefined,
    autoFocus = undefined,
    options: { field } = {},
    ...props
}: FormFieldContentProps) {
    return (
        <Field
            name={name}
            {...props}
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
