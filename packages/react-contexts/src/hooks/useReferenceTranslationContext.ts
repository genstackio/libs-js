import { useContext } from 'react';
import ReferenceTranslationContext from '../contexts/ReferenceTranslationContext';

export const useReferenceTranslationContext = () => {
    return useContext(ReferenceTranslationContext);
};

// noinspection JSUnusedGlobalSymbols
export default useReferenceTranslationContext;
