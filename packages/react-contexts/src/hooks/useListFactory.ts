import { useContext } from 'react';
import ListFactoryContext from '../contexts/ListFactoryContext';

export const useListFactory = () => {
    return useContext(ListFactoryContext);
};

export default useListFactory;
