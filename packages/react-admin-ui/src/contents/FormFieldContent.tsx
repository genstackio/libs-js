import useImporter from "@genstackio/react-contexts/lib/hooks/useImporter";

export function FormFieldContent({components, name, required = false, disabled = false, autoFocus = false, options: {field} = {}}: FormFieldContentProps) {
    const importer = useImporter();
    const Comp = (components || {})[`form_field_${name || ''}`] || (importer ? importer('form_field', name) : (() => null));

    return <Comp {...field} autoFocus={autoFocus} disabled={disabled} required={required} />;
}

export interface FormFieldContentProps {
    components?: {[key: string]: any};
    name: string;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    options?: any;
}

export default FormFieldContent;