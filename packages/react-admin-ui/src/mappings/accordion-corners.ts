export const accordionCorners = {
    default: {
        none: '',
        'r-sm': 'rounded-sm',
        rounded: 'rounded-2xl',
        'top-rounded': 'rounded-t-2xl',
        'left-rounded': 'rounded-l-2xl',
        'rounded-small': 'rounded-xl',
        'top-rounded-small': 'rounded-t-xl',
        'left-rounded-small': 'rounded-l-xl',
        'rounded-xsmall': 'rounded-lg',
        'top-rounded-xsmall': 'rounded-t-lg',
        'left-rounded-xsmall': 'rounded-l-lg',
        circle: 'rounded-full',
        'rounded-xxsmall': 'rounded',
        square: '',
        default: 'rounded-md',
    },
    active: {
        none: '',
        'r-sm': 'rounded-t-sm rounded-b-sm',
        rounded: 'rounded-t-2xl rounded-b-2xl',
        'top-rounded': 'rounded-t-2xl',
        'left-rounded': 'rounded-l-2xl',
        'rounded-small': 'rounded-t-xl rounded-b-xl',
        'top-rounded-small': 'rounded-t-xl',
        'left-rounded-small': 'rounded-l-xl',
        'rounded-xsmall': 'rounded-t-lg rounded-b-lg',
        'top-rounded-xsmall': 'rounded-t-lg',
        'left-rounded-xsmall': 'rounded-l-lg',
        circle: 'rounded-t-full rounded-b-full',
        'rounded-xxsmall': 'rounded-t rounded-b',
        square: '',
        default: 'rounded-t-md rounded-b-md',
    },
};

export const accordionSummaryCorners = {
    default: {
        none: '',
        'r-sm': 'rounded-sm',
        rounded: 'rounded-2xl',
        'top-rounded': 'rounded-t-2xl',
        'left-rounded': 'rounded-l-2xl',
        'rounded-small': 'rounded-xl',
        'top-rounded-small': 'rounded-t-xl',
        'left-rounded-small': 'rounded-l-xl',
        'rounded-xsmall': 'rounded-lg',
        'top-rounded-xsmall': 'rounded-t-lg',
        'left-rounded-xsmall': 'rounded-l-lg',
        circle: 'rounded-full',
        'rounded-xxsmall': 'rounded',
        square: '',
        default: 'rounded-md',
    },
    active: {
        none: '',
        'r-sm': 'rounded-t-sm',
        rounded: 'rounded-t-2xl',
        'top-rounded': 'rounded-t-2xl',
        'left-rounded': 'rounded-l-2xl',
        'rounded-small': 'rounded-t-xl',
        'top-rounded-small': 'rounded-t-xl',
        'left-rounded-small': 'rounded-l-xl',
        'rounded-xsmall': 'rounded-t-lg',
        'top-rounded-xsmall': 'rounded-t-lg',
        'left-rounded-xsmall': 'rounded-l-lg',
        circle: 'rounded-t-full',
        'rounded-xxsmall': 'rounded-t',
        square: '',
        default: 'rounded-t-md',
    },
};

export const accordionDetailsCorners = {
    default: {
        none: '',
        'r-sm': 'rounded-b-sm',
        rounded: 'rounded-b-2xl',
        'top-rounded': 'rounded-b-2xl',
        'left-rounded': 'rounded-l-2xl',
        'rounded-small': 'rounded-b-xl',
        'top-rounded-small': 'rounded-b-xl',
        'left-rounded-small': 'rounded-l-xl',
        'rounded-xsmall': 'rounded-b-lg',
        'top-rounded-xsmall': 'rounded-b-lg',
        'left-rounded-xsmall': 'rounded-l-lg',
        circle: 'rounded-b-full',
        'rounded-xxsmall': 'rounded-b',
        square: '',
        default: 'rounded-b-md',
    },
    active: {
        none: '',
        'r-sm': 'rounded-b-sm',
        rounded: 'rounded-b-2xl',
        'top-rounded': 'rounded-b-2xl',
        'left-rounded': 'rounded-l-2xl',
        'rounded-small': 'rounded-b-xl',
        'top-rounded-small': 'rounded-b-xl',
        'left-rounded-small': 'rounded-l-xl',
        'rounded-xsmall': 'rounded-b-lg',
        'top-rounded-xsmall': 'rounded-b-lg',
        'left-rounded-xsmall': 'rounded-l-lg',
        circle: 'rounded-b-full',
        'rounded-xxsmall': 'rounded-b',
        square: '',
        default: 'rounded-b-md',
    },
};

export const accordionCornerValues = Object.keys(accordionCorners.default);

export function accordionCornerClass(corner: undefined | accordion_corner, { active = false }: { active?: boolean }) {
    const x = accordionCorners[active ? 'active' : 'default'];
    return undefined !== x[corner || ''] ? x[corner || ''] : x['default'];
}

export function accordionSummaryCornerClass(
    corner: undefined | accordion_corner,
    { active = false }: { active?: boolean },
) {
    const x = accordionSummaryCorners[active ? 'active' : 'default'];
    return undefined !== x[corner || ''] ? x[corner || ''] : x['default'];
}

export function accordionDetailsCornerClass(
    corner: undefined | accordion_corner,
    { active = false }: { active?: boolean },
) {
    const x = accordionDetailsCorners[active ? 'active' : 'default'];
    return undefined !== x[corner || ''] ? x[corner || ''] : x['default'];
}

export type accordion_corner = 'none' | 'default';

export const defaultAccordionCorner = 'default';

// noinspection JSUnusedGlobalSymbols
export default accordionCornerClass;
