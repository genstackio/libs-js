import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { GridPageChangeParams } from '@material-ui/data-grid';
import buildPageResizedActions from '../utils/buildPageResizedActions';

const defaultPageSize = 10;

const actions = {
    history_push: ({ uri }, { history }) => history.push(uri),
    page_state: ({ state }, { setPage }) => setPage(state),
};

export function useListPageSizeChangeCallback({
    listRoute,
    name,
    searchMode,
    setPage,
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
            const actionList = buildPageResizedActions(params.pageSize || defaultPageSize, {
                name,
                listRoute,
                filterName,
                searchMode,
                navigationMode,
            });
            (actionList || []).forEach((action) =>
                (actions[action?.type || ''] || undefined)?.(action.config, { history, setPage }),
            );
        },
        [history, listRoute, name, setPage, searchMode, filterName, navigationMode],
    );
}

export default useListPageSizeChangeCallback;
