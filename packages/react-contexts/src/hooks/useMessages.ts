import { useContext } from 'react';
import MessagesContext from '../contexts/MessagesContext';
import { messages_context_value } from '../types';

export const useMessages = (): messages_context_value => {
    return useContext(MessagesContext);
};

export default useMessages;
