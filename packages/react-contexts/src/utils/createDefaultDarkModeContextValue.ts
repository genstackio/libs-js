import { dark_mode_context_value } from '../types';

export const createDefaultDarkModeContextValue = (
    defaultValue: dark_mode_context_value | undefined = undefined,
): dark_mode_context_value =>
    defaultValue || {
        darkMode: 'default',
        setDarkMode: (mode: string) => {
            return;
        },
    };

export default createDefaultDarkModeContextValue;
