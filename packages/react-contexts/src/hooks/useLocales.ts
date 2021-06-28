import { useContext } from 'react';
import LocalesContext from '../contexts/LocalesContext';
import { locales_context_value } from '../types';

export const useLocales = (): locales_context_value => {
    return useContext(LocalesContext);
};

export default useLocales;
