import { useCallback, useContext } from 'react';
import DarkModeContext from '../contexts/DarkModeContext';

export const useDarkModeToggle = (): [boolean, Function] => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);
    const toggle = useCallback(() => {
        setDarkMode(darkMode === 'dark' ? 'default' : 'dark');
    }, [darkMode, setDarkMode]);
    return [darkMode === 'dark', toggle];
};

export default useDarkModeToggle;
