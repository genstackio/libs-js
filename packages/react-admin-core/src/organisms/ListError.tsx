import useComponent from '@genstackio/react-contexts/lib/hooks/useComponent';
import DefaultListError, { BaseListErrorProps } from '../misc/DefaultListError';

export function ListError(props: ListErrorProps) {
    const Comp = useComponent('misc', 'list_error') || DefaultListError;

    return <Comp {...props} />;
}

export type ListErrorProps = BaseListErrorProps;

// noinspection JSUnusedGlobalSymbols
export default ListError;
