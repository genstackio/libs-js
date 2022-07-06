import Table, {TableProps} from "../molecules/Table";

export function TableContent(props: TableContentProps) {
    return (
        <Table {...props} />
    );
}

export interface TableContentProps extends TableProps {
}

export default TableContent;
