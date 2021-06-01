import MuiTableRow from '@material-ui/core/TableRow';
import TableCell from "./TableCell";

export function TableRow({row, columns}: TableRowProps) {
    return (
        <MuiTableRow hover>
            {columns.map((col, index) => (
                <TableCell key={index} column={col}>{row[col.id]}</TableCell>
            ))}
        </MuiTableRow>
    )
}

export interface TableRowProps {
    row: {any: any},
    columns: {id: string, label?: string, format?: string|Function}[],
}

export default TableRow