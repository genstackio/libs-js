import { createContext } from 'react';
import { clean_data_context_value } from '../types';
import createDefaultCleanDataContextValue from '../utils/createDefaultCleanDataContextValue';

export const CleanDataContext = createContext<clean_data_context_value>(createDefaultCleanDataContextValue());
export const CleanDataContextProvider = CleanDataContext.Provider;
export const CleanDataContextConsumer = CleanDataContext.Consumer;

export default CleanDataContext;
