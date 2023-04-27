import useComponent from '@genstackio/react-contexts/lib/hooks/useComponent';
import { BaseListToolbarProps } from '../misc/DefaultListToolbar';

export function ListToolbar(props: ListToolbarProps) {
    const Comp = useComponent('misc', 'default_list_toolbar');

    return <Comp {...props} />;
}

export type ListToolbarProps = BaseListToolbarProps;

// noinspection JSUnusedGlobalSymbols
export default ListToolbar;
