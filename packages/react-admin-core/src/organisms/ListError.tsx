import Alert from '@genstackio/react-admin-ui/lib/atoms/Alert';

export function ListError({ error }: ListErrorProps) {
    return !!error ? (
        <Alert color={'danger'} className={'mb-2'}>
            {error.message}
        </Alert>
    ) : null;
}

export interface ListErrorProps {
    error?: { message: string };
}

// noinspection JSUnusedGlobalSymbols
export default ListError;
