import Button from '@genstackio/react-admin-ui/lib/atoms/Button';
import { useCallback } from 'react';

export function DeleteRowAction({ doc, actions, singularName }: DeleteRowActionProps) {
    const onClick = useCallback(
        () => (actions?.onDelete ? actions.onDelete(doc?.id) : undefined),
        [actions?.onDelete, doc?.id],
    );

    return (
        <Button
            onClick={onClick}
            color={'danger'}
            variant={'contained'}
            size={'xs'}
            icon={'fa-fas--trash'}
            confirm
            confirmKind={`delete${singularName ? `_${singularName?.toLowerCase()}` : ''}`}
            confirmDanger
        />
    );
}

export interface DeleteRowActionProps {
    doc: any;
    singularName?: string;
    actions?: Record<string, Function>;
}

// noinspection JSUnusedGlobalSymbols
export default DeleteRowAction;
