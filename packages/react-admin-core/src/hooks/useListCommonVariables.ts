import { useHistory, useParams } from 'react-router-dom';
import useListFactory from '@genstackio/react-contexts/lib/hooks/useListFactory';
import useBreadcrumbsFactory from '@genstackio/react-contexts/lib/hooks/useBreadcrumbsFactory';
import { useCallback, useMemo, useState } from 'react';
import useList from './useList';
import useConditionalMutationApi from '@genstackio/react-context-api/lib/hooks/useConditionalMutationApi';
import useBreadcrumbs from './useBreadcrumbs';
import buildDisplayRouteUri from '../utils/buildDisplayRouteUri';
import buildEditRouteUri from '../utils/buildEditRouteUri';
import buildNewRouteUri from '../utils/buildNewRouteUri';

const defaultSortModel = [];
const defaultFilters = {};

export function useListCommonVariables({
    filters = defaultFilters,
    filterName: forcedFilterName,
    name,
    singularName: forcedSingularName,
    navigationMode = 'page',
    search = true,
    defaultRowsPerPage = 10,
    displayRoute = '/{name}/{id}',
    newRoute = '/{singularName}/new',
    editRoute = '/{name}/{id}/edit',
    deletable = true,
    deleteQueryName = 'DELETE_{singularName}',
    onNewClick,
    columns,
    listRoute = '/{name}/page/{pPage}/{pSize}/{pMode}/{pCursors}',
    filterListRoute = '/{name}/filters/{filterName}/page/{pPage}/{pSize}/{pMode}/{pCursors}',
    listFirstPageRoute = '/{name}',
    searchSwitch = true,
    queryName: forcedQueryName,
    rowsPerPageOptions,
    rowHeight,
    sortBuilder,
}: {
    name: string;
    singularName?: string;
    defaultRowsPerPage?: number;
    displayRoute?: string;
    newRoute?: string;
    onNewClick?: Function;
    search?: boolean;
    editRoute?: string;
    deletable?: boolean;
    deleteQueryName?: string;
    filterName?: string;
    filters?: any;
    listRoute?: string;
    filterListRoute?: string;
    columns?: {
        id: string;
        format?: any;
        label?: string;
        width?: number;
        render?: Function;
        if?: Function;
        filters?: string[];
    }[];
    navigationMode?: string;
    listFirstPageRoute?: string;
    searchSwitch?: boolean;
    queryName?: string;
    rowsPerPageOptions?: number[];
    rowHeight?: number;
    sortBuilder?: Function;
}) {
    const history = useHistory();
    const listFactory = useListFactory();
    const breadcrumbsFactory = useBreadcrumbsFactory();
    const {
        pPage = '1',
        pSize = undefined,
        pMode = undefined,
        pCursors = undefined,
    } = useParams<{ pPage?: string; pSize?: string; pMode?: string; pCursors?: string }>();
    const filterName = useMemo(() => forcedFilterName || (Object.keys(filters) || {})[0], [filters, forcedFilterName]);

    const splitPCursors: string[] = useMemo(() => (pCursors ? pCursors.split(/:/g) : ['']), [pCursors]);
    const [page, setPage] = useState<{
        size: number;
        index: number;
        previousCursors: string[];
        currentCursor?: string;
    }>(() => ({
        size: (pSize ? parseInt(pSize) : undefined) || defaultRowsPerPage,
        index: parseInt((pPage || '1') as string) - 1,
        previousCursors: splitPCursors.slice(0, -1),
        currentCursor: splitPCursors.slice(-1)[0],
    }));

    const list = useList(name, listFactory, {});

    const [sortModel, setSortModel] = useState<any[]>(defaultSortModel);
    const [searchMode, setSearchMode] = useState<boolean>(pMode ? 'search' === pMode : search);
    const singularName = forcedSingularName || name.slice(0, -1);

    const goDoc = useCallback(
        (id) => {
            history.push(buildDisplayRouteUri(displayRoute, { name, id, singularName }));
        },
        [name, history, singularName, displayRoute],
    );
    const goNew = useCallback(() => {
        history.push(buildNewRouteUri(newRoute, { name, singularName }));
    }, [name, history, singularName, newRoute]);

    onNewClick = onNewClick || (list['globalActions'] || []).includes('add') ? goNew : undefined;

    const goEdit = useCallback(
        (id) => {
            history.push(buildEditRouteUri(editRoute, { name, id, singularName }));
        },
        [name, history, singularName, editRoute],
    );
    const goUrl = useCallback((url) => {
        'undefined' !== typeof window && url && window.open(url);
    }, []);

    const goPublicPage = goUrl;
    const goPrivatePage = goUrl;

    const [deleteDoc] = useConditionalMutationApi(
        deletable,
        deleteQueryName
            .replace('{name}', name)
            .replace('{singularName}', singularName as string)
            .toUpperCase(),
        {},
    );

    const cursor = page.currentCursor;
    const fetchSortVariables = useMemo(
        () =>
            sortBuilder
                ? sortBuilder(sortModel)
                : sortModel.length
                ? { sort: `${sortModel[0].field}:${sortModel[0].sort}` }
                : {},
        [sortModel, sortBuilder],
    );

    listRoute = (filterName ? filterListRoute : listRoute) || listRoute;

    const breadcrumbs = useBreadcrumbs(name, breadcrumbsFactory, {});

    const breadcrumbsProps = useMemo(() => ({ breadcrumbs }), [breadcrumbs]);
    const toolbarProps = useMemo(
        () => ({
            searchSwitch,
            onNewClick,
            page,
            goNew,
            list,
            filters,
            filterName,
            listRoute,
            name,
            searchMode,
        }),
        [searchSwitch, onNewClick, page, goNew, list, filters, filterName, listRoute, name, searchMode],
    );
    const tableProps = useMemo(
        () => ({
            name,
            rowsPerPageOptions,
            rowHeight,
            page: page.index,
            defaultRowsPerPage: page.size,
        }),
        [name, rowsPerPageOptions, rowHeight, page.index, page.size],
    );

    const queryName =
        forcedQueryName ||
        `${searchMode ? 'SEARCH' : 'FIND'}_${filterName ? `${filterName.toUpperCase()}_` : ''}${name.toUpperCase()}`;
    const key = `${searchMode ? 'search' : 'find'}${
        filterName ? `${filterName[0].toUpperCase()}${filterName.slice(1)}` : ''
    }${name[0].toUpperCase() + name.slice(1)}`;

    return useMemo(
        () => ({
            queryName,
            breadcrumbsProps,
            toolbarProps,
            tableProps,
            history,
            pPage,
            splitPCursors,
            page,
            setPage,
            list,
            sortModel,
            setSortModel,
            searchMode,
            setSearchMode,
            goDoc,
            goNew,
            goEdit,
            goPublicPage,
            goPrivatePage,
            onNewClick,
            cursor,
            deleteDoc,
            fetchSortVariables,
            singularName,
            filterName,
            name,
            navigationMode,
            listRoute,
            columns: columns
                ? columns.filter((x) =>
                      x.if
                          ? !!x.if({ searchMode, filterName, name, singularName, navigationMode })
                          : x.filters?.length
                          ? x.filters.includes(filterName)
                          : true,
                  )
                : undefined,
            listFirstPageRoute,
            key,
        }),
        [
            queryName,
            breadcrumbsProps,
            toolbarProps,
            tableProps,
            history,
            pPage,
            splitPCursors,
            page,
            setPage,
            list,
            sortModel,
            setSortModel,
            searchMode,
            setSearchMode,
            goDoc,
            goNew,
            goEdit,
            goPublicPage,
            goPrivatePage,
            onNewClick,
            cursor,
            deleteDoc,
            fetchSortVariables,
            listFirstPageRoute,
            singularName,
            filterName,
            name,
            navigationMode,
            listRoute,
            columns,
            key,
        ],
    );
}

export default useListCommonVariables;
