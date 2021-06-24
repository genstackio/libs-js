import { createContext } from 'react';
import { box_context_value } from '../types';
import createDefaultBoxContextValue from '../utils/createDefaultBoxContextValue';
const BoxContext = createContext<box_context_value>(createDefaultBoxContextValue());
export const BoxProvider = BoxContext.Provider;
export const BoxConsumer = BoxContext.Consumer;
BoxContext.displayName = 'BoxContext';
export default BoxContext;
