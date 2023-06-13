import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import buildNextPageAction from '../utils/buildNextPageAction';

const actions = {
    history_push: ({ uri }, { history }) => history.push(uri),
    page_state: ({ state }, { setPage }) => setPage(state),
};

export function useListPageChangeCallback({
    name,
    listRoute,
    navigationMode,
    page,
    setPage,
    cursor,
    nextCursor,
    searchMode,
    filterName,
}: {
    name: string;
    filterName?: string;
    listRoute: string;
    navigationMode: string;
    page: any;
    setPage: Function;
    cursor?: string;
    nextCursor?: string;
    searchMode: boolean;
}) {
    const history = useHistory();

    return useCallback(
        ({ page: nextPage }) => {
            const action = buildNextPageAction(nextPage, {
                name,
                pageIndex: page.index,
                pageSize: page.size,
                pagePreviousCursors: page.previousCursors,
                listRoute,
                filterName,
                cursor,
                nextCursor,
                searchMode,
                navigationMode,
            });
            (actions[action?.type || ''] || undefined)?.(action.config, { history, setPage });
        },
        [
            searchMode,
            navigationMode,
            history,
            listRoute,
            name,
            page.size,
            cursor,
            nextCursor,
            setPage,
            page.previousCursors,
            page.index,
            filterName,
        ],
    );
}

export default useListPageChangeCallback;
