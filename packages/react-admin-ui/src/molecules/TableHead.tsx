import MuiTableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export function TableHead({columns}: TableHeadProps) {
    return (
        <MuiTableHead>
            <TableRow>
                {columns.map(({id, label}) => (
                    <TableCell key={id}>{label}</TableCell>
                ))}
            </TableRow>
        </MuiTableHead>
    )
}

export interface TableHeadProps {
    columns: {id: string, label?: string, format?: string|Function}[],
}

export default TableHead