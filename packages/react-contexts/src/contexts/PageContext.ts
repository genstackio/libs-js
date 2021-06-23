import { createContext } from 'react';
import createDefaultPageContextValue from '../utils/createDefaultPageContextValue';
const PageContext = createContext(createDefaultPageContextValue());
export const PageProvider = PageContext.Provider;
export const PageConsumer = PageContext.Consumer;
PageContext.displayName = 'PageContext';
export default PageContext;
