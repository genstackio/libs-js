import { useCallback, useMemo, useState } from 'react';
import clsx from 'clsx';
import Badge from '../atoms/Badge';
import { DataGrid, DataGridProps, GridCellParams, GridColDef, GridValueFormatterParams } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import tailwindConfig from '../../tailwind.config';
import useTableTranslation from '../utils/useTableTranslation';
import { class_name, flag } from '../types';
import { AsComponent } from '../as';
import { WithColorOfBox, WithItemsOfTable, WithColumnsOfTable } from '../withs';

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

const defaultColumns = [];
const defaultItems = [];

export function Table({
    cellClassName,
    className,
    color,
    columnHeaderClassName,
    columns = defaultColumns,
    defaultRowsPerPage = 50,
    items = defaultItems,
    loading = false,
    onPageChange,
    rootClassName,
    rowClassName,
    rowHeight,
    selection = false,
    striped,
    total,
    ...props
}: TableProps) {
    let classes = useStyles({ color, striped } as any);
    classes = useMemo(() => {
        classes['root'] = clsx(classes['root'], rootClassName);
        classes['row'] = clsx(classes['row'], rowClassName);
        classes['columnHeader'] = clsx(classes['columnHeader'], columnHeaderClassName);
        classes['cell'] = clsx(classes['cell'], cellClassName);
        return classes;
    }, [classes, rootClassName, rowClassName, columnHeaderClassName, cellClassName]);
    const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
    const handlePageSizeChange = useCallback(
        (e) => {
            setRowsPerPage(e.pageSize);
        },
        [setRowsPerPage],
    );
    const handlePageChange = useCallback(
        (e) => {
            onPageChange && onPageChange(e);
        },
        [onPageChange],
    );
    const formattedCols: GridColDef[] = (columns || []).reduce(
        (acc, col) => [
            ...acc,
            {
                field: col.id,
                flex: 1,
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
                        : col.render
                        ? (params: GridCellParams) => col.render!(params.getValue(params.id, col.id), params)
                        : undefined,
            },
        ],
        [] as GridColDef[],
    );
    const { localeText, pagination } = useTableTranslation();
    const componentsProps = useMemo(
        () => ({
            pagination,
        }),
        [pagination],
    );

    return (
        <DataGrid
            autoHeight
            checkboxSelection={selection}
            classes={classes}
            columns={formattedCols}
            componentsProps={componentsProps}
            disableColumnMenu
            disableSelectionOnClick
            loading={loading}
            localeText={localeText}
            onPageChange={handlePageChange}
            onPageSizeChange={handlePageSizeChange}
            pageSize={rowsPerPage}
            paginationMode={'server'}
            rowHeight={rowHeight}
            rowCount={total}
            rows={items}
            rowsPerPageOptions={[5, 10, 20, 50, 100, 200]}
            className={className}
            {...props}
        />
    );
}

export interface TableProps
    extends AsComponent,
        Omit<DataGridProps, 'columns' | 'onPageChange' | 'rows'>,
        WithItemsOfTable,
        WithColumnsOfTable,
        WithColorOfBox {
    rowsPerPage?: number;
    selection?: flag;
    striped?: flag;
    total?: number;
    defaultRowsPerPage?: number;
    onPageChange?: Function;
    loading?: flag;
    rowHeight?: number;
    rootClassName?: class_name;
    rowClassName?: class_name;
    columnHeaderClassName?: class_name;
    cellClassName?: class_name;
}

// noinspection JSUnusedGlobalSymbols
export default Table;
