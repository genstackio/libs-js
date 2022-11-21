import { useContext } from 'react';
import DrawerContext from '../contexts/DrawerContext';
import { drawer_context_value } from '../types';

export const useDrawerContext = (): drawer_context_value => {
    return useContext(DrawerContext);
};

// noinspection JSUnusedGlobalSymbols
export default useDrawerContext;
