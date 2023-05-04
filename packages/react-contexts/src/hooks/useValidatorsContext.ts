import { useContext } from 'react';
import ValidatorsContext from '../contexts/ValidatorsContext';

export const useValidatorsContext = () => {
    return useContext(ValidatorsContext);
};

export default useValidatorsContext;
