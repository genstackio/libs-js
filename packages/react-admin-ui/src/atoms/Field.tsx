import useFieldBase from '@genstackio/react-contexts/lib/hooks/useField';

export function Field({ name, type, kind, label, placeholder, ...props }: FieldProps) {
    const Component = useFieldBase(name || kind || type || 'text');

    return <Component {...props}
                      {...(type ? {type} : {})}
                      {...(kind ? {kind} : {})}
                      {...(label ? {label} : {})}
                      {...(placeholder ? {placeholder} : {})}
    />;
}

export interface FieldProps {
    name?: string;
    [key: string]: any;
}

// noinspection JSUnusedGlobalSymbols
export default Field;
