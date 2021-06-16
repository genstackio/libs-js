import {createContext} from "react";
import {user_context_value} from '../types';
import createDefaultUserContextValue from '../utils/createDefaultUserContextValue';
const UserContext = createContext<user_context_value>(createDefaultUserContextValue())
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
UserContext.displayName = 'UserContext';
export default UserContext