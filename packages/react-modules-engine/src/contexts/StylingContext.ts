import { createContext } from 'react';
import { styling_context_value } from '../types';
import createDefaultStylingContextValue from '../utils/createDefaultStylingContextValue';

export const StylingContext = createContext<styling_context_value>(createDefaultStylingContextValue());
export const StylingContextProvider = StylingContext.Provider;
export const StylingContextConsumer = StylingContext.Consumer;

export default StylingContext;
