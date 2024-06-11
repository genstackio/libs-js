import { useContext } from 'react';
import GenerateContext from '../contexts/GenerateContext';

export const useGenerateContext = () => {
    return useContext(GenerateContext);
};

// noinspection JSUnusedGlobalSymbols
export default useGenerateContext;
