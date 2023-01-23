import Button from '@genstackio/react-admin-ui/lib/atoms/Button';

export function DownloadRowAction({ doc }: DownloadRowActionProps) {
    const pName: undefined | { url: string } = doc?.row?.publicFile || doc?.row?.mainFile || undefined;

    if (!pName || !pName?.url) return null;

    return <Button onClick={pName!.url} color={'dark'} variant={'contained'} size={'xs'} icon={'fa-fas--download'} />;
}

export interface DownloadRowActionProps {
    doc: any;
    actions?: Record<string, Function>;
}

// noinspection JSUnusedGlobalSymbols
export default DownloadRowAction;
