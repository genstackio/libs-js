import { createContext } from 'react';
import { designer_context_value } from '../types';
import createDefaultDesignerContextValue from '../utils/createDefaultDesignerContextValue';

export const DesignerContext = createContext<designer_context_value>(createDefaultDesignerContextValue());
export const DesignerContextProvider = DesignerContext.Provider;
export const DesignerContextConsumer = DesignerContext.Consumer;

export default DesignerContext;
