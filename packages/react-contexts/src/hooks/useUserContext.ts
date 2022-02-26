import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { user_context_value } from '../types';

export const useUserContext = (): user_context_value => {
    return useContext<user_context_value>(UserContext);
};

export default useUserContext;
