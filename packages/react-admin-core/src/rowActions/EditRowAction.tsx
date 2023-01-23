import Button from '@genstackio/react-admin-ui/lib/atoms/Button';
import { useCallback } from 'react';

export function EditRowAction({ doc, actions }: EditRowActionProps) {
    const onClick = useCallback(() => (actions?.edit ? actions.edit(doc?.id) : undefined), [actions?.edit, doc?.id]);

    return (
        <Button
            onClick={onClick}
            color={'secondary'}
            variant={'contained'}
            size={'xs'}
            icon={'fa-fas--pen-to-square'}
        />
    );
}

export interface EditRowActionProps {
    doc: any;
    actions?: Record<string, Function>;
}

// noinspection JSUnusedGlobalSymbols
export default EditRowAction;
