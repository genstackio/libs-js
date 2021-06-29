import { fullscreen_context_value } from '../types';

export const createDefaultFullscreenContextValue = (
    defaultValue: fullscreen_context_value | undefined = {
        enter: async () => {
            return undefined;
        },
        exit: async () => {
            return undefined;
        },
        active: false,
    },
): fullscreen_context_value => {
    return defaultValue;
};

export default createDefaultFullscreenContextValue;
