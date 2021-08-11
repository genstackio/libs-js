import { useCallback, useState } from 'react';

export function useActivator(defaultValue = false): [boolean, () => void, () => void] {
    const [state, setState] = useState(defaultValue);
    const activate = useCallback(() => {
        setState(true);
    }, [setState]);
    const deactivate = useCallback(() => {
        setState(false);
    }, [setState]);

    return [state, activate, deactivate];
}

export default useActivator;
