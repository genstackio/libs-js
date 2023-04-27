import Alert from '@genstackio/react-admin-ui/lib/atoms/Alert';

export function DefaultListError({ error }: DefaultListErrorProps) {
    return !!error ? (
        <Alert color={'danger'} className={'mb-2'}>
            {error.message}
        </Alert>
    ) : null;
}

export type DefaultListErrorProps = BaseListErrorProps;

export interface BaseListErrorProps {
    error?: { message: string };
}

// noinspection JSUnusedGlobalSymbols
export default DefaultListError;
