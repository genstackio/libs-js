import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

export function useListSwitchChangeCallback({
    name,
    listRoute,
    setSearchMode,
    searchMode,
    page,
    setPage,
}: {
    name: string;
    listRoute: string;
    setSearchMode: Function;
    searchMode: boolean;
    page: any;
    setPage: Function;
}) {
    const history = useHistory();

    return useCallback(
        (e: any) => {
            e.stopPropagation();
            const u = listRoute
                .replace('{name}', name)
                .replace('{pPage}', String(1))
                .replace('{pSize}', String(page.size))
                .replace('{pMode}', !searchMode ? 'search' : 'default')
                .replace('{pCursors}', '');
            u && history.push(u);
            setPage({ size: page.size, index: 0, previousCursors: [], currentCursor: undefined });
            setSearchMode(!searchMode);
        },
        [history, listRoute, name, setSearchMode, searchMode, setPage, page.size],
    );
}

export default useListSwitchChangeCallback;
