import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import buildNextPageActions from '../utils/buildNextPageActions';

const actions = {
    history_push: ({ uri }, { history }) => history.push(uri),
    page_state: ({ state }, { setPage }) => setPage(state),
};

export function useListPageChangeCallback({
    name,
    listRoute,
    navigationMode,
    setPage,
    pageSize,
    pageIndex,
    pagePreviousCursors,
    cursor,
    nextCursor,
    searchMode,
    filterName,
}: {
    name: string;
    filterName?: string;
    listRoute: string;
    navigationMode: string;
    setPage: Function;
    pageSize: number;
    pageIndex: number;
    pagePreviousCursors: string[];
    cursor?: string;
    nextCursor?: string;
    searchMode: boolean;
}) {
    const history = useHistory();

    return useCallback(
        ({ page: nextPage }) => {
            const actionList = buildNextPageActions(nextPage, {
                name,
                pageIndex,
                pageSize,
                pagePreviousCursors,
                listRoute,
                filterName,
                cursor,
                nextCursor,
                searchMode,
                navigationMode,
            });
            (actionList || []).forEach((action) =>
                (actions[action?.type || ''] || undefined)?.(action.config, { history, setPage }),
            );
        },
        [
            searchMode,
            navigationMode,
            history,
            listRoute,
            name,
            pageSize,
            cursor,
            nextCursor,
            setPage,
            pagePreviousCursors,
            pageIndex,
            filterName,
        ],
    );
}

export default useListPageChangeCallback;
