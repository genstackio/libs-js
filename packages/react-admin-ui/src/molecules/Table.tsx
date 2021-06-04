import {DataGrid, GridCellParams, GridColDef, GridValueFormatterParams} from '@material-ui/data-grid';
import {makeStyles} from "@material-ui/core/styles";
import tailwindConfig from "../../tailwind.config"
import {box_color} from "../types";
import {Badge} from "../atoms";

const tailwindColors = tailwindConfig.theme.extend.colors;
const tailwindTextColors = tailwindConfig.theme.extend.textColors;
const selectedRowsColors = tailwindConfig.theme.extend.selectedRowTableColors;

const useStyles = makeStyles({
    root: (props: TableProps) => ({
        "& .MuiDataGrid-columnHeaderWrapper, .MuiDataGrid-row, .MuiDataGrid-footer, .MuiTablePagination-toolbar": {
            color: tailwindTextColors[`contained_${props.color}` || ''] || tailwindTextColors['contained_light'],
            backgroundColor: tailwindColors[props.color || ''] || tailwindColors['light'],
        },
        "& .MuiDataGrid-row:hover": {
            color: tailwindTextColors[`contained_${props.color}` || ''] || tailwindTextColors['contained_light'],
            backgroundColor: tailwindColors[props.color || ''] || tailwindColors['light'],
            opacity: 0.6,
        },
        "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: 700,
        },
        "& .MuiDataGrid-cell": {
            fontWeight: 400,
        },
        "& .MuiDataGrid-cell:focus, .MuiDataGrid-columnHeader:focus, .MuiButtonBase-root:focus, .MuiDataGrid-cell:focus-within, .MuiDataGrid-columnHeader:focus-within": {
            outline: 0,
        },
        "& .MuiDataGrid-row.Mui-odd": {
            opacity: (props: TableProps) => props.striped ? 0.8 : undefined,
        },
        "& .MuiDataGrid-row.Mui-selected, .MuiDataGrid-row.Mui-selected:hover": {
            backgroundColor: selectedRowsColors[props.color || ''] || tailwindColors['light'],
        },
    }),
});

export function Table(props: TableProps) {
    const {columns, items, selection = false, rowsPerPage} = props;
    const classes = useStyles(props);
    const formattedCols: GridColDef[] = columns.reduce((acc, col) =>
        [...acc, {
            field: col.id,
            headerName: col.label,
            width: col.width || 150,
            valueFormatter: ('function' === typeof col.format)
                ? (params: GridValueFormatterParams) => col.format!(params.getValue(params.id, col.id))
                : undefined,
            renderCell: ('string' === typeof col.format && 'badge' === col.format)
                ? (params: GridCellParams) => (<Badge text={params.getValue(params.id, col.id) as string || ''} type={'pill'} variant={'contained'} color={'light'} />)
                : undefined,
        }], [] as GridColDef[]);
    return(
        <DataGrid rows={items}
                  columns={formattedCols}
                  classes={classes}
                  pageSize={rowsPerPage}
                  checkboxSelection={selection}
                  disableColumnMenu
                  disableSelectionOnClick
                  autoHeight
        />
    )
}

export interface TableProps {
    columns: {id: string, label?: string, format?: any, width?: number}[],
    items: any[],
    selection?: boolean,
    rowsPerPage?: number,
    color?: box_color,
    striped?: boolean,
}

export default Table