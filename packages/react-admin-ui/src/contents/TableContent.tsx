import Table, { TableProps } from '../molecules/Table';

export function TableContent(props: TableContentProps) {
    return <Table {...props} />;
}

export type TableContentProps = TableProps;

export default TableContent;
