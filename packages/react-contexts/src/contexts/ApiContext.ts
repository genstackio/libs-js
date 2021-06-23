import { createContext } from 'react';
import createDefaultApiContextValue from '../utils/createDefaultApiContextValue';
const ApiContext = createContext(createDefaultApiContextValue());
export const ApiProvider = ApiContext.Provider;
export const ApiConsumer = ApiContext.Consumer;
ApiContext.displayName = 'ApiContext';
export default ApiContext;
