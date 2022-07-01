import { createContext } from 'react';
import createDefaultBreadcrumbsFactoryContextValue from '../utils/createDefaultBreadcrumbsFactoryContextValue';
const BreadcrumbsFactoryContext = createContext(createDefaultBreadcrumbsFactoryContextValue());
export const BreadcrumbsFactoryProvider = BreadcrumbsFactoryContext.Provider;
export const BreadcrumbsFactoryConsumer = BreadcrumbsFactoryContext.Consumer;
BreadcrumbsFactoryContext.displayName = 'BreadcrumbsFactoryContext';
export default BreadcrumbsFactoryContext;
