import { createContext } from 'react';
import createDefaultLinkContextValue from '../utils/createDefaultLinkContextValue';
const LinkContext = createContext(createDefaultLinkContextValue());
export const LinkProvider = LinkContext.Provider;
export const LinkConsumer = LinkContext.Consumer;
LinkContext.displayName = 'LinkContext';
export default LinkContext;
