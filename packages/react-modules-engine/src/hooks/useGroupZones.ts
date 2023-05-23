import { useMemo } from 'react';
import { group_definition, group_zones, zone_fn, zone_map } from '../types';

export function useGroupZones(groups: group_definition[], zoneDefs: zone_map, fallbackFn?: zone_fn): group_zones {
    return useMemo(
        () =>
            groups.reduce(
                (acc, g) => {
                    const zone = zoneDefs[g.type || ''] || (fallbackFn && fallbackFn(g.type || '', acc)) || undefined;
                    acc[zone || 'unknown'] = acc[zone || 'unknown'] || [];
                    acc[zone || 'unknown'].push(g);
                    return acc;
                },
                Object.values(zoneDefs).reduce((acc2, k) => {
                    acc2[k] = acc2[k] || [];
                    return acc2;
                }, {} as any),
            ),
        [groups],
    );
}

export default useGroupZones;
