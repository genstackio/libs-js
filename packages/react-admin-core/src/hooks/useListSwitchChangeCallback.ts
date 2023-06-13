import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import stopPrevent from '@genstackio/react-admin-ui/lib/utils/stopPrevent';
import buildPageModeActions from '../utils/buildPageModeActions';

const actions = {
    history_push: ({ uri }, { history }) => history.push(uri),
    page_state: ({ state }, { setPage }) => setPage(state),
    page_state_and_mode: ({ state, searchMode }, { setPage, setSearchMode }) => {
        setPage(state);
        setSearchMode(searchMode);
    },
};

export function useListSwitchChangeCallback({
    name,
    listRoute,
    setSearchMode,
    searchMode,
    page,
    setPage,
    filterName,
    navigationMode,
}: {
    navigationMode: string;
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
            stopPrevent(e);
            const actionList = buildPageModeActions(!searchMode, {
                name,
                listRoute,
                filterName,
                navigationMode,
                pageSize: page.size,
            });
            (actionList || []).forEach((action) =>
                (actions[action?.type || ''] || undefined)?.(action.config, { history, setPage, setSearchMode }),
            );
        },
        [history, listRoute, name, setSearchMode, searchMode, setPage, page.size, filterName, navigationMode],
    );
}

export default useListSwitchChangeCallback;
