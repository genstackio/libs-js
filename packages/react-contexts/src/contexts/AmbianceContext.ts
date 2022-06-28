import { createContext } from 'react';
import { ambiance_context_value } from '../types';
import createDefaultAmbianceContextValue from '../utils/createDefaultAmbianceContextValue';
const AmbianceContext = createContext<ambiance_context_value>(createDefaultAmbianceContextValue());
export const AmbianceProvider = AmbianceContext.Provider;
export const AmbianceConsumer = AmbianceContext.Consumer;
AmbianceContext.displayName = 'AmbianceContext';
export default AmbianceContext;
