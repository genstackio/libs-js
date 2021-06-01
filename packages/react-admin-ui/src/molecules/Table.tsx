import MuiTable from '@material-ui/core/Table';
import TableHead from "./TableHead";
import TableBody from "./TableBody";

export function Table({columns, items}: TableProps) {
    return(
        <MuiTable stickyHeader aria-label="simple-table">
            <TableHead columns={columns} />
            <TableBody items={items} columns={columns} />
        </MuiTable>
    )
}

export interface TableProps {
    columns: {id: string, label?: string, format?: string|Function}[],
    items: any[],
}

export default Table