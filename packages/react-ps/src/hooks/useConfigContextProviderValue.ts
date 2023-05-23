import { useMemo } from 'react';
import mergeContextObjects from '../utils/mergeContextObjects';

export function useConfigContextProviderValue(config: any, type: string) {
    const a = config?.[`parent${type.slice(0, 1).toUpperCase()}${type.slice(1)}`];
    const b = config?.[type];

    return useMemo(() => mergeContextObjects(a, b), [a, b]);
}

export default useConfigContextProviderValue;
