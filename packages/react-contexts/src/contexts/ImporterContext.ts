import { createContext } from 'react';
import createDefaultImporterContextValue from '../utils/createDefaultImporterContextValue';
const ImporterContext = createContext(createDefaultImporterContextValue());
export const ImporterProvider = ImporterContext.Provider;
export const ImporterConsumer = ImporterContext.Consumer;
ImporterContext.displayName = 'ImporterContext';
export default ImporterContext;
