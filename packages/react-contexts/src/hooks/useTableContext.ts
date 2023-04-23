import { useContext } from 'react';
import TableContext from '../contexts/TableContext';

export const useTableContext = () => {
    return useContext(TableContext);
};

export default useTableContext;
