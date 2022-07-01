import { useContext } from 'react';
import LogosContext from '../contexts/LogosContext';

export const useLogos = () => {
    return useContext(LogosContext);
};

export default useLogos;
