import { useContext } from 'react';
import FieldsContext from '../contexts/FieldsContext';

export const useFields = () => {
    return useContext(FieldsContext);
};

export default useFields;
