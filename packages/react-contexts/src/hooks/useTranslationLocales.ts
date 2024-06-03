import useTranslationLocalesContext from './useTranslationLocalesContext';

export const useTranslationLocales = (): string[] => {
    return useTranslationLocalesContext().locales;
};

// noinspection JSUnusedGlobalSymbols
export default useTranslationLocales;
