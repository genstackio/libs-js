import { useMemo } from 'react';
import parseStylingDsn from '../utils/parseStylingDsn';

export function useStylingDsn(value: string | undefined) {
    return useMemo(() => (value ? parseStylingDsn(value) : {}), [value]);
}

// noinspection JSUnusedGlobalSymbols
export default useStylingDsn;
