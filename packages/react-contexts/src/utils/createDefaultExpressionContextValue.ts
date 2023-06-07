import { expression_context_value } from '../types';

export const createDefaultExpressionContextValue = (
    defaultValue: expression_context_value | undefined = undefined,
): expression_context_value => defaultValue || { eval: () => true };

export default createDefaultExpressionContextValue;
