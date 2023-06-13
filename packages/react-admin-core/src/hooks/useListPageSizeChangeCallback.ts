import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { GridPageChangeParams } from '@material-ui/data-grid';
import buildListRouteUri from '../utils/buildListRouteUri';

export function useListPageSizeChangeCallback({
    listRoute,
    name,
    searchMode,
    setPage,
    page,
    filterName,
    navigationMode,
}: {
    navigationMode: string;
    listRoute: string;
    name: string;
    searchMode: boolean;
    setPage: Function;
    page: any;
    filterName?: string;
}) {
    const history = useHistory();

    return useCallback(
        (params: GridPageChangeParams) => {
            if ('page' === navigationMode) {
                const u = buildListRouteUri(listRoute, {
                    name,
                    filterName,
                    pPage: String(1),
                    pSize: String(params.pageSize),
                    pMode: searchMode ? 'search' : 'default',
                    pCursors: '',
                });
                u && history.push(u);
                return;
            }
            if ('state' === navigationMode) {
                setPage({ ...page, size: params.pageSize, index: 0, previousCursors: [], currentCursor: undefined });
                return;
            }
        },
        [history, listRoute, name, setPage, page, searchMode, filterName, navigationMode],
    );
}

export default useListPageSizeChangeCallback;
