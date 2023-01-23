import preset from '../preset';

export function accordionCornerClass(corner: undefined | accordion_corner, { active = false }: { active?: boolean }) {
    const z = preset.get('accordionCorner');
    const x = (z.styles || {})[active ? 'active' : 'default'] || {};
    return undefined !== x[corner || z.default] ? x[corner || z.default] : x[z.default];
}

export function accordionSummaryCornerClass(
    corner: undefined | accordion_corner,
    { active = false }: { active?: boolean },
) {
    const z = preset.get('accordionSummaryCorner');
    const x = (z.styles || {})[active ? 'active' : 'default'] || {};
    return undefined !== x[corner || z.default] ? x[corner || z.default] : x[z.default];
}

export function accordionDetailsCornerClass(
    corner: undefined | accordion_corner,
    { active = false }: { active?: boolean },
) {
    const z = preset.get('accordionDetailsCorner');
    const x = (z.styles || {})[active ? 'active' : 'default'] || {};
    return undefined !== x[corner || z.default] ? x[corner || z.default] : x[z.default];
}

export type accordion_corner = 'none' | 'default';

// noinspection JSUnusedGlobalSymbols
export default accordionCornerClass;
