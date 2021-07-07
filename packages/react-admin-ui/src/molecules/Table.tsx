import clsx from 'clsx';
import { DataGrid, GridCellParams, GridColDef, GridValueFormatterParams } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import tailwindConfig from '../../tailwind.config';
import { box_color, class_name, flag, table_column, table_row } from '../types';
import Badge from '../atoms/Badge';

const tailwindColors = tailwindConfig.theme.extend.colors;
const tailwindTextColors = tailwindConfig.theme.extend.textColors;

const useStyles = makeStyles({
    root: (props: TableProps) => ({
        '& .MuiDataGrid-columnHeaderWrapper, .MuiDataGrid-footer, .MuiTablePagination-toolbar': {
            color: tailwindTextColors[`contained_${props.color}` || ''] || tailwindTextColors['fill_primary'],
            backgroundColor: tailwindColors[props.color || ''] || tailwindColors['clear'],
        },
        '& .MuiDataGrid-row': {
            color: tailwindTextColors['fill_primary'],
            backgroundColor: tailwindColors['clear'],
        },
        '& .MuiDataGrid-row:hover': {
            color: tailwindTextColors[`contained_${props.color}` || ''] || tailwindTextColors['contained_primary'],
            backgroundColor:
                tailwindColors[`${props.color}_hover`] || tailwindColors[props.color] || tailwindColors['primary'],
            opacity: 0.6,
        },
        '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 700,
        },
        '& .MuiDataGrid-cell': {
            fontWeight: 400,
        },
        '& .MuiDataGrid-cell:focus, .MuiDataGrid-columnHeader:focus, .MuiButtonBase-root:focus, .MuiDataGrid-cell:focus-within, .MuiDataGrid-columnHeader:focus-within':
            {
                outline: 0,
            },
        '& .MuiDataGrid-row.Mui-odd': {
            opacity: (props: TableProps) => (props.striped ? 0.8 : undefined),
        },
        '& .MuiDataGrid-row.Mui-selected, .MuiDataGrid-row.Mui-selected:hover': {
            color: tailwindTextColors[`contained_${props.color}` || ''] || tailwindTextColors['contained_primary'],
            backgroundColor:
                tailwindColors[`${props.color}_selected`] || tailwindColors[props.color] || tailwindColors['primary'],
        },
    }),
});

export function Table({ className, ...props }: TableProps) {
    const { columns, items, selection = false, rowsPerPage } = props;
    const classes = useStyles(props);
    const formattedCols: GridColDef[] = columns.reduce(
        (acc, col) => [
            ...acc,
            {
                field: col.id,
                headerName: col.label,
                width: col.width || 150,
                valueFormatter:
                    'function' === typeof col.format
                        ? (params: GridValueFormatterParams) => col.format!(params.getValue(params.id, col.id))
                        : undefined,
                renderCell:
                    'string' === typeof col.format && 'badge' === col.format
                        ? (params: GridCellParams) => (
                              <Badge
                                  text={(params.getValue(params.id, col.id) as string) || ''}
                                  type={'pill'}
                                  variant={'contained'}
                                  color={'light'}
                              />
                          )
                        : undefined,
            },
        ],
        [] as GridColDef[],
    );
    return (
        <DataGrid
            rows={items}
            columns={formattedCols}
            classes={classes}
            pageSize={rowsPerPage}
            checkboxSelection={selection}
            disableColumnMenu
            disableSelectionOnClick
            autoHeight
            className={clsx(className)}
        />
    );
}

export interface TableProps {
    className?: class_name;
    color?: box_color;
    columns: table_column[];
    items: table_row[];
    rowsPerPage?: number;
    selection?: flag;
    striped?: flag;
}

export default Table;
