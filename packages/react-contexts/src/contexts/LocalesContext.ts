import { createContext } from 'react';
import createDefaultLocalesContextValue from '../utils/createDefaultLocalesContextValue';
const LocalesContext = createContext(createDefaultLocalesContextValue());
export const LocalesProvider = LocalesContext.Provider;
export const LocalesConsumer = LocalesContext.Consumer;
LocalesContext.displayName = 'LocalesContext';
export default LocalesContext;
