import useComponent from '@genstackio/react-contexts/lib/hooks/useComponent';
import { BaseListTableProps } from '../misc/DefaultListTable';

export function ListTable(props: ListTableProps) {
    const Comp = useComponent('misc', 'default_list_table');

    return <Comp {...props} />;
}

export type ListTableProps = BaseListTableProps;

export default ListTable;
