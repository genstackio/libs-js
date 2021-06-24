import { box_context_value } from '../types';

export const createDefaultBoxContextValue = (
    defaultValue: box_context_value | undefined = undefined,
): box_context_value =>
    defaultValue || { color: undefined, variant: undefined };

export default createDefaultBoxContextValue;
