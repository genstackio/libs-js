import { createContext } from 'react';
import { admin_context_value } from '../types';
import createDefaultAdminContextValue from '../utils/createDefaultAdminContextValue';

export const AdminContext = createContext<admin_context_value>(createDefaultAdminContextValue());
// noinspection JSUnusedGlobalSymbols
export const AdminContextProvider = AdminContext.Provider;
// noinspection JSUnusedGlobalSymbols
export const AdminContextConsumer = AdminContext.Consumer;

// noinspection JSUnusedGlobalSymbols
export default AdminContext;
