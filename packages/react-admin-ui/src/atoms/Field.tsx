import useFieldBase from "@genstackio/react-contexts/lib/hooks/useField";

export function Field({name, ...props}: FieldProps) {
    const Component = useFieldBase(name || props.kind || props.type || 'text');

    return <Component {...props} />;
}

export interface FieldProps {
    name?: string;
    [key: string]: any;
}

// noinspection JSUnusedGlobalSymbols
export default Field;
