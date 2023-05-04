import { useCallback } from 'react';

export function useNestedAwareSubmit(fn: Function, nested = false) {
    return useCallback(
        (e: any) => {
            if (!nested) return fn(e);
            e.stopPropagation();
            e.preventDefault();
            return fn(e);
        },
        [fn, nested],
    );
}

// noinspection JSUnusedGlobalSymbols
export default useNestedAwareSubmit;
