import { messages_context_value } from '../types';

export const createDefaultMessagesContextValue = (
    defaultValue: messages_context_value | undefined = undefined,
): messages_context_value => defaultValue || { messages: [] };

export default createDefaultMessagesContextValue;
