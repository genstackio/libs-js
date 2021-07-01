import { useContext } from 'react';
import NotificationsContext from '../contexts/NotificationsContext';
import { notifications_context_value } from '../types';

export const useNotifications = (): notifications_context_value => {
    return useContext(NotificationsContext);
};

export default useNotifications;
