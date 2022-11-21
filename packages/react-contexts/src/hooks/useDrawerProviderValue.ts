import {useCallback, useMemo, useState} from "react";
import {drawer_context_value} from "../types";

export function useDrawerProviderValue() {
    const [drawerState, setDrawerState] = useState<{data: any, opened: boolean, view: string|undefined}>({data: undefined, opened: false, view: undefined});
    const openDrawer = useCallback((view?: string) => setDrawerState({data: drawerState.data, opened: true, view: view || drawerState.view}), [setDrawerState, drawerState.data, drawerState.view]);
    const openDrawerWithData = useCallback((data: any|undefined, view?: string) => setDrawerState({data, opened: true, view: view || drawerState.view}), [setDrawerState, drawerState.view]);
    const closeDrawer = useCallback(() => setDrawerState({data: drawerState.data, view: drawerState.view, opened: false}), [setDrawerState, drawerState.data, drawerState.view]);
    const toggleDrawer = useCallback(() => setDrawerState({data: drawerState.data, view: drawerState.view, opened: !drawerState.opened}), [setDrawerState, drawerState.data, drawerState.view]);
    const setDrawerOpened = useCallback((value: boolean) => setDrawerState({data: drawerState.data, view: drawerState.view, opened: value}), [setDrawerState, drawerState.data, drawerState.view]);
    const unsetDrawerData = useCallback(() => setDrawerState({opened: drawerState.opened, view: drawerState.view, data: undefined}), [setDrawerState, drawerState.opened, drawerState.view]);
    const setDrawerData = useCallback((data: any|undefined) => setDrawerState({opened: drawerState.opened, view: drawerState.view, data}), [setDrawerState, drawerState.opened, drawerState.view]);
    const setDrawerDataAndOpened = useCallback((data: any|undefined, opened: boolean) => setDrawerState({view: drawerState.view, data, opened}), [setDrawerState, drawerState.view]);
    const getDrawerData = useCallback(() => drawerState.data, [drawerState]);
    const resetDrawer = useCallback(() => setDrawerState({data: undefined, opened: false, view: undefined}), [setDrawerState]);
    return useMemo(() => ({
        opened: drawerState.opened,
        open: openDrawer,
        close: closeDrawer,
        toggle: toggleDrawer,
        reset: resetDrawer,
        setOpened: setDrawerOpened,
        unsetData: unsetDrawerData,
        setData: setDrawerData,
        getData: getDrawerData,
        data: drawerState.data,
        openWithData: openDrawerWithData,
        setDataAndOpened: setDrawerDataAndOpened,
        view: drawerState.view,
    }), [
        drawerState, openDrawer, closeDrawer, toggleDrawer, resetDrawer, setDrawerOpened, unsetDrawerData,
        setDrawerData, getDrawerData, setDrawerDataAndOpened, openDrawerWithData,
    ]) as drawer_context_value;
}

export default useDrawerProviderValue;
