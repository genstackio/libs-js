import { createContext } from 'react';
import createDefaultDarkModeContextValue from '../utils/createDefaultDarkModeContextValue';
const DarkModeContext = createContext(createDefaultDarkModeContextValue());
export const DarkModeProvider = DarkModeContext.Provider;
export const DarkModeConsumer = DarkModeContext.Consumer;
DarkModeContext.displayName = 'DarkModeContext';
export default DarkModeContext;
