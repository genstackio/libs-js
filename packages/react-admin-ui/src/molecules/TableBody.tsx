import MuiTableBody from '@material-ui/core/TableBody';
import TableRow from "./TableRow";

export function TableBody({items, columns}: TableBodyProps) {
    return (
        <MuiTableBody>
            {items.map((item, index) => (
                <TableRow key={index} row={item} columns={columns} />
            ))}
        </MuiTableBody>
    )
}

export interface TableBodyProps {
    columns: {id: string, label?: string, format?: string|Function}[],
    items: any[],
}

export default TableBody