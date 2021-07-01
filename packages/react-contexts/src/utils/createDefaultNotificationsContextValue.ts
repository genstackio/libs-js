import { notifications_context_value } from '../types';

export const createDefaultNotificationsContextValue = (
    defaultValue: notifications_context_value | undefined = undefined,
): notifications_context_value => defaultValue || { notifications: [] };

export default createDefaultNotificationsContextValue;
