import { createContext } from 'react';
import { dynamic_form_context_value } from '../types';
import createDefaultDynamicFormContextValue from '../utils/createDefaultDynamicFormContextValue';

export const DynamicFormContext = createContext<dynamic_form_context_value>(createDefaultDynamicFormContextValue());
export const DynamicFormContextProvider = DynamicFormContext.Provider;
export const DynamicFormContextConsumer = DynamicFormContext.Consumer;

export default DynamicFormContext;
