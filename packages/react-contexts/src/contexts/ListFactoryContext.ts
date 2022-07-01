import { createContext } from 'react';
import createDefaultListFactoryContextValue from '../utils/createDefaultListFactoryContextValue';
const ListFactoryContext = createContext(createDefaultListFactoryContextValue());
export const ListFactoryProvider = ListFactoryContext.Provider;
export const ListFactoryConsumer = ListFactoryContext.Consumer;
ListFactoryContext.displayName = 'ListFactoryContext';
export default ListFactoryContext;
