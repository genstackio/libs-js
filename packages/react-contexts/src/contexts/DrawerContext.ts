import { createContext } from 'react';
import { drawer_context_value } from '../types';
import createDefaultDrawerContextValue from '../utils/createDefaultDrawerContextValue';

export const DrawerContext = createContext<drawer_context_value>(createDefaultDrawerContextValue());
export const DrawerContextProvider = DrawerContext.Provider;
export const DrawerContextConsumer = DrawerContext.Consumer;

export default DrawerContext;
