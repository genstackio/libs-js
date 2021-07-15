import { DataGrid, DataGridProps, GridCellParams, GridColDef, GridValueFormatterParams } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import tailwindConfig from '../../tailwind.config';
import { flag, table_column, table_row } from '../types';
import Badge from '../atoms/Badge';
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { WithBoxColor, WithClassName } from '../withs';

const tailwindColors = tailwindConfig.theme.extend.colors;
const tailwindTextColors = tailwindConfig.theme.extend.textColors;

const useTableTranslation = () => {
    const { i18n } = useTranslation();
    return useMemo(() => {
        const r: any = { ...i18n.getResourceBundle(i18n.language, 'table') };
        const x = r.footerTotalVisibleRows;
        r.footerTotalVisibleRows = (a, b) => x.replace('{{visibleCount}}', a).replace('{{totalCount}}', b);
        const y1 = r.footerRowSelected;
        const yN = r.footerRowSelectedPlural;
        delete r.footerRowSelectedPlural;
        r.footerRowSelected = (a) => (a > 1 ? yN.replace('{{count}}', a) : y1.replace('{{count}}', a));
        const z1 = r.columnHeaderFiltersTooltipActive;
        const zN = r.columnHeaderFiltersTooltipActivePlural;
        delete r.columnHeaderFiltersTooltipActivePlural;
        r.columnHeaderFiltersTooltipActive = (a) => (a > 1 ? zN.replace('{{count}}', a) : z1.replace('{{count}}', a));
        const t1 = r.toolbarFiltersTooltipActive;
        const tN = r.toolbarFiltersTooltipActivePlural;
        delete r.toolbarFiltersTooltipActivePlural;
        r.toolbarFiltersTooltipActive = (a) => (a > 1 ? tN.replace('{{count}}', a) : t1.replace('{{count}}', a));
        const r2 = { ...i18n.getResourceBundle(i18n.language, 'tablePagination') };
        const uN = r2.labelDisplayedRows;
        const uX = r2.labelDisplayedRowsUnknown;
        delete r2.labelDisplayedRowsUnknown;
        r2.labelDisplayedRows = ({ count, from, to }) =>
            count !== -1
                ? uN.replace('{{count}}', count).replace('{{from}}', from).replace('{{to}}', to)
                : uX.replace('{{from}}', from).replace('{{to}}', to);
        return {
            localeText: r,
            pagination: r2,
        };
    }, [i18n, i18n.language]);
};
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

export function Table({
    className,
    total,
    onPageChange,
    color,
    striped,
    loading = false,
    columns,
    items,
    selection = false,
    defaultRowsPerPage = 50,
    ...props
}: TableProps) {
    const classes = useStyles({ color, striped } as any);
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
            localeText={localeText}
            loading={loading}
            rows={items}
            columns={formattedCols}
            classes={classes}
            checkboxSelection={selection}
            disableColumnMenu
            disableSelectionOnClick
            autoHeight
            className={className}
            rowsPerPageOptions={[5, 10, 20, 50, 100, 200]}
            pageSize={rowsPerPage}
            rowCount={total}
            onPageSizeChange={handlePageSizeChange}
            onPageChange={handlePageChange}
            paginationMode={'server'}
            componentsProps={componentsProps}
            {...props}
        />
    );
}

export interface TableProps
    extends Omit<DataGridProps, 'columns' | 'onPageChange' | 'rows'>,
        WithClassName,
        WithBoxColor {
    columns: table_column[];
    items: table_row[];
    rowsPerPage?: number;
    selection?: flag;
    striped?: flag;
    total?: number;
    defaultRowsPerPage?: number;
    onPageChange?: Function;
    loading?: flag;
}

export default Table;
