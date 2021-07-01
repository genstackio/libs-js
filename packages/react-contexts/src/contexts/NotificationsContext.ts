import { createContext } from 'react';
import createDefaultNotificationsContextValue from '../utils/createDefaultNotificationsContextValue';
const NotificationsContext = createContext(createDefaultNotificationsContextValue());
export const NotificationsProvider = NotificationsContext.Provider;
export const NotificationsConsumer = NotificationsContext.Consumer;
NotificationsContext.displayName = 'NotificationsContext';
export default NotificationsContext;
