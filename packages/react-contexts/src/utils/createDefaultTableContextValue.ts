import { table_context_value } from '../types';

export const createDefaultTableContextValue = (
    defaultValue: table_context_value | undefined = undefined,
): table_context_value => defaultValue || { renderers: {} };

export default createDefaultTableContextValue;
