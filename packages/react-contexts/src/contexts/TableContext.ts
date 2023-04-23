import { createContext } from 'react';
import createDefaultTableContextValue from '../utils/createDefaultTableContextValue';
const TableContext = createContext(createDefaultTableContextValue());
export const TableContextProvider = TableContext.Provider;
export const TableContextConsumer = TableContext.Consumer;
TableContext.displayName = 'TableContext';
export default TableContext;
