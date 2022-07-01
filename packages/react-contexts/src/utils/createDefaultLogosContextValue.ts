import { logos_context_value } from '../types';

export const createDefaultLogosContextValue = (defaultValue: logos_context_value | undefined = undefined) =>
    defaultValue || {};

export default createDefaultLogosContextValue;
