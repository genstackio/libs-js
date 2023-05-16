import { useCallback } from 'react';
import stopPrevent from '../utils/stopPrevent';

export function useNestedAwareSubmit(fn: Function, nested = false) {
    return useCallback(
        (e: any) => {
            if (!nested) return fn(e);
            stopPrevent(e);
            return fn(e);
        },
        [fn, nested],
    );
}

// noinspection JSUnusedGlobalSymbols
export default useNestedAwareSubmit;
