import Button from '@genstackio/react-admin-ui/lib/atoms/Button';
import { useCallback } from 'react';

export function DisplayPrivatePageRowAction({ doc, actions }: DisplayPrivatePageRowActionProps) {
    const onClick = useCallback(
        () =>
            actions?.displayPrivatePage
                ? actions.displayPrivatePage(
                      [
                          doc?.row?.privatePageUrl,
                          doc?.row?.privatePageShortUrl,
                          doc?.privatePageUrl,
                          doc?.privatePageShortUrl,
                      ].find((x) => !!x),
                  )
                : undefined,
        [
            actions?.displayPrivatePage,
            doc?.row?.privatePageUrl,
            doc?.row?.privatePageShortUrl,
            doc?.privatePageUrl,
            doc?.privatePageShortUrl,
        ],
    );

    if (!doc?.row?.privatePageUrl && !doc?.row?.privatePageShortUrl) return null;

    return (
        <Button
            onClick={onClick}
            color={'dark'}
            variant={'contained'}
            size={'xs'}
            icon={'fa-fas--up-right-from-square'}
        />
    );
}

export interface DisplayPrivatePageRowActionProps {
    doc: any;
    actions?: Record<string, Function>;
}

// noinspection JSUnusedGlobalSymbols
export default DisplayPrivatePageRowAction;
