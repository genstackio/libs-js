import useComponent from '@genstackio/react-contexts/lib/hooks/useComponent';
import { BaseListErrorProps } from '../misc/DefaultListError';

export function ListError(props: ListErrorProps) {
    const Comp = useComponent('misc', 'default_list_error');

    return <Comp {...props} />;
}

export type ListErrorProps = BaseListErrorProps;

// noinspection JSUnusedGlobalSymbols
export default ListError;
