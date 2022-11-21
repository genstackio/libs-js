import { useContext } from 'react';
import RegisterContext from '../contexts/RegisterContext';

export const useRegisterContext = () => {
    return useContext(RegisterContext);
};

export default useRegisterContext;
