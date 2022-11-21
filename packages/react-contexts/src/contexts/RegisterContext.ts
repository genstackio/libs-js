import { createContext } from 'react';
import createDefaultRegisterContextValue from '../utils/createDefaultRegisterContextValue';
const RegisterContext = createContext(createDefaultRegisterContextValue());
export const RegisterContextProvider = RegisterContext.Provider;
export const RegisterContextConsumer = RegisterContext.Consumer;
RegisterContext.displayName = 'RegisterContext';
export default RegisterContext;
