import buildModulesDiff from './buildModulesDiff';
import buildFinalPartsFromPart from './buildFinalPartsFromPart';
import { module_definition } from '../types';
import cleanModuleType from './cleanModuleType';
import cleanModuleTypes from './cleanModuleTypes';

export function buildModulesList(
    dsn,
    diff,
    custom,
    aliases: Record<string, string> = {},
): { type: string; items: any[] }[] {
    const parsedDiff = buildModulesDiff(diff, aliases);
    const groups = dsn?.split(/\s*;\s*/g) || [];
    custom = custom ? cleanModuleTypes(custom, aliases) : undefined;
    return groups.map((g) => {
        const tt = g.split('=');
        let type = 'unknown';
        let gDsn = g;
        if (tt.length > 1) {
            [type, gDsn] = tt;
        }
        const parts = gDsn.split(/\s*,\s*/g);
        return {
            type,
            items: parts
                .reduce((acc, p) => {
                    const pp = cleanModuleType(p, aliases);
                    return [...acc, ...(parsedDiff.found[pp] ? [] : buildFinalPartsFromPart(pp, parsedDiff, custom))];
                }, [] as module_definition[])
                .filter((x) => false !== x?.config?.visible),
        };
    });
}

export default buildModulesList;
