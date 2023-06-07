import { createContext } from 'react';
import { expression_context_value } from '../types';
import createDefaultExpressionContextValue from '../utils/createDefaultExpressionContextValue';
const ExpressionContext = createContext<expression_context_value>(createDefaultExpressionContextValue());
export const ExpressionContextProvider = ExpressionContext.Provider;
export const ExpressionContextConsumer = ExpressionContext.Consumer;
ExpressionContext.displayName = 'ExpressionContext';
export default ExpressionContext;
