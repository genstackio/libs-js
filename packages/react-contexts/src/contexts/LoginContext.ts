import { createContext } from 'react';
import createDefaultLoginContextValue from '../utils/createDefaultLoginContextValue';
const LoginContext = createContext(createDefaultLoginContextValue());
export const LoginContextProvider = LoginContext.Provider;
export const LoginContextConsumer = LoginContext.Consumer;
LoginContext.displayName = 'LoginContext';
export default LoginContext;
