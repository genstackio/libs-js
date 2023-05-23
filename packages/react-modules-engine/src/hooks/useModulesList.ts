import { useMemo } from 'react';
import buildModulesList from '../utils/buildModulesList';

export function useModulesList(
    listDsn: string | undefined,
    diffDsn: string | undefined,
    customParams: any | undefined,
    aliases: Record<string, string> | undefined,
): { type: string; items: any[] }[] {
    return useMemo(
        () => buildModulesList(listDsn, diffDsn, customParams, aliases) || [],
        [listDsn, diffDsn, customParams, aliases],
    );
}

export default useModulesList;
