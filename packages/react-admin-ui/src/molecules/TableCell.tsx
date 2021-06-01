import MuiTableCell from '@material-ui/core/TableCell';
import {ReactNode} from "react";
import {Badge} from "../atoms";

export function TableCell({children, column}: TableCellProps) {
    ('function' === typeof column.format) && (children = column.format(children));
    ('boolean' === typeof children) && (children = <input type={'checkbox'} checked={children as boolean} />);
    if ('string' === typeof column.format) {
        switch (column.format) {
            case 'badge': children = <Badge text={children as string} />; break;
        }
    }
    return (
        <MuiTableCell>{children}</MuiTableCell>
    )
}

export interface TableCellProps {
    children: ReactNode,
    column: {id: string, label?: string, format?: string|Function},
}

export default TableCell