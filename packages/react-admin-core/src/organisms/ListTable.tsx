import useComponent from '@genstackio/react-contexts/lib/hooks/useComponent';
import DefaultListTable, { BaseListTableProps } from '../misc/DefaultListTable';

export function ListTable(props: ListTableProps) {
    const Comp = useComponent('misc', 'list_table') || DefaultListTable;

    return <Comp {...props} />;
}

export type ListTableProps = BaseListTableProps;

export default ListTable;
