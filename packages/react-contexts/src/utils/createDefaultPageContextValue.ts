import { page_context_value } from '../types';

export const createDefaultPageContextValue = (
    defaultValue: page_context_value | undefined = undefined,
): page_context_value | undefined => defaultValue;

export default createDefaultPageContextValue;
