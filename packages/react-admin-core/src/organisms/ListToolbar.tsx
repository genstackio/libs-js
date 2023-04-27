import useComponent from '@genstackio/react-contexts/lib/hooks/useComponent';
import DefaultListToolbar, { BaseListToolbarProps } from '../misc/DefaultListToolbar';

export function ListToolbar(props: ListToolbarProps) {
    const Comp = useComponent('misc', 'list_toolbar') || DefaultListToolbar;

    return <Comp {...props} />;
}

export type ListToolbarProps = BaseListToolbarProps;

// noinspection JSUnusedGlobalSymbols
export default ListToolbar;
