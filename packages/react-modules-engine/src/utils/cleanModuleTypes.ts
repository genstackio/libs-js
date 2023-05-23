import cleanModuleType from './cleanModuleType';

export function cleanModuleTypes(o: Record<string, any> | undefined, aliases: Record<string, string> = {}) {
    return o
        ? Object.entries(o).reduce((acc, [k, v]) => Object.assign(acc, { [cleanModuleType(k, aliases)]: v }), {})
        : o;
}

export default cleanModuleTypes;
