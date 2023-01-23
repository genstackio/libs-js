import { useContext } from 'react';
import CleanDataContext from '../contexts/CleanDataContext';

export function useCleanData() {
    return useContext(CleanDataContext);
}

export default useCleanData;
