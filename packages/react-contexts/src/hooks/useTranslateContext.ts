import { useContext } from 'react';
import TranslateContext from '../contexts/TranslateContext';

export const useTranslateContext = () => {
    return useContext(TranslateContext);
};

// noinspection JSUnusedGlobalSymbols
export default useTranslateContext;
