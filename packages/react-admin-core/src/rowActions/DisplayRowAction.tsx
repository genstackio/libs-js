import { useCallback } from 'react';
import Button from '@genstackio/react-admin-ui/lib/atoms/Button';

export function DisplayRowAction({ doc, actions }: DisplayRowActionProps) {
    const onClick = useCallback(
        () => (actions?.display ? actions.display(doc?.id) : undefined),
        [actions?.display, doc?.id],
    );

    return <Button onClick={onClick} color={'primary'} variant={'contained'} size={'xs'} icon={'fa-far--eye'} />;
}

export interface DisplayRowActionProps {
    doc: any;
    actions?: Record<string, Function>;
}

// noinspection JSUnusedGlobalSymbols
export default DisplayRowAction;
