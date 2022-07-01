import { createContext } from 'react';
import createDefaultLogosContextValue from '../utils/createDefaultLogosContextValue';
const LogosContext = createContext(createDefaultLogosContextValue());
export const LogosProvider = LogosContext.Provider;
export const LogosConsumer = LogosContext.Consumer;
LogosContext.displayName = 'LogosContext';
export default LogosContext;
