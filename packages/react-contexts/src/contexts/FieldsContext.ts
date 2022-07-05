import { createContext } from 'react';
import { fields_context_value } from '../types';
import createDefaultFieldsContextValue from '../utils/createDefaultFieldsContextValue';
const FieldsContext = createContext<fields_context_value>(createDefaultFieldsContextValue());
export const FieldsProvider = FieldsContext.Provider;
export const FieldsConsumer = FieldsContext.Consumer;
FieldsContext.displayName = 'FieldsContext';
export default FieldsContext;
