import { createContext } from 'react';
import createDefaultMessagesContextValue from '../utils/createDefaultMessagesContextValue';
const MessagesContext = createContext(createDefaultMessagesContextValue());
export const MessagesProvider = MessagesContext.Provider;
export const MessagesConsumer = MessagesContext.Consumer;
MessagesContext.displayName = 'MessagesContext';
export default MessagesContext;
