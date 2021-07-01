import { useContext } from 'react';
import DarkModeContext from '../contexts/DarkModeContext';

export const useIsDarkMode = (): boolean => {
    return 'dark' === useContext(DarkModeContext).darkMode;
};

export default useIsDarkMode;
