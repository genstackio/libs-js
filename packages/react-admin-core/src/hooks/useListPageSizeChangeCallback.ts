import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { GridPageChangeParams } from '@material-ui/data-grid';

export function useListPageSizeChangeCallback({
    listRoute,
    name,
    searchMode,
    setPage,
    page,
}: {
    listRoute: string;
    name: string;
    searchMode: boolean;
    setPage: Function;
    page: any;
}) {
    const history = useHistory();

    return useCallback(
        (params: GridPageChangeParams) => {
            const u = listRoute
                .replace('{name}', name)
                .replace('{pPage}', String(1))
                .replace('{pSize}', String(params.pageSize))
                .replace('{pMode}', searchMode ? 'search' : 'default')
                .replace('{pCursors}', '');
            u && history.push(u);
            setPage({ ...page, size: params.pageSize, index: 0, previousCursors: [], currentCursor: undefined });
        },
        [history, listRoute, name, setPage, page, searchMode],
    );
}

export default useListPageSizeChangeCallback;
