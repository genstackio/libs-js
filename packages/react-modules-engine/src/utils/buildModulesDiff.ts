import cleanModuleType from './cleanModuleType';

export function buildModulesDiff(diff: string | undefined, aliases: Record<string, string> = {}) {
    return (diff || '').split(/\s*,\s*/g).reduce(
        (acc, p) => {
            if ('-' === p.slice(0, 1)) {
                const pp = cleanModuleType(p.slice(1), aliases);
                acc.items[pp] = { ...(acc.items[pp] || {}), remove: true };
                acc.last = pp;
            } else if ('+' === p.slice(0, 1)) {
                const pp = cleanModuleType(p.slice(1), aliases);
                const append = [...((acc.items[acc.last] || {}).append || []), pp];
                acc.found[pp] = true;
                acc.items[acc.last] = { ...(acc.items[acc.last] || {}), append };
            } else if (-1 !== p.indexOf('>')) {
                const [a, b] = p.split(/\s*>\s*/) as string[];
                const aa = cleanModuleType(a, aliases);
                const append = [
                    ...((acc.items[aa] || {}).append || []),
                    ...b.split(/\s*\+\s*/g).map((bb) => cleanModuleType(bb, aliases)),
                ];
                acc.found = append.reduce((acc, k) => Object.assign(acc, { [k]: true }), acc.found);
                acc.items[aa] = { ...(acc.items[aa] || {}), append };
                acc.last = aa;
            } else if (-1 !== p.indexOf('<')) {
                const [a, b] = p.split(/\s*<\s*/) as string[];
                const aa = cleanModuleType(a, aliases);
                const prepend = [
                    ...((acc.items[aa] || {}).prepend || []),
                    ...b.split(/\s*\+\s*/g).map((bb) => cleanModuleType(bb, aliases)),
                ];
                acc.found = prepend.reduce((acc, k) => Object.assign(acc, { [k]: true }), acc.found);
                acc.items[aa] = { ...(acc.items[aa] || {}), prepend };
                acc.last = aa;
            }
            return acc;
        },
        { last: '_root', items: {}, found: [] } as {
            found: string[];
            last: string;
            items: Record<string, { prepend: string[]; append: string[]; remove: boolean }>;
        },
    );
}

export default buildModulesDiff;
