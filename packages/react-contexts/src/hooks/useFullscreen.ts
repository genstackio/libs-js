import { useCallback, useContext, useMemo } from 'react';
import FullscreenContext from '../contexts/FullscreenContext';

export const useFullscreen = () => {
    const handle = useContext(FullscreenContext);
    const { active, enter, exit } = handle;
    const toggle = useCallback(() => {
        active && exit();
        !active && enter();
    }, [active, enter, exit]);

    return useMemo(() => ({ ...handle, toggle }), [handle, toggle]);
};

export default useFullscreen;
