import { useContext } from 'react';
import BoxContext from '../contexts/BoxContext';

export const useBox = () => {
    return useContext(BoxContext);
};

export default useBox;
