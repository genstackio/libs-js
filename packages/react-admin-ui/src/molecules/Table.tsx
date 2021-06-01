import {DataGrid, GridCellParams, GridColDef} from '@material-ui/data-grid';
import {Badge} from "../atoms";

export function Table({columns, items, selection = false, rowsPerPage}: TableProps) {
    const dataColumns: GridColDef[] = columns.reduce((acc, col) =>
        [...acc, {
            field: col.id,
            headerName: col.label,
            width: 150,
            renderCell: ('string' === typeof col.format && 'badge' === col.format)
                ? (params: GridCellParams) => (<Badge text={params.getValue(params.id, col.id) as string} />)
                : undefined
            }],
        [] as GridColDef[]);
    const dataRows = items.reduce((acc, item, index) => [...acc, {...item, id: index}], [] as any[]);
    return(
        <DataGrid rows={dataRows} columns={dataColumns} pageSize={rowsPerPage} checkboxSelection={selection} autoHeight />
    )
}

export interface TableProps {
    columns: {id: string, label?: string, format?: string|Function}[],
    items: any[],
    selection?: boolean,
    rowsPerPage?: number,
}

export default Table