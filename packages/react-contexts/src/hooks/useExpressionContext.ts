import { useContext } from 'react';
import ExpressionContext from '../contexts/ExpressionContext';

export const useExpressionContext = () => {
    return useContext(ExpressionContext);
};

// noinspection JSUnusedGlobalSymbols
export default useExpressionContext;
