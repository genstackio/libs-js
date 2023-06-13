import Alert from '@genstackio/react-admin-ui/lib/atoms/Alert';
import Spinner from '@genstackio/react-admin-ui/lib/atoms/Spinner';
import Table from '@genstackio/react-admin-ui/lib/molecules/Table';
import { useTranslation } from 'react-i18next';
import { useTableContext } from '@genstackio/react-contexts';

const defaultItems = [];
const defaultRowsPerPageOptions = [10, 20, 50, 100];

export function DefaultListTable({
    name,
    items = defaultItems,
    rowHeight = 40,
    page,
    total,
    loading = false,
    onSortModelChange,
    onPageSizeChange,
    onPageChange,
    columns,
    defaultRowsPerPage,
    rowsPerPageOptions = defaultRowsPerPageOptions,
}: DefaultListTableProps) {
    const { t } = useTranslation();
    const { renderers, cellComponents } = useTableContext();

    return (
        <>
            {!items.length && !loading && (
                <Alert color={'warning'}>
                    {t([`screen_${name}_list_table_empty`, 'screen_generic_list_table_empty'])}
                </Alert>
            )}
            {!items.length && loading && <Spinner />}
            {!!items.length && (
                <Table
                    rowHeight={rowHeight}
                    rowsPerPageOptions={rowsPerPageOptions}
                    onSortModelChange={onSortModelChange}
                    onPageSizeChange={onPageSizeChange}
                    onPageChange={onPageChange}
                    disableColumnFilter
                    showCellRightBorder
                    showColumnRightBorder
                    hideFooterRowCount
                    loading={loading}
                    page={page}
                    items={items}
                    columns={columns}
                    defaultRowsPerPage={defaultRowsPerPage}
                    total={total}
                    renderers={renderers}
                    cellComponents={cellComponents}
                />
            )}
        </>
    );
}

export type DefaultListTableProps = BaseListTableProps;

export interface BaseListTableProps {
    name: string;
    items?: any[];
    loading?: boolean;
    onSortModelChange?: any;
    onPageSizeChange?: any;
    onPageChange?: any;
    page?: number;
    total?: number;
    columns?: any;
    defaultRowsPerPage?: number;
    rowsPerPageOptions?: number[];
    rowHeight?: number;
}

// noinspection JSUnusedGlobalSymbols
export default DefaultListTable;
