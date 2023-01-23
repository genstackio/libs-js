import useComponent from '@genstackio/react-contexts/lib/hooks/useComponent';

export function RowAction({ type, ...props }: RowActionProps) {
    const Comp = useComponent('row_action', type);

    if (!Comp) return null;

    return <Comp {...props} />;
}

export interface RowActionProps {
    type: string;
    doc: any;
    singularName?: string;
    actions?: Record<string, Function>;
}

// noinspection JSUnusedGlobalSymbols
export default RowAction;
