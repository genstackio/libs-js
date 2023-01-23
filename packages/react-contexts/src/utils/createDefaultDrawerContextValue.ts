import { drawer_context_value } from '../types';

export const createDefaultDrawerContextContextValue = (): drawer_context_value => {
    // noinspection JSUnusedLocalSymbols
    return {
        opened: false,
        setOpened: (state: boolean) => {},
        toggle: () => {},
        setData: (data: any | undefined) => {},
        setDataAndOpened: (data: any | undefined, opened: boolean) => {},
        getData: () => undefined,
        reset: () => {},
        unsetData: () => {},
        close: () => {},
        open: (view?: string) => {},
        data: undefined,
        openWithData: (data: any | undefined, view?: string) => {},
        view: undefined,
    };
};

export default createDefaultDrawerContextContextValue;
