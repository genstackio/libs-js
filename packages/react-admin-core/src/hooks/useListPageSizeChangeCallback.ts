import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { GridPageChangeParams } from '@material-ui/data-grid';
import buildListRouteUri from "../utils/buildListRouteUri";

export function useListPageSizeChangeCallback({
    listRoute,
    name,
    searchMode,
    setPage,
    page,
    filterName,
}: {
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
            const u = buildListRouteUri(listRoute, {name, filterName, pPage: String(1), pSize: String(params.pageSize), pMode: searchMode ? 'search' : 'default', pCursors: ''});
            u && history.push(u);
            setPage({ ...page, size: params.pageSize, index: 0, previousCursors: [], currentCursor: undefined });
        },
        [history, listRoute, name, setPage, page, searchMode, filterName],
    );
}

export default useListPageSizeChangeCallback;
