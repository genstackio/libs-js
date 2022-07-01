import useComponent from "@genstackio/react-contexts/lib/hooks/useComponent";

export function FormFieldContent({name, required = false, disabled = false, autoFocus = false, options: {field} = {}}: FormFieldContentProps) {
    const Component = useComponent('form_field', name);

    return <Component {...field} autoFocus={autoFocus} disabled={disabled} required={required} />;
}

export interface FormFieldContentProps {
    name: string;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    options?: any;
}

export default FormFieldContent;
