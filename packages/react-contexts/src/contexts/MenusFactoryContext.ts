import { createContext } from 'react';
import createDefaultMenusFactoryContextValue from '../utils/createDefaultMenusFactoryContextValue';
const MenusFactoryContext = createContext(createDefaultMenusFactoryContextValue());
export const MenusFactoryProvider = MenusFactoryContext.Provider;
export const MenusFactoryConsumer = MenusFactoryContext.Consumer;
MenusFactoryContext.displayName = 'MenusFactoryContext';
export default MenusFactoryContext;
