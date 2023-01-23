import { fields_context_value } from '../types';

export const createDefaultFieldsContextValue = (
    defaultValue: fields_context_value | undefined = undefined,
): fields_context_value => defaultValue || {};

export default createDefaultFieldsContextValue;
