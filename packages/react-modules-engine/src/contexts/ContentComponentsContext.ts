import { createContext } from 'react';
import { content_components_context_value } from '../types';
import createDefaultContentComponentsContextValue from '../utils/createDefaultContentComponentsContextValue';

export const ContentComponentsContext = createContext<content_components_context_value>(
    createDefaultContentComponentsContextValue(),
);
export const ContentComponentsContextProvider = ContentComponentsContext.Provider;
export const ContentComponentsContextConsumer = ContentComponentsContext.Consumer;

export default ContentComponentsContext;
