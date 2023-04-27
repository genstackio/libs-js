import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import buildListRouteUri from '../utils/buildListRouteUri';

export function useListSwitchChangeCallback({
    name,
    listRoute,
    setSearchMode,
    searchMode,
    page,
    setPage,
    filterName,
}: {
    name: string;
    listRoute: string;
    setSearchMode: Function;
    searchMode: boolean;
    page: any;
    setPage: Function;
    filterName?: string;
}) {
    const history = useHistory();

    return useCallback(
        (e: any) => {
            e.stopPropagation();
            const u = buildListRouteUri(listRoute, {
                name,
                filterName,
                pPage: String(1),
                pSize: String(page.size),
                pMode: !searchMode ? 'search' : 'default',
                pCursors: '',
            });
            u && history.push(u);
            setPage({ size: page.size, index: 0, previousCursors: [], currentCursor: undefined });
            setSearchMode(!searchMode);
        },
        [history, listRoute, name, setSearchMode, searchMode, setPage, page.size, filterName],
    );
}

export default useListSwitchChangeCallback;
