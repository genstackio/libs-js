import { ambiance_context_value } from '../types';

export const createDefaultAmbianceContextValue = (
    defaultValue: ambiance_context_value | undefined = undefined,
): ambiance_context_value => defaultValue || {};

export default createDefaultAmbianceContextValue;
