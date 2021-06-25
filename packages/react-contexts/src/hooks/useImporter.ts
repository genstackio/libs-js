import { useContext } from 'react';
import ImporterContext from '../contexts/ImporterContext';

export const useImporter = () => {
    return useContext(ImporterContext);
};

export default useImporter;
