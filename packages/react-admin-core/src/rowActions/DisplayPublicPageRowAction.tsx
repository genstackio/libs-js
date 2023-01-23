import Button from '@genstackio/react-admin-ui/lib/atoms/Button';
import { useCallback } from 'react';

export function DisplayPublicPageRowAction({ doc, actions }: DisplayPublicPageRowActionProps) {
    const onClick = useCallback(
        () =>
            actions?.displayPublicPage
                ? actions.displayPublicPage(
                      [
                          doc?.row?.publicPageUrl,
                          doc?.row?.publicPageShortUrl,
                          doc?.publicPageUrl,
                          doc?.publicPageShortUrl,
                      ].find((x) => !!x),
                  )
                : undefined,
        [
            actions?.displayPublicPage,
            doc?.row?.publicPageUrl,
            doc?.row?.publicPageShortUrl,
            doc?.publicPageUrl,
            doc?.publicPageShortUrl,
        ],
    );

    if (!doc?.row?.publicPageUrl && !doc?.row?.publicPageShortUrl) return null;

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

export interface DisplayPublicPageRowActionProps {
    doc: any;
    actions?: Record<string, Function>;
}

// noinspection JSUnusedGlobalSymbols
export default DisplayPublicPageRowAction;
