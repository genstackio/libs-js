import { useContext } from 'react';
import TranslationLocalesContext from '../contexts/TranslationLocalesContext';

export const useTranslationLocalesContext = () => {
    return useContext(TranslationLocalesContext);
};

// noinspection JSUnusedGlobalSymbols
export default useTranslationLocalesContext;
