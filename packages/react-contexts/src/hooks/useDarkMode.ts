import { useContext } from 'react';
import DarkModeContext from '../contexts/DarkModeContext';
import { dark_mode_context_value } from '../types';

export const useDarkMode = (): dark_mode_context_value => {
    return useContext(DarkModeContext);
};

export default useDarkMode;
